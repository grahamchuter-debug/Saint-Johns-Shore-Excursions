import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { excursions } from "@/lib/excursions";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/best-st-johns-shore-excursions";

const faqs = [
  {
    question: "What is the best shore excursion in St. John's, Newfoundland and Labrador?",
    answer:
      "For first-time visitors, Signal Hill combined with downtown highlights delivers the strongest introduction. Cape Spear suits scenery lovers with five or more hours ashore. Seasonal wildlife tours depend on your visit month.",
  },
  {
    question: "Can I do Signal Hill and Cape Spear in one port day?",
    answer:
      "Yes on six-to-eight-hour calls when booked as a combined tour. Four-hour calls should choose one or stay downtown.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best St. John's Shore Excursions — Newfoundland and Labrador",
  description:
    "Ranked shore excursions for cruise passengers in St. John's, Newfoundland and Labrador — return-to-ship confidence, port timing, and seasonal picks.",
  path,
});

export default function BestExcursionsPage() {
  const ranked = [...excursions].sort((a, b) => {
    const order = { High: 0, Moderate: 1, Tight: 2 };
    return order[a.returnConfidence] - order[b.returnConfidence];
  });

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Best St. John's Shore Excursions",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Best St. John's Shore Excursions" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Best St. John's Shore Excursions" },
          ]}
        />
        <PageHero
          eyebrow="Excursion guide"
          title="Best St. John's shore excursions"
          subtitle="Independent rankings for cruise passengers — matched to port time, season, and return-to-ship confidence in Newfoundland's capital."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="How we rank excursions">
            <p>
              St. John&apos;s rewards both walkable downtown days and short coastal
              drives. We prioritise return-to-ship confidence, honest seasonal
              expectations (icebergs and puffins are never guaranteed), and fit
              with typical Canada & New England port hours.
            </p>
          </GuideSection>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Ranked listings</h2>
            <ol className="mt-6 space-y-6">
              {ranked.map((e, i) => (
                <li
                  key={e.slug}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <p className="text-sm font-semibold text-blue-800">#{i + 1}</p>
                  <Link href={e.path} className="text-xl font-semibold text-slate-900 hover:text-blue-800">
                    {e.shortTitle}
                  </Link>
                  <p className="mt-2 text-slate-700">{e.summary}</p>
                  <p className="mt-2 text-sm text-slate-500">
                    {e.duration} · Return confidence: {e.returnConfidence}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <ReturnToShipBlock />
          <FAQSection faqs={faqs} />
          <ExcursionLinks title="All St. John's excursions" slugs={excursions.map((e) => e.slug)} />
          <GuideRelatedLinks
            guides={[{ label: "St. John's cruise port guide", href: "/st-johns-cruise-port-guide" }]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
