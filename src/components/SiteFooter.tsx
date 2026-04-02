"use client";

import { useEffect, useState } from "react";

const CONTACT_EMAIL = "samkuhlmann@odyssy.io";

export default function SiteFooter() {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    function fmt() {
      const now = new Date();
      const date = now.toISOString().split("T")[0].replace(/-/g, ".");
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTimestamp(`${date} // ${h}:${m}:${s}`);
    }
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer
      style={{ fontFamily: "var(--font-mono)", color: "var(--fg)" }}
      className="mt-12"
    >
      <hr className="divider mb-6" />
      <div className="px-4 md:px-8 mt-5">
        {/* Archive identity */}
        <div className="text-xs mb-4">
          <div className="font-bold tracking-widest mb-1">
            SBI FIELD ARCHIVE NODE
          </div>
          <div className="font-bold tracking-widest mb-1">
            PUBLISHED BY SAM KUHLMANN
          </div>
          <div className="opacity-50 tracking-wider mb-1">
            DIVISION: APPLIED SYSTEMS OBSERVATION UNIT
          </div>
          <div className="opacity-50 tracking-wider">
            ACCESS LEVEL: PUBLIC INTERFACE&nbsp;
            <span className="opacity-70">[REDACTED]</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs opacity-60 max-w-xl leading-relaxed mb-5">
          This archive contains fragmented reports from SBI field deployments.
          <br />
          Not all systems are stable. Not all reports are complete.
        </p>

        {/* System status */}
        <div className="text-xs mb-6 flex flex-col gap-1">
          <div>
            <span className="opacity-40 tracking-wider mr-4">LAST SYNC:</span>
            <span className="tabular-nums opacity-70">
              {timestamp || "──────────────────"}
            </span>
          </div>
          <div>
            <span className="opacity-40 tracking-wider mr-4">
              NODE INTEGRITY:
            </span>
            <span className="opacity-70 tracking-wider">NOMINAL</span>
          </div>
        </div>
      </div>
      <hr className="divider mb-6" />
      <div className="px-4 md:px-8 mt-5">
        {/* Contact */}
        <div className="text-xs mb-5">
          <div className="tracking-wider mb-2 opacity-50">
            EXTERNAL INQUIRY CHANNEL AVAILABLE
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="tracking-widest hover:underline opacity-80 hover:opacity-100 transition-opacity"
            style={{ color: "var(--fg)" }}
          >
            INITIATE CONTACT
          </a>
        </div>

        {/* Closing notes */}
        <div className="text-xs opacity-30 mb-6 flex flex-col gap-1 leading-relaxed">
          <span>{">"}&nbsp;TRANSMISSION CHANNEL: OPEN</span>
          <span>{">"}&nbsp;RESPONSE NOT GUARANTEED. SIGNAL MONITORED.</span>
        </div>
      </div>
      <hr className="divider mb-4" />
      <div className="px-4 md:px-8 mt-5">
        <div className="text-xs opacity-20 pb-6 tracking-wider">
          SBI-FA&nbsp;&nbsp;// FIELD ARCHIVE&nbsp;&nbsp;// ALL RECORDS
          PROVISIONAL
        </div>
      </div>
    </footer>
  );
}
