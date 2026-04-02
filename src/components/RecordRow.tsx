import Link from "next/link";
import type { RecordMeta } from "@/types";

export default function RecordRow({ record }: { record: RecordMeta }) {
  const isRedacted = record.status === "REDACTED";

  return (
    <div
      className="record-row py-5 px-4 md:px-8"
      style={{
        borderBottom: "1px solid var(--line)",
        opacity: isRedacted ? 0.6 : 1,
      }}
    >
      {/* Top row: date / id / type */}
      <div
        className="flex flex-wrap gap-x-8 gap-y-1 mb-1 text-xs opacity-60 tracking-wider"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span className="tabular-nums">{record.date}</span>
        <span>{record.id}</span>
        <span>{record.type}</span>
      </div>

      {/* Subject + classification */}
      <div className="mb-2">
        <span
          className="text-sm font-bold tracking-wide"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {isRedacted ? "[REDACTED]" : record.subject}
        </span>
        {!isRedacted && (
          <span
            className="ml-3 text-xs opacity-50 tracking-wider"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {record.classification}
          </span>
        )}
      </div>

      {/* Meta row */}
      <div
        className="flex flex-wrap gap-x-6 gap-y-1 text-xs mb-3 opacity-70"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span>
          STATUS:&nbsp;
          <span
            style={{
              color:
                record.status === "ACTIVE" ? "var(--fg)" : "var(--fg-muted)",
            }}
          >
            {record.status}
          </span>
        </span>
        <span>ORIGIN:&nbsp;{isRedacted ? "███████" : record.origin}</span>
        <span>INSTANCES:&nbsp;{isRedacted ? "█████" : record.instances}</span>
      </div>

      {/* Summary */}
      {!isRedacted && (
        <p
          className="text-xs mb-3 max-w-2xl leading-relaxed opacity-80"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {record.summary}
        </p>
      )}

      {/* CTA */}
      <Link
        href={isRedacted ? "#" : `/records/${record.slug}`}
        className="record-open text-xs tracking-wider opacity-70 hover:opacity-100 transition-opacity"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--fg)",
          pointerEvents: isRedacted ? "none" : "auto",
        }}
        aria-disabled={isRedacted}
      >
        {isRedacted ? "[ACCESS DENIED]" : "→ OPEN RECORD"}
      </Link>
    </div>
  );
}
