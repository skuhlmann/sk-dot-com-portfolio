"use client";

import { useState } from "react";
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
        </>
      )}
    </>
  );
}
