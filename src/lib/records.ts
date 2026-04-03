import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { RecordMeta } from "@/types";

const RECORDS_DIR = path.join(process.cwd(), "src/content/records");

export function getAllRecords(): RecordMeta[] {
  const files = fs.readdirSync(RECORDS_DIR).filter((f) => f.endsWith(".mdx"));

  const records = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(RECORDS_DIR, filename), "utf-8");
    const { data } = matter(raw);
    return { ...data, slug } as RecordMeta;
  });

  // return records.sort((a, b) => (a.id > b.id ? -1 : 1));
  return records;
}

export function getRecord(slug: string): {
  meta: RecordMeta;
  content: string;
} | null {
  const filePath = path.join(RECORDS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: { ...data, slug } as RecordMeta, content };
}
