import type { Metadata } from "next";
import Link from "next/link";
import { getResumeContent } from "@/lib/resume";
import ResumeActions from "./ResumeActions";
import ResumeContent from "./ResumeContent";

export const metadata: Metadata = {
  title: "Resume - Sam Kuhlmann",
  description:
    "Resume for Sam Kuhlmann, forward deployed product engineer and AI implementation engineer.",
};

export default async function ResumePage({
  searchParams,
}: {
  searchParams: Promise<{ pdf?: string }>;
}) {
  const params = await searchParams;
  const content = getResumeContent();
  const isPdfMode = params.pdf === "1";

  return (
    <div
      className={`resume-route min-h-screen bg-white px-4 py-5 text-[#17241c] md:px-8 md:py-8 ${
        isPdfMode ? "resume-pdf-mode" : ""
      }`}
    >
      <div className="resume-toolbar mx-auto mb-5 flex max-w-[8.5in] flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="text-xs uppercase tracking-widest opacity-60 transition-opacity hover:opacity-100"
        >
          &lt; Return to Archive
        </Link>
        <ResumeActions />
      </div>

      <article className="resume-document mx-auto max-w-[8.5in] border border-[#cbd5cc] bg-white px-6 py-8 shadow-sm md:px-10 md:py-10">
        <ResumeContent content={content} />
      </article>
    </div>
  );
}
