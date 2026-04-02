"use client";

import { useEffect, useState } from "react";

const LINES = [
  "> INIT_RETRIEVAL_SEQ // PROTOCOL 7A",
  "> ESTABLISHING SECURE CONNECTION...",
  "> AUTHENTICATION OVERRIDE ACCEPTED",
  "> QUERY: FIELD_ARCHIVE_INDEX",
  "> PULLING RECORDS: ACTIVE SET",
];

const CHAR_DELAY = 18;
const LINE_PAUSE = 120;
const SKIP_KEY = "sbi_fa_boot_seen";

export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const seen = sessionStorage.getItem(SKIP_KEY);
    if (seen) {
      setLines(LINES);
      setDone(true);
      setVisible(true);
      onDone();
      return;
    }

    setVisible(true);
    let cancelled = false;

    async function run() {
      for (let i = 0; i < LINES.length; i++) {
        if (cancelled) return;
        const full = LINES[i];
        // Type each character
        for (let c = 0; c <= full.length; c++) {
          if (cancelled) return;
          setLines((prev) => {
            const next = [...prev];
            next[i] = full.slice(0, c);
            return next;
          });
          await delay(CHAR_DELAY);
        }
        await delay(LINE_PAUSE);
      }
      setDone(true);
      await delay(600);
      if (!cancelled) {
        sessionStorage.setItem(SKIP_KEY, "1");
        onDone();
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [onDone]);

  if (!visible) return null;

  return (
    <div
      className="px-4 md:px-8 py-6"
      style={{ fontFamily: "var(--font-mono)", color: "var(--fg-muted)" }}
    >
      {lines.map((line, i) => (
        <div key={i} className="text-xs leading-relaxed">
          {line}
          {i === lines.length - 1 && !done && (
            <span className="cursor-blink" />
          )}
        </div>
      ))}
      {done && (
        <div className="text-xs leading-relaxed opacity-50 mt-1">
          {">"}&nbsp;READY
        </div>
      )}
    </div>
  );
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
