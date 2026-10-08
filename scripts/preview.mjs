import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
const root = path.resolve("build/client");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".data": "text/x-script",
};
http
  .createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(
        new URL(request.url, "http://localhost").pathname,
      );
      const target = path.resolve(root, `.${pathname}`);
      if (!target.startsWith(root + path.sep) && target !== root) {
        response.writeHead(403);
        response.end();
        return;
      }
      let file;
      for (const candidate of [
        target,
        `${target}.html`,
        path.join(target, "index.html"),
      ]) {
        try {
          if ((await fs.stat(candidate)).isFile()) {
            file = candidate;
            break;
          }
        } catch {
          /* try next */
        }
      }
      const missing = !file;
      file ??= path.join(root, "404.html");
      response.writeHead(missing ? 404 : 200, {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
      });
      response.end(await fs.readFile(file));
    } catch {
      response.writeHead(500);
      response.end("Unable to load this page.");
    }
  })
  .listen(4173, "0.0.0.0", () =>
    console.log("Production preview: http://localhost:4173"),
  );
