#!/usr/bin/env node
// Integrity checks for docs content:
//  1. Every image referenced in content/ exists under static/.
//  2. Every internal /docs/... link in content/ resolves to a content file.
// Run: node scripts/check-refs.mjs   (exits non-zero on any failure)

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const contentDir = join(root, "content");
const staticDir = join(root, "static");

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return walk(p);
    return extname(p) === ".md" ? [p] : [];
  });
}

const files = walk(contentDir);
const errors = [];

const imageRe = /\/images\/[A-Za-z0-9_./-]+\.(?:png|webp|jpg|jpeg|svg|gif)/g;
const linkRe = /(?:\]\(|href=")(\/docs\/[A-Za-z0-9_/-]*?)\/?(?:[#?][^)"]*)?(?:\)|")/g;

// A /docs/foo/bar link resolves if content/docs/foo/bar.md or .../_index.md exists.
function linkResolves(urlPath) {
  const rel = urlPath.replace(/^\//, "").replace(/\/$/, "");
  return (
    existsSync(join(contentDir, `${rel}.md`)) ||
    existsSync(join(contentDir, rel, "_index.md")) ||
    existsSync(join(contentDir, rel, "index.md"))
  );
}

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const shortName = file.slice(root.length);

  for (const m of text.match(imageRe) ?? []) {
    if (!existsSync(join(staticDir, m))) {
      errors.push(`${shortName}: missing image ${m}`);
    }
  }

  for (const m of text.matchAll(linkRe)) {
    if (!linkResolves(m[1])) {
      errors.push(`${shortName}: broken internal link ${m[1]}`);
    }
  }
}

if (errors.length) {
  console.error(`check-refs: ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}
console.log(`check-refs: OK (${files.length} content files checked)`);
