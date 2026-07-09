import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/newfoundland-cruise-guide";

const faqs = [
  {
    question: "Where does St. John's fit on Canada & New England cruises?",
    answer:
      "St. John's, Newfoundland and Labrador is often the easternmost or most distinctive Canadian port on the itinerary — offering puffins, icebergs (seasonal), and North Atlantic culture unlike mainland ports.",
  },
  {
    question: "Is St. John's the same port as Saint John?",
    answer:
      "No — see our disambiguation guide. St. John's is in Newfoundland and Labrador; Saint John is in New Brunswick.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Newfoundland Cruise Guide — Canada & New England Authority",
  description:
    "Newfoundland cruise guide for Canada & New England itineraries — why St. John's matters, seasonal highlights, and shore excursion planning in Newfoundland and Labrador.",
  path,
});

export default function NewfoundlandCruiseGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Newfoundland Cruise Guide", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Newfoundland Cruise Guide" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Newfoundland Cruise Guide" }]} />
        <PageHero
          eyebrow="Canada & New England"
          title="Newfoundland cruise guide"
          subtitle="How St. John's, Newfoundland and Labrador fits Canada & New England itineraries — geography, seasons, and what makes this port unique."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Why Newfoundland on a cruise itinerary">
            <p>
              Canada & New England sailings link historic East Coast cities with
              Atlantic scenery. St. John&apos;s delivers something mainland ports
              cannot replicate easily: easternmost geography, puffin colonies,
              seasonal icebergs, and a capital city built on fishing culture at the
              edge of the North Atlantic.
            </p>
          </GuideSection>

          <GuideSection title="Typical itinerary context">
            <p>
              Itineraries may include Boston, Portland, Sydney (Nova Scotia), Québec
              City, and other ports — each with different excursion logic. St. John&apos;s
              is the Newfoundland anchor. Confirm your booking lists{" "}
              <strong>Newfoundland and Labrador</strong>, not New Brunswick.
            </p>
          </GuideSection>

          <GuideSection title="Seasonal planning">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>May–June:</strong> Iceberg potential + rising wildlife activity</li>
              <li><strong>July–August:</strong> Warmest weather, peak whales and puffins</li>
              <li><strong>September:</strong> Shoulder season; wildlife tapers</li>
            </ul>
            <p className="mt-4">
              See{" "}
              <Link href="/best-time-to-visit-st-johns" className="text-blue-800 hover:underline">best time to visit</Link>{" "}
              for month-by-month detail.
            </p>
          </GuideSection>

          <GuideSection title="Plan your St. John's port day">
            <ul className="list-disc pl-5 space-y-2">
              <li><Link href="/st-johns-cruise-port-guide" className="text-blue-800 hover:underline">Cruise port guide</Link></li>
              <li><Link href="/best-st-johns-shore-excursions" className="text-blue-800 hover:underline">Best shore excursions</Link></li>
              <li><Link href="/one-day-in-st-johns-from-a-cruise-ship" className="text-blue-800 hover:underline">One-day itineraries</Link></li>
              <li><Link href="/st-johns-cruise-ship-schedule" className="text-blue-800 hover:underline">Cruise ship schedule hub</Link></li>
            </ul>
          </GuideSection>

          <ReturnToShipBlock />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "St. John's vs Saint John NB", href: "/st-johns-newfoundland-vs-saint-john-new-brunswick" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
