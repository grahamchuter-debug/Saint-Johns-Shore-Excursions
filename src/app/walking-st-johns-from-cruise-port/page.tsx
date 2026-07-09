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
import { pageMetadata } from "@/lib/site";

const path = "/walking-st-johns-from-cruise-port";

const faqs = [
  {
    question: "Is St. John's walkable from the cruise terminal?",
    answer:
      "Downtown, Water Street, and the harbour boardwalk are often 5–15 minutes on foot from St. John's cruise berths. Signal Hill and Quidi Vidi require longer, hillier walks or taxis.",
  },
  {
    question: "Are there steep hills?",
    answer:
      "Yes — St. John's is built on hills. Plan routes that avoid unnecessary climbs if mobility is limited.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Walking St. John's From The Cruise Port — Newfoundland and Labrador",
  description:
    "Walking guide from the St. John's, Newfoundland and Labrador cruise terminal — distances, hills, taxis, Jellybean Row, and return-to-ship timing.",
  path,
});

export default function WalkingPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Walking St. John's From The Cruise Port", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Walking From Port" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Walking From Port" }]} />
        <PageHero
          eyebrow="Port guide"
          title="Walking St. John's from the cruise port"
          subtitle="Distances, hills, taxi alternatives, and what you can reach on foot in St. John's, Newfoundland and Labrador."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="St. John's rewards walkers — but hills and weather demand realistic pacing and a firm return time."
            fields={{
              timeInPort: "4+ hours for downtown loop",
              activityLevel: "Easy to moderate (hills)",
              returnToShip: "High for waterfront-only walks",
            }}
          />

          <GuideSection title="From terminal to downtown">
            <p>
              Most cruise ships dock at the St. John&apos;s harbour terminal beside
              the waterfront. Water Street shops, harbour views, and the start of
              George Street nightlife are typically a short walk. Allow extra time if
              your berth is at the far end of the pier complex.
            </p>
          </GuideSection>

          <GuideSection title="Jellybean Row on foot">
            <p>
              Colourful houses on Duckworth, Gower, and nearby streets sit uphill
              from the harbour — 15–25 minutes walking depending on route. See our{" "}
              <Link href="/jellybean-row-guide" className="text-blue-800 hover:underline">Jellybean Row guide</Link>.
            </p>
          </GuideSection>

          <GuideSection title="Signal Hill & Quidi Vidi">
            <p>
              Signal Hill is roughly 2.5 km with significant elevation — 35–50
              minutes uphill from downtown for fit walkers. Quidi Vidi is northeast
              of downtown; many guests taxi one way. Tours are often easier than
              self-walking both on a short port day.
            </p>
          </GuideSection>

          <GuideSection title="Taxi vs walking">
            <p>
              Taxis queue at peak disembarkation. Short fares to Signal Hill or Quidi
              Vidi save energy for sightseeing. Confirm your all-aboard time before
              any independent outing.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" note="Self-guided downtown walks are easy to time. Add 45–60 minutes buffer before all-aboard if you venture beyond the flat waterfront." />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[{ label: "Port guide", href: "/st-johns-cruise-port-guide" }]}
            excursions={[{ label: "City highlights tour", href: "/city-highlights-tour-st-johns" }]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
