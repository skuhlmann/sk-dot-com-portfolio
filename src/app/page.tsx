import { Suspense } from "react";
import { getAllRecords } from "@/lib/records";
import HomeClient from "./HomeClient";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; division?: string; type?: string }>;
}) {
  const records = getAllRecords();
  const params = await searchParams;

  return (
    <Suspense>
      <HomeClient
        records={records}
        status={params.status}
        division={params.division}
        type={params.type}
      />
    </Suspense>
  );
}
