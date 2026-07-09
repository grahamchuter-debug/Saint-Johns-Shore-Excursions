import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/newfoundland-culture-guide";

const faqs = [
  {
    question: "What makes Newfoundland culture distinctive for cruise visitors?",
    answer:
      "Irish-English heritage, fishing traditions, distinctive music and storytelling, unique vocabulary, and a strong sense of place — all centred on St. John's as the capital of Newfoundland and Labrador.",
  },
  {
    question: "Can I experience Newfoundland culture in a short port call?",
    answer:
      "Yes — downtown walks, Quidi Vidi, local food, and guided city tours deliver authentic context even on four-to-six-hour calls.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Newfoundland Culture Guide — St. John's Cruise Passengers",
  description:
    "Newfoundland culture guide for cruise passengers in St. John's — music, food, fishing heritage, language, and shore excursion ideas in Newfoundland and Labrador.",
  path,
});

export default function CultureGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Newfoundland Culture Guide", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Newfoundland Culture" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Newfoundland Culture" }]} />
        <PageHero
          eyebrow="Culture · heritage"
          title="Newfoundland culture guide"
          subtitle="Music, food, fishing heritage, and local identity for cruise passengers visiting St. John's, Newfoundland and Labrador."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout>
            <p>
              Newfoundland was its own country of culture long before it joined Canada
              in 1949. St. John&apos;s harbour remains the heart of that story for
              cruise visitors.
            </p>
          </CruisePassengerCallout>

          <GuideSection title="Fishing heritage">
            <p>
              Cod, capelin, and crab shaped settlements like Quidi Vidi and Petty
              Harbour. Stages, flakes, and harbour scenes still read as working
              waterfront — not museum props.
            </p>
          </GuideSection>

          <GuideSection title="Music and storytelling">
            <p>
              Kitchen parties, fiddle traditions, and contemporary bands fill George
              Street venues. Many city tours weave local humour and history into
              commentary — ask operators about live music timing on your port day.
            </p>
          </GuideSection>

          <GuideSection title="Food">
            <p>
              Fish and chips, toutons, cod dishes, and berries in season. Quidi Vidi
              Brewery and downtown pubs offer taste-of-place stops on walking itineraries.
            </p>
          </GuideSection>

          <GuideSection title="Language and warmth">
            <p>
              Newfoundland English carries Irish and West Country roots — unique
              phrases and pacing that surprise first-time visitors. Locals are famously
              welcoming; allow time for conversation in shops and cafés.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" note="Culture-focused downtown tours are among the easiest to schedule with reliable return timing." />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Quidi Vidi village", href: "/quidi-vidi-village-guide" },
              { label: "Jellybean Row", href: "/jellybean-row-guide" },
            ]}
            excursions={[{ label: "City highlights tour", href: "/city-highlights-tour-st-johns" }]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
