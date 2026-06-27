import fs from "fs";
import path from "path";

const RESUME_PATH = path.join(
  process.cwd(),
  "src/content/resume_samkuhlmann.md",
);

export function getResumeContent() {
  return fs.readFileSync(RESUME_PATH, "utf-8");
}
