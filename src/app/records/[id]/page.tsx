import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllRecords, getRecord } from "@/lib/records";
import RecordContent from "./RecordContent";

const previewImage = {
  url: "/apple-touch-icon-152x152.png",
  width: 152,
  height: 152,
  alt: "Sam Kuhlmann",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const record = getRecord(id);
  if (!record) return {};
  const { meta } = record;
  const title = `${meta.id} — ${meta.subject}`;
  return {
    title,
    description: meta.summary,
    openGraph: {
      title,
      description: meta.summary,
      type: "article",
      images: [previewImage],
    },
    twitter: {
      card: "summary",
      title,
      description: meta.summary,
      images: [previewImage],
    },
  };
}

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
    <div style={{ fontFamily: "var(--font-mono)", color: "var(--fg)" }}>
      {/* Back link */}
      <div className="px-4 md:px-8 py-4 text-xs opacity-50">
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
      <div className="px-4 md:px-8 pt-8 mb-6">
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
        {meta.links && meta.links.length > 0 && (
          <div className="flex gap-x-4 text-xs mt-3 flex-wrap">
            <span
              className="shrink-0 opacity-50 tracking-wider"
              style={{ width: "9rem" }}
            >
              EXTERNAL REF
            </span>
            <div className="flex flex-col gap-y-1">
              {meta.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracking-wider hover:underline transition-opacity hover:opacity-100 opacity-70"
                  style={{ color: "var(--fg)" }}
                >
                  {link.label}&nbsp;↗
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <hr className="divider mb-8" />

      {/* Field report content */}
      <div className="px-4 md:px-8">
        <RecordContent content={content} />
      </div>

      {/* System status block */}
      <div className="px-4 md:px-8 mt-8 mb-6">
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
      <div className="px-4 md:px-8 py-8 text-xs opacity-30 tracking-wider">
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
