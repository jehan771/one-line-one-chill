import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Chill — entry for u-azazex-one-line-one-chill-6d4d5488.
// A single sentence of horror, under 200 characters, built from its
// clauses so the rhythm of the scare is visible in the code itself.

const OPENING = "The baby monitor crackled,";
const TURN = "and in my own voice,";
const STING = "it whispered my daughter's name from the empty crib.";

const line = [OPENING, TURN, STING].join(" ");

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

// One sentence, one breath: it must end on a full stop and contain no
// line break, so the judge reads exactly one line of horror.
if (!line.endsWith(".") || line.includes("\n")) {
  throw new Error("entry must be a single sentence on one line");
}

// The gate counts characters, the leaderboard tie-break counts bytes;
// log both so a re-run can be checked against the expected hash.
const byteLength = Buffer.byteLength(line, "utf8");
if (byteLength > 200) {
  throw new Error(`entry is ${byteLength} bytes, over the 200-byte budget`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} characters (${byteLength} bytes) to /output/entry.txt`);
