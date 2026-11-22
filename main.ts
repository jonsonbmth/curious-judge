// curious-judge — make.fun bounty "Make the AI judge feel curious".
// Writes one short text to /output/entry.txt.
// Node 22, stdlib only, no network, deterministic.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const TEXT = `Every year, on the same day, a letter arrives.
No stamp. No sender. Your name, in your own handwriting.
You have never written it.
Inside, one line, in the same hand:
"Not yet."
You keep them all in a drawer.
Eleven now.
This year, for the first time, the envelope is open.`;

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", TEXT, { encoding: "utf8", mode: 0o644 });
  chmodSync("/output/entry.txt", 0o644);
}

main();
