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
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/whale-watching-st-johns";

const faqs = [
  {
    question: "What are the best months for whale watching in St. John's?",
    answer:
      "June through August typically offer the strongest humpback activity for cruise-season visitors. May and September can still produce sightings with lower consistency.",
  },
  {
    question: "How likely are whale sightings?",
    answer:
      "Historically good in peak months, but never guaranteed on any single trip. Weather cancellations are common.",
  },
  {
    question: "Does whale watching fit cruise timing?",
    answer:
      "Most passengers need six or more hours ashore once boat duration, transfers, and return buffer are included.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Whale Watching St. John's — Season & Cruise Timing Guide",
  description:
    "Whale watching guide for St. John's, Newfoundland and Labrador cruise passengers — best months, sighting likelihood, operators, and return-to-ship advice.",
  path,
});

export default function WhaleGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Whale Watching St. John's", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Whale Watching Guide" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Whale Watching Guide" }]} />
        <PageHero
          eyebrow="Wildlife · seasonal"
          title="Whale watching in St. John's"
          subtitle="Best months, realistic sighting expectations, cruise timing, and operator advice for Newfoundland whale watching."
          imageSrc={HERO_IMAGES.whale.src}
          imageAlt={HERO_IMAGES.whale.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Newfoundland sits on a major whale migration route — but your single port day is one roll of the dice. Plan with seasonal honesty."
            fields={{
              timeInPort: "6+ hours recommended",
              bestFor: "June–August peak",
              returnToShip: "Moderate — weather dependent",
            }}
          />

          <GuideSection title="Best months">
            <p>
              Humpbacks feed along the Avalon coast through summer. Minke whales appear
              earlier; fin whales are possible offshore. Winter cruise calls fall outside
              whale tour season entirely.
            </p>
          </GuideSection>

          <GuideSection title="Likelihood of sightings">
            <p>
              Peak-season departures report high historical success rates — but wildlife
              is unpredictable. Fog, sea state, and animal movement affect every trip. No
              ethical operator guarantees whales.
            </p>
          </GuideSection>

          <GuideSection title="Cruise timing">
            <p>
              Morning boats suit tighter all-aboard windows. Confirm explicit
              terminal return policies. Combo tours with puffins overlap in summer —
              see{" "}
              <Link href="/when-can-you-see-puffins-in-newfoundland" className="text-blue-800 hover:underline">puffin season guide</Link>.
            </p>
          </GuideSection>

          <GuideSection title="Operator advice">
            <p>
              Choose operators experienced with cruise schedules. Ask about cancellation
              policies, motion suitability, and whether your port date aligns with peak
              activity. Enquire via our{" "}
              <Link href="/whale-watching-cruise-st-johns" className="text-blue-800 hover:underline">whale watching excursion page</Link>.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="Moderate" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[{ label: "Whale watching cruise", href: "/whale-watching-cruise-st-johns" }]}
            guides={[{ label: "Best time to visit", href: "/best-time-to-visit-st-johns" }]}
          />
          <NeedHelpCTA excursion="whale-watching-cruise-st-johns" />
        </div>
      </div>
    </>
  );
}
