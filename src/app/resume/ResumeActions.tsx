"use client";

const PDF_PATH = "/sam-kuhlmann-resume.pdf";

export default function ResumeActions() {
  return (
    <div className="resume-actions flex flex-wrap items-center gap-2 text-xs tracking-widest uppercase">
      <button
        type="button"
        onClick={() => window.print()}
        className="border px-3 py-2 transition-opacity hover:opacity-70"
        style={{ borderColor: "currentColor" }}
      >
        Print PDF
      </button>
      <a
        href={PDF_PATH}
        download
        className="border px-3 py-2 transition-opacity hover:opacity-70"
        style={{ borderColor: "currentColor" }}
      >
        Download PDF
      </a>
    </div>
  );
}
