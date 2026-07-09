import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { stJohnsMonthGuide } from "@/lib/seasonality";
import { pageMetadata } from "@/lib/site";

const path = "/best-time-to-visit-st-johns";

const faqs = [
  {
    question: "What is the best month for St. John's cruise passengers?",
    answer:
      "July and August deliver the warmest weather and peak puffin and whale activity, but fog and crowds peak too. May and June balance iceberg potential with emerging wildlife; September offers cooler walks and thinner cruise traffic.",
  },
  {
    question: "Is St. John's cold in May on a cruise?",
    answer:
      "Cool and variable — highs often 5–12°C with wind and fog. Layered clothing and a waterproof shell are essential even on bright days.",
  },
  {
    question: "When is iceberg season vs whale season vs puffin season?",
    answer:
      "Icebergs are most realistic April through early June. Puffin tours typically run mid-May through early September. Whale watching peaks June through August. These seasons overlap but none are guaranteed on a single port day.",
  },
  {
    question: "Does fog cancel St. John's shore excursions?",
    answer:
      "Fog rarely cancels coach tours but can delay or dull boat departures and harbour photography. Operators make safety calls — build flexibility into wildlife and iceberg plans.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Time To Visit St. John's — Cruise Season Guide",
  description:
    "Best time to visit St. John's, Newfoundland and Labrador on a cruise — month-by-month weather, wind, fog, layers, iceberg season, whale season, and puffin season for Canada & New England itineraries.",
  path,
});

export default function BestTimePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Best Time To Visit St. John's",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Best Time To Visit" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Best Time To Visit St. John's" },
          ]}
        />
        <PageHero
          eyebrow="Seasonal guide"
          title="Best time to visit St. John's"
          subtitle="Weather, wind, fog, wildlife seasons, and excursion conditions across the Canada & New England cruise calendar in Newfoundland and Labrador."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="St. John's cruise calls cluster May through October. Each month trades warmth against wildlife windows, iceberg luck, and fog — match your expectations to the calendar, not the brochure."
            fields={{
              bestFor: "May–October cruise season; peak wildlife June–August",
              popularTypes: "City tours year-round; puffins, whales, icebergs seasonal",
            }}
          />

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              Month-by-month guide for cruise passengers
            </h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              Use the table below with our{" "}
              <Link href="/cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>{" "}
              when your ship month and excursion priorities do not align perfectly.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-left">
                    <th className="p-3 font-semibold">Month</th>
                    <th className="p-3 font-semibold">Typical temps</th>
                    <th className="p-3 font-semibold">Wind &amp; fog</th>
                    <th className="p-3 font-semibold">Layers</th>
                    <th className="p-3 font-semibold">Icebergs</th>
                    <th className="p-3 font-semibold">Whales</th>
                    <th className="p-3 font-semibold">Puffins</th>
                  </tr>
                </thead>
                <tbody>
                  {stJohnsMonthGuide.map((row) => (
                    <tr key={row.month} className="border-b border-slate-100">
                      <td className="p-3 font-medium">{row.month}</td>
                      <td className="p-3 text-slate-700">{row.temp}</td>
                      <td className="p-3 text-slate-700">{row.windFog}</td>
                      <td className="p-3 text-slate-700">{row.layers}</td>
                      <td className="p-3 text-slate-700">{row.icebergs}</td>
                      <td className="p-3 text-slate-700">{row.whales}</td>
                      <td className="p-3 text-slate-700">{row.puffins}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <GuideSection title="May – June: icebergs meet emerging wildlife">
            <p>
              Late spring is the crossover month cruise marketers love — and the one
              that demands the most honest planning. May can deliver spectacular{" "}
              <Link
                href="/when-can-you-see-icebergs-in-newfoundland"
                className="text-blue-800 hover:underline"
              >
                iceberg sightings
              </Link>{" "}
              while puffin tours start and whales arrive. Fog and cold wind persist;
              pack full layers. June warms slightly, bergs fade, and puffin colonies
              build toward peak activity.
            </p>
          </GuideSection>

          <GuideSection title="July – August: peak cruise season">
            <p>
              Warmest air temperatures and the busiest harbour days.{" "}
              <Link
                href="/whale-watching-st-johns"
                className="text-blue-800 hover:underline"
              >
                Whale watching
              </Link>{" "}
              and{" "}
              <Link
                href="/when-can-you-see-puffins-in-newfoundland"
                className="text-blue-800 hover:underline"
              >
                puffin viewing
              </Link>{" "}
              hit their stride, but icebergs are largely finished. Book popular boat
              tours early; downtown restaurants fill between 11:00 and 14:00 on
              multi-ship days.
            </p>
          </GuideSection>

          <GuideSection title="September – October: shoulder season">
            <p>
              September calls still catch whales early in the month and puffins until
              mid-month in strong years. Cooler evenings and storm fronts reward
              passengers who pack warm mid-layers. October foliage cruises are
              atmospheric but wildlife products wind down and daylight shortens.
            </p>
          </GuideSection>

          <GuideSection title="Matching season to excursions">
            <p>
              City tours, Signal Hill, and Jellybean Row work any month ships call.
              Seasonal products need calendar alignment:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                Iceberg focus → April through early June; see{" "}
                <Link
                  href="/icebergs-near-st-johns"
                  className="text-blue-800 hover:underline"
                >
                  icebergs near St. John&apos;s
                </Link>
              </li>
              <li>
                Puffin boats → mid-May through early September
              </li>
              <li>
                Whale boats → June through September peak
              </li>
              <li>
                Photography &amp; walking → shoulder months with fewer crowds and
                dramatic light — if you tolerate cooler air
              </li>
            </ul>
            <p className="mt-4">
              Dress for the North Atlantic regardless of month — see{" "}
              <Link
                href="/what-to-wear-in-st-johns-newfoundland"
                className="text-blue-800 hover:underline"
              >
                what to wear in St. John&apos;s
              </Link>
              .
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Season affects excursion availability more than return timing. Fog and boat cancellations are the main seasonal risks — not distance from downtown."
          />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              {
                label: "Iceberg season",
                href: "/when-can-you-see-icebergs-in-newfoundland",
              },
              {
                label: "Puffin season",
                href: "/when-can-you-see-puffins-in-newfoundland",
              },
              { label: "Newfoundland cruise guide", href: "/newfoundland-cruise-guide" },
            ]}
            excursions={[
              { label: "Puffin tours", href: "/puffin-tours-st-johns" },
              { label: "Whale watching", href: "/whale-watching-cruise-st-johns" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
