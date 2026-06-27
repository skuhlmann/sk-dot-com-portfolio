"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CONTACT_EMAIL = "samkuhlmann@odyssy.io";

export default function SystemHeader() {
  const [time, setTime] = useState("");
  const pathname = usePathname();
  const isResume = pathname.startsWith("/resume");
  const bg = isResume ? "#ffffff" : "var(--bg)";
  const fg = isResume ? "#17241c" : "var(--fg)";
  const line = isResume ? "#cbd5cc" : "var(--line)";

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
        borderBottom: `1px solid ${line}`,
        color: fg,
        backgroundColor: bg,
      }}
      className="sticky top-0 z-50"
    >
      <div className="px-4 md:px-8 py-2">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <span className="text-lg font-bold tracking-widest uppercase">
            SAM KUHLMANN - ARCHIVE&nbsp;&nbsp;(SBI-FA-001)
          </span>
          <span className="flex gap-4 md:gap-8 text-xs flex-wrap items-baseline">
            <span className="opacity-70">
              SEC.CLR:&nbsp;<span className="opacity-100">LEVEL_4</span>
            </span>
            <span className="opacity-70">
              SYS_TIME:&nbsp;
              <span className="opacity-100 tabular-nums">
                {time || "──:──:──"}
              </span>
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="tracking-widest hover:underline opacity-95 hover:opacity-100 transition-opacity text-sm"
              style={{
                color: "var(--accent)",
                fontWeight: "900",
              }}
            >
              INITIATE CONTACT
            </a>
          </span>
        </div>
      </div>
    </header>
  );
}
