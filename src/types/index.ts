export type RecordStatus = "ACTIVE" | "ARCHIVED" | "REDACTED";
export type RecordDivision = "APPLIED" | "EXPLORATION" | "INFRASTRUCTURE";
export type RecordType = "PROTOCOL" | "INTERFACE" | "COLLECTIVE";

export interface RecordMeta {
  id: string; // SBI-FA-001
  slug: string; // sbi-fa-001
  date: string; // 04 02 2026
  subject: string; // DAOhaus
  classification: string;
  type: RecordType;
  division: RecordDivision;
  status: RecordStatus;
  origin: string;
  instances: string;
  deploymentType: string;
  summary: string;
  primaryFunction: string;
  links?: { label: string; url: string }[];
  systemStatus: { label: string; value: string }[];
}
