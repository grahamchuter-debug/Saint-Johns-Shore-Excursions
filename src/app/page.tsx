import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExcursionCard } from "@/components/ExcursionCard";
import { excursions } from "@/lib/excursions";
import { GEO_LABEL, HERO_IMAGES, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "St. John's Shore Excursions & Port Guide — Newfoundland and Labrador",
  description:
    "Plan shore excursions from St. John's, Newfoundland and Labrador — Signal Hill, Cape Spear, puffins, icebergs, Jellybean Row, and Canada & New England cruise port guides.",
  path: "/",
});

export default function HomePage() {
  const featured = excursions.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <Image
          src={HERO_IMAGES.stJohns.src}
          alt={HERO_IMAGES.stJohns.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl lg:grid-cols-2 lg:min-h-[32rem]">
          <div className="flex flex-col justify-center px-4 py-14 md:py-20 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
              {GEO_LABEL} · Canada &amp; New England
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Shore excursions for St. John&apos;s cruise passengers
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200">
              Signal Hill, Cape Spear, puffins, seasonal icebergs, Jellybean Row, and
              Newfoundland culture — independent guidance with clear return-to-ship
              advice for every port day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/excursions"
                className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
              >
                Browse excursions
              </Link>
              <Link
                href="/st-johns-cruise-port-guide"
                className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold hover:border-white"
              >
                St. John&apos;s port guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-semibold text-amber-950">
            St. John&apos;s, Newfoundland — not Saint John, New Brunswick
          </h2>
          <p className="mt-2 text-amber-950/80 leading-relaxed">
            This site covers cruise passengers visiting{" "}
            <strong>St. John&apos;s, Newfoundland and Labrador</strong> on Canada
            &amp; New England itineraries. If your itinerary lists Saint John
            without Newfoundland, you may be calling at a different port in New
            Brunswick — see our{" "}
            <Link
              href="/st-johns-newfoundland-vs-saint-john-new-brunswick"
              className="font-semibold underline"
            >
              disambiguation guide
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Popular excursions</h2>
          <Link href="/excursions" className="text-sm font-semibold text-blue-800">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((e) => (
            <ExcursionCard key={e.slug} excursion={e} />
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-900">Planning guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/best-st-johns-shore-excursions",
                label: "Best St. John's excursions",
                desc: "Ranked by port time and return confidence",
              },
              {
                href: "/signal-hill-guide",
                label: "Signal Hill guide",
                desc: "Cabot Tower, views, and walking advice",
              },
              {
                href: "/one-day-in-st-johns-from-a-cruise-ship",
                label: "One day in St. John's",
                desc: "4, 6, and 8-hour itinerary ideas",
              },
              {
                href: "/icebergs-near-st-johns",
                label: "Iceberg season",
                desc: "Honest seasonal expectations",
              },
              {
                href: "/when-can-you-see-puffins-in-newfoundland",
                label: "Puffin season",
                desc: "When colonies are active near St. John's",
              },
              {
                href: "/newfoundland-cruise-guide",
                label: "Newfoundland cruise guide",
                desc: "Canada & New England authority hub",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:bg-blue-50/40"
              >
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl bg-slate-900 px-8 py-10 text-white text-center">
          <h2 className="text-2xl font-bold">Need help choosing?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Enquiry-only — tell us your ship schedule and we&apos;ll recommend St.
            John&apos;s excursions with realistic return timing.
          </p>
          <Link
            href="/enquire"
            className="mt-6 inline-block rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
          >
            Send an enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
