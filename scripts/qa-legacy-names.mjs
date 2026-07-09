#!/usr/bin/env node
/**
 * Legacy-name QA — fail if wrong-port copy appears in St. John's NL site source.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const SCAN_DIRS = ["src", "public"];
const SKIP = new Set(["node_modules", ".next", "out"]);

const DISAMBIGUATION = "src/app/st-johns-newfoundland-vs-saint-john-new-brunswick/page.tsx";

const FORBIDDEN = [
  { label: "Alaska (wrong region)", pattern: /\bAlaska\b/i },
  { label: "Juneau", pattern: /\bJuneau\b/i },
  { label: "Skagway", pattern: /\bSkagway\b/i },
  { label: "Ketchikan", pattern: /\bKetchikan\b/i },
  { label: "Ward Cove", pattern: /\bWard Cove\b/i },
  { label: "Haines (Alaska port)", pattern: /\bHaines\b/i },
  { label: "Seward", pattern: /\bSeward\b/i },
  { label: "Misty Fjords", pattern: /\bMisty Fjords\b/i },
  { label: "bald eagle", pattern: /\bbald eagle\b/i },
  { label: "Cozumel", pattern: /\bCozumel\b/i },
  { label: "Jamaica", pattern: /\bJamaica\b/i },
  { label: "Barbados", pattern: /\bBarbados\b/i },
  { label: "Grand Turk", pattern: /\bGrand Turk\b/i },
  { label: "Geiranger", pattern: /\bGeiranger\b/i },
  { label: "Flam (Norway)", pattern: /\bFlam\b/i },
  { label: "Bergen", pattern: /\bBergen\b/i },
  { label: "Portofino", pattern: /\bPortofino\b/i },
  { label: "Villefranche", pattern: /\bVillefranche\b/i },
  { label: "Halifax (wrong port)", pattern: /\bHalifax\b/i },
  { label: "Peggy's Cove", pattern: /Peggy'?s Cove/i },
  { label: "Saint John NB (outside disambiguation)", pattern: /\bSaint John\b/i, allowFile: DISAMBIGUATION },
  { label: "New Brunswick (outside disambiguation)", pattern: /\bNew Brunswick\b/i, allowFile: DISAMBIGUATION },
];

const WRONG_DOMAINS = [
  /alaskacruiseexcursion\.com/i,
  /halifaxshoreexcursions\.com/i,
  /skagwayshoreexcursions\.com/i,
  /norwayshoreexcursions\.com/i,
  /portofinoshoreexcursions\.com/i,
  /villefrancheshoreexcursions\.com/i,
];

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, files);
    else if (/\.(tsx?|css|json|mjs|html|txt|xml)$/.test(name)) files.push(p);
  }
  return files;
}

const files = SCAN_DIRS.flatMap((d) => {
  const p = join(ROOT, d);
  try {
    return walk(p);
  } catch {
    return [];
  }
});

const failures = [];

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const rel = file.replace(ROOT + "/", "");

  for (const { label, pattern, allowFile } of FORBIDDEN) {
    if (allowFile && rel === allowFile) continue;
    if (pattern.test(text)) {
      failures.push(`${rel}: forbidden ${label}`);
    }
  }
  for (const pattern of WRONG_DOMAINS) {
    if (pattern.test(text)) {
      failures.push(`${rel}: wrong domain reference`);
    }
  }
}

const siteTs = readFileSync(join(ROOT, "src/lib/site.ts"), "utf8");
if (!siteTs.includes("saintjohnsshoreexcursions.com")) {
  failures.push("src/lib/site.ts: missing saintjohnsshoreexcursions.com");
}
if (!siteTs.includes("Newfoundland and Labrador")) {
  failures.push("src/lib/site.ts: missing Newfoundland and Labrador geography label");
}

if (failures.length) {
  console.error("Legacy-name QA FAILED:\n");
  failures.forEach((f) => console.error("  -", f));
  process.exit(1);
}

console.log(`Legacy-name QA passed (${files.length} files scanned).`);
