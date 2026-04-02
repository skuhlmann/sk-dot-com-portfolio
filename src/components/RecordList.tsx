import type { RecordMeta } from "@/types";
import RecordRow from "./RecordRow";

interface Props {
  records: RecordMeta[];
  status?: string;
  division?: string;
  type?: string;
}

export default function RecordList({ records, status, division, type }: Props) {
  const filtered = records.filter((r) => {
    if (status && status !== "ALL" && r.status !== status) return false;
    if (division && division !== "ANY" && r.division !== division) return false;
    if (type && type !== "ALL" && r.type !== type) return false;
    return true;
  });

  if (filtered.length === 0) {
    return (
      <div
        className="py-12 text-xs opacity-40"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {">"}&nbsp;NO RECORDS MATCH QUERY PARAMETERS
      </div>
    );
  }

  return (
    <div>
      {filtered.map((record) => (
        <RecordRow key={record.id} record={record} />
      ))}
      <div
        className="py-4 px-4 md:px-8 text-xs opacity-30"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {">"}&nbsp;END OF RECORD SET&nbsp;/&nbsp;{filtered.length}&nbsp;RESULT
        {filtered.length !== 1 ? "S" : ""}
      </div>
    </div>
  );
}
