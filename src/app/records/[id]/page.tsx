import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllRecords, getRecord } from "@/lib/records";
import RecordContent from "./RecordContent";

export async function generateStaticParams() {
  const records = getAllRecords();
  return records.map((r) => ({ id: r.slug }));
}

export default async function RecordPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const record = getRecord(id);
  if (!record) notFound();

  const { meta, content } = record;

  return (
    <div
      style={{ fontFamily: "var(--font-mono)", color: "var(--fg)" }}
      className="px-4 md:px-8"
    >
      {/* Back link */}
      <div className="py-4 text-xs opacity-50">
        <Link
          href="/"
          className="hover:opacity-100 transition-opacity"
          style={{ color: "var(--fg)" }}
        >
          ← RETURN TO INDEX
        </Link>
      </div>

      <hr className="divider mb-6" />

      {/* Case metadata block */}
      <div className="mb-6">
        <MetaRow label="REPORT ID" value={meta.id} />
        <MetaRow label="SUBJECT" value={meta.subject} />
        <MetaRow label="CLASSIFICATION" value={meta.classification} />
        <MetaRow label="STATUS" value={meta.status} />
        <div className="mt-3" />
        <MetaRow label="DEPLOYMENT TYPE" value={meta.deploymentType} />
        <MetaRow label="ORIGIN" value={meta.origin} />
        <MetaRow label="INSTANCES" value={meta.instances} />
        <div className="mt-3" />
        <MetaRow label="PRIMARY FUNCTION" value={meta.primaryFunction} />
        {meta.url && (
          <div className="flex gap-x-4 text-xs mt-3 flex-wrap">
            <span
              className="shrink-0 opacity-50 tracking-wider"
              style={{ width: "9rem" }}
            >
              EXTERNAL REF
            </span>
            <a
              href={meta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-wider hover:underline transition-opacity hover:opacity-100 opacity-70"
              style={{ color: "var(--fg)" }}
            >
              {meta.url}&nbsp;↗
            </a>
          </div>
        )}
      </div>

      <hr className="divider mb-8" />

      {/* Field report content */}
      <RecordContent content={content} />

      {/* System status block */}
      <div className="mt-8 mb-6">
        {meta.systemStatus.map((row) => (
          <div key={row.label} className="flex gap-x-4 text-xs mb-1">
            <span className="w-32 md:w-40 opacity-50 tracking-wider shrink-0">
              {row.label}:
            </span>
            <span className="tracking-wider">{row.value}</span>
          </div>
        ))}
      </div>

      <hr className="divider mb-8" />

      {/* Footer */}
      <div className="pb-8 text-xs opacity-30 tracking-wider">
        {">"}&nbsp;END OF RECORD&nbsp;/&nbsp;{meta.id}
      </div>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-x-4 text-xs mb-1 flex-wrap">
      <span
        className="shrink-0 opacity-50 tracking-wider"
        style={{ width: "9rem" }}
      >
        {label}
      </span>
      <span className="tracking-wider">{value}</span>
    </div>
  );
}
