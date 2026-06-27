import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="resume-name mb-3 text-3xl font-bold uppercase tracking-widest">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="resume-section mt-8 border-t pt-4 text-sm font-bold uppercase tracking-widest">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="resume-role mt-5 text-sm font-bold uppercase tracking-wider">
      {children}
    </h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="resume-copy mb-3 max-w-3xl text-sm leading-relaxed">
      {children}
    </p>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="resume-list mb-4 ml-4 flex max-w-3xl list-disc flex-col gap-1.5 text-sm leading-relaxed">
      {children}
    </ul>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="pl-1">{children}</li>
  ),
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-bold">{children}</strong>
  ),
  a: ({
    children,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode }) => (
    <a
      {...props}
      className="underline decoration-current underline-offset-4 transition-opacity hover:opacity-70"
    >
      {children}
    </a>
  ),
  hr: (props: HTMLAttributes<HTMLHRElement>) => (
    <hr {...props} className="resume-rule my-6 border-t" />
  ),
};

export default function ResumeContent({ content }: { content: string }) {
  return <MDXRemote source={content} components={components} />;
}
