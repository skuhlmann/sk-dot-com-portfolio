"use client";

import { useEffect, useState } from "react";

export default function SystemHeader() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function tick() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      style={{
        fontFamily: "var(--font-mono)",
        borderBottom: "1px solid var(--line)",
        color: "var(--fg)",
        backgroundColor: "var(--bg)",
      }}
      className="sticky top-0 z-50"
    >
      <div className="px-4 md:px-8 py-2">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <span className="text-lg font-bold tracking-widest uppercase">
            FIELD ARCHIVE&nbsp;&nbsp;(SBI-FA-SAM-KUHLMANN-001)
          </span>
          <span className="flex gap-4 md:gap-8 text-xs opacity-70 flex-wrap">
            <span>
              SEC.CLR:&nbsp;<span className="opacity-100">LEVEL_4</span>
            </span>
            <span>
              SYS_TIME:&nbsp;
              <span className="opacity-100 tabular-nums">
                {time || "──:──:──"}
              </span>
            </span>
          </span>
        </div>
      </div>
    </header>
  );
}
