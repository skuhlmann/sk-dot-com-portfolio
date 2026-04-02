"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import type { RecordStatus, RecordDivision, RecordType } from "@/types";

type Filters = {
  status: RecordStatus | "ALL";
  division: RecordDivision | "ANY";
  type: RecordType | "ALL";
};

const STATUS_OPTIONS: Array<RecordStatus | "ALL"> = [
  "ALL",
  "ACTIVE",
  "ARCHIVED",
  "REDACTED",
];
const DIVISION_OPTIONS: Array<RecordDivision | "ANY"> = [
  "ANY",
  "APPLIED",
  "EXPLORATION",
  "ENUMERATION",
];
const TYPE_OPTIONS: Array<RecordType | "ALL"> = [
  "ALL",
  "PROTOCOL",
  "SYSTEM",
  "INTERFACE",
];

export default function QueryBar() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const filters: Filters = {
    status: (params.get("status") as RecordStatus) || "ALL",
    division: (params.get("division") as RecordDivision) || "ANY",
    type: (params.get("type") as RecordType) || "ALL",
  };

  const set = useCallback(
    (key: keyof Filters, value: string) => {
      const next = new URLSearchParams(params.toString());
      if (
        value === "ALL" ||
        value === "ANY"
      ) {
        next.delete(key);
      } else {
        next.set(key, value);
      }
      router.replace(`${pathname}?${next.toString()}`, { scroll: false });
    },
    [params, pathname, router]
  );

  return (
    <div
      className="px-4 md:px-8 py-4 text-xs"
      style={{
        fontFamily: "var(--font-mono)",
        color: "var(--fg)",
        borderBottom: "1px solid var(--line)",
        borderTop: "1px solid var(--line)",
        opacity: 0.9,
      }}
    >
      <div className="flex flex-col gap-2 md:gap-1">
        <FilterRow
          label="STATUS"
          options={STATUS_OPTIONS}
          active={filters.status}
          onSelect={(v) => set("status", v)}
        />
        <FilterRow
          label="DIVISION"
          options={DIVISION_OPTIONS}
          active={filters.division}
          onSelect={(v) => set("division", v)}
        />
        <FilterRow
          label="TYPE"
          options={TYPE_OPTIONS}
          active={filters.type}
          onSelect={(v) => set("type", v)}
        />
      </div>
    </div>
  );
}

function FilterRow({
  label,
  options,
  active,
  onSelect,
}: {
  label: string;
  options: string[];
  active: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <span
        className="w-20 shrink-0 opacity-50 tracking-wider"
        style={{ fontSize: "11px" }}
      >
        {label}:
      </span>
      <span className="flex flex-wrap gap-x-4 gap-y-1">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className="tracking-wider cursor-pointer transition-opacity hover:opacity-100"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              background: "none",
              border: "none",
              padding: 0,
              color: "var(--fg)",
              opacity: active === opt ? 1 : 0.45,
              borderBottom: active === opt ? "1px solid var(--fg)" : "1px solid transparent",
              paddingBottom: "1px",
            }}
          >
            {opt}
          </button>
        ))}
      </span>
    </div>
  );
}
