#!/usr/bin/env node
// Zero-dependency static server for local preview. Serves the repo root, so
// the landing page and the generated /docs/ handboek resolve the same way
// GitHub Pages serves them.
//
// Deliberately dependency-free: this repo has no build step and no
// node_modules, and a preview server is not a reason to grow either.
import { spawn } from 'node:child_process';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const argv = process.argv.slice(2);
const openIdx = argv.indexOf('--open');
const openPath = openIdx === -1 ? null : (argv[openIdx + 1] ?? '/');
const portArg = argv.find((a) => /^\d+$/.test(a));
const port = Number(process.env.PORT ?? portArg ?? 8000);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
};

/** Resolve a URL path inside root, or null if it escapes (`..`, absolute). */
function resolveInRoot(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  const target = resolve(join(root, normalize(decoded)));
  return target === root || target.startsWith(root + sep) ? target : null;
}

const server = createServer(async (req, res) => {
  const send = (code, body) => {
    res.writeHead(code, { 'content-type': 'text/plain; charset=utf-8' });
    res.end(body);
  };

  const target = resolveInRoot(req.url ?? '/');
  if (!target) return send(403, 'Forbidden');

  let file = target;
  try {
    if ((await stat(file)).isDirectory()) {
      if (!(req.url ?? '/').split('?')[0].endsWith('/')) {
        res.writeHead(301, { location: `${(req.url ?? '/').split('?')[0]}/` });
        return res.end();
      }
      file = join(file, 'index.html');
      await stat(file);
    }
  } catch {
    return send(404, `Not found: ${req.url}`);
  }

  res.writeHead(200, {
    'content-type': TYPES[extname(file).toLowerCase()] ?? 'application/octet-stream',
    'cache-control': 'no-cache',
  });
  createReadStream(file).pipe(res);
});

server.listen(port, () => {
  console.log(`gezel-site → http://localhost:${port}/`);
  console.log(`handboek   → http://localhost:${port}/docs/`);
  if (openPath === null) return;
  const url = `http://localhost:${port}${openPath.startsWith('/') ? openPath : `/${openPath}`}`;
  const cmd =
    process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
  spawn(cmd, [url], { stdio: 'ignore', detached: true, shell: process.platform === 'win32' }).unref();
});
