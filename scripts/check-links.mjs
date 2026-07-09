#!/usr/bin/env node
/**
 * Validate internal href paths against known static routes.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next" || name === "out") continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, files);
    else if (/\.(tsx?|jsx?)$/.test(name)) files.push(p);
  }
  return files;
}

const appDir = join(ROOT, "src/app");
const validPaths = new Set(["/"]);

function collectRoutes(dir, base = "") {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name.startsWith("_") || name === "api") continue;
      const segment = name.startsWith("(") ? "" : `/${name}`;
      collectRoutes(p, `${base}${segment}`);
    } else if (name === "page.tsx" || name === "page.ts") {
      validPaths.add(base || "/");
    }
  }
}

collectRoutes(appDir);

const srcFiles = walk(join(ROOT, "src"));
const hrefPattern = /href=["'](\/[^"'#?]*)/g;
const failures = [];

for (const file of srcFiles) {
  const text = readFileSync(file, "utf8");
  const rel = file.replace(ROOT + "/", "");
  let match;
  while ((match = hrefPattern.exec(text)) !== null) {
    let path = match[1];
    if (path.endsWith("/") && path.length > 1) path = path.slice(0, -1);
    if (!validPaths.has(path)) {
      failures.push(`${rel}: broken internal link ${path}`);
    }
  }
}

if (failures.length) {
  console.error("Link check FAILED:\n");
  [...new Set(failures)].forEach((f) => console.error("  -", f));
  process.exit(1);
}

console.log(`Link check passed (${validPaths.size} routes, ${srcFiles.length} files scanned).`);
