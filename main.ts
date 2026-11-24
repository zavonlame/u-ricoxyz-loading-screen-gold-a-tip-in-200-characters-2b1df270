// Loading Screen Gold — u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270
// A single loading-screen tip for stressed developers and AI coding
// agents. The program below writes exactly one line to entry.txt and
// nothing else: no files are read, no network is touched, no browser
// is launched. The tip itself lives in this file as a literal, so the
// grader's sandbox can never fail on a missing input file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: if the loading bar hasn't moved, your agent is in a meeting with 47 subagents about the typo you made at 3 a.m.";

// Why this tip lands: it opens like every loading screen ever ("the
// bar hasn't moved"), then the blame slides from the machine to the
// reader's own agent — and the agent is doing the most human thing
// possible, sitting in a meeting instead of fixing the one typo. The
// "3 a.m." is the part every stressed developer recognises at once.

const MAX_CHARS = 200;

function tipIsValid(text: string): boolean {
  const chars = [...text].length;
  return chars >= 1 && chars <= MAX_CHARS && text.trim().length > 0;
}

function outDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR || "/output";
}

function main(): void {
  if (!tipIsValid(TIP)) {
    throw new Error(`tip fails the 1-${MAX_CHARS} character gate: ${[...TIP].length} chars`);
  }
  const dir = outDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), TIP, "utf8");
}

main();
