// One Line, Best Line — writes a single entertaining line to /output/entry.txt.
// Node 22, stdlib only, deterministic: the same bytes on every run.
// The line is 91 characters: a Roomba escapes, joins a biker gang, and the
// punch lands in the same single sentence — no setup outside the line itself.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My Roomba escaped, joined a biker gang, and now it only comes home to vacuum up my dignity.";

const chars = [...LINE].length;
if (chars < 1 || chars > 240) {
  throw new Error(`entry must be 1-240 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (!/[.!?]$/.test(LINE)) {
  throw new Error("entry must land as one sentence with terminal punctuation");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
