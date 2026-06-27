import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const port = Number(process.env.RESUME_PDF_PORT || 3100);
const url =
  process.env.RESUME_PDF_URL || `http://127.0.0.1:${port}/resume?pdf=1`;
const output = path.join(process.cwd(), "public/sam-kuhlmann-resume.pdf");
const chrome =
  process.env.CHROME_BIN ||
  ["/usr/bin/google-chrome", "/usr/bin/google-chrome-stable", "/usr/bin/chromium"]
    .find((candidate) => fs.existsSync(candidate));

if (!chrome) {
  throw new Error(
    "Could not find Chrome. Set CHROME_BIN to a Chrome or Chromium executable.",
  );
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: options.stdio || "inherit",
      shell: false,
      ...options,
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} exited with code ${code}`));
      }
    });
  });
}

async function waitForRoute(targetUrl, timeoutMs = 30000) {
  const start = Date.now();
  let lastError;

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(targetUrl);
      if (response.ok) return true;
    } catch (error) {
      lastError = error;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw lastError || new Error(`Timed out waiting for ${targetUrl}`);
}

let server;
const usingExternalUrl = Boolean(process.env.RESUME_PDF_URL);

try {
  if (!usingExternalUrl) {
    server = spawn(
      "npm",
      ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", String(port)],
      {
        stdio: "inherit",
        shell: false,
      },
    );
  }

  await waitForRoute(url);

  await run(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--no-pdf-header-footer",
    `--print-to-pdf=${output}`,
    url,
  ]);

  console.log(`Generated ${path.relative(process.cwd(), output)}`);
} finally {
  if (server) server.kill("SIGTERM");
}
