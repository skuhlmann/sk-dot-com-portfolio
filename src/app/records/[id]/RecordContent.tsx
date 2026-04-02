"use client";

import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2
      className="text-xs font-bold tracking-widest mt-8 mb-3 opacity-60 uppercase"
      style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}
    >
      {children}
    </h2>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p
      className="text-xs leading-relaxed mb-4 opacity-80 max-w-2xl"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </p>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong
      className="font-bold opacity-100"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {children}
    </strong>
  ),
  hr: () => (
    <hr
      className="divider my-6"
    />
  ),
};

export default function RecordContent({ content }: { content: string }) {
  return (
    <div>
      <MDXRemote source={content} components={components} />
    </div>
  );
}
