"use client";

import { useState } from "react";
import Link from "next/link";
import type { RecordMeta } from "@/types";
import BootSequence from "@/components/BootSequence";
import QueryBar from "@/components/QueryBar";
import RecordList from "@/components/RecordList";

interface Props {
  records: RecordMeta[];
  status?: string;
  division?: string;
  type?: string;
}

export default function HomeClient({ records, status, division, type }: Props) {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <BootSequence onDone={() => setBooted(true)} />

      {booted && (
        <>
          <QueryBar />
          <RecordList
            records={records}
            status={status}
            division={division}
            type={type}
          />
          <ResumeLinkSection />
        </>
      )}
    </>
  );
}

function ResumeLinkSection() {
  return (
    <section
      className="border-y px-4 py-3 text-xs md:px-8"
      style={{
        borderColor: "var(--line)",
        fontFamily: "var(--font-mono)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
        <div className="flex flex-wrap gap-x-6 gap-y-1 tracking-wider">
          <span className="opacity-40">PERSONNEL FILE</span>
          <span className="opacity-70">SAM KUHLMANN</span>
          <span className="opacity-50">FORMAT: RESUME / PDF</span>
        </div>
        <Link
          href="/resume"
          className="tracking-widest opacity-80 transition-opacity hover:opacity-100 hover:underline"
          style={{ color: "var(--accent)", fontWeight: 700 }}
        >
          VIEW RESUME&nbsp;→
        </Link>
      </div>
    </section>
  );
}
