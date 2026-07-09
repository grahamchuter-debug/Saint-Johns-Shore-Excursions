import type { Metadata } from "next";
import Link from "next/link";
import { ExcursionCard } from "@/components/ExcursionCard";
import { excursions } from "@/lib/excursions";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "St. John's Shore Excursions — Browse All Tours",
  description:
    "Browse independent shore excursions for cruise passengers in St. John's, Newfoundland and Labrador — Signal Hill, Cape Spear, puffins, whales, icebergs, and city tours.",
  path: "/excursions",
});

export default function ExcursionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900">
        St. John&apos;s shore excursions
      </h1>
      <p className="mt-4 max-w-3xl text-slate-700 leading-relaxed">
        Independent excursion guides for cruise passengers visiting St. John&apos;s,
        Newfoundland and Labrador. Every listing includes return-to-ship guidance,
        seasonal honesty, and enquiry-based booking — no online checkout yet.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {excursions.map((e) => (
          <ExcursionCard key={e.slug} excursion={e} />
        ))}
      </div>
      <p className="mt-10 text-sm text-slate-600">
        Planning your day? See the{" "}
        <Link href="/st-johns-cruise-port-guide" className="text-blue-800 hover:underline">
          cruise port guide
        </Link>{" "}
        and{" "}
        <Link href="/cruise-planner" className="text-blue-800 hover:underline">
          cruise planner
        </Link>
        .
      </p>
    </div>
  );
}
