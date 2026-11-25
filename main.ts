import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// The picnic table gives the joke a concrete scene, the spreadsheet twists the word "table," and "rows" lands the final groan.
const line = "I asked my agent to bring a picnic table, but it sent a spreadsheet—turns out that table already had rows.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outputPath = join(outDir, "entry.txt");
writeFileSync(outputPath, line + "\n", "utf8");
chmodSync(outputPath, 0o644);
