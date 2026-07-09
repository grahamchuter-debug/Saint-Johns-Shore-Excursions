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

const path = "/jellybean-row-guide";

const faqs = [
  {
    question: "What is Jellybean Row in St. John's?",
    answer:
      "The nickname for brightly painted row houses on hillsides above St. John's harbour — especially on Duckworth, Gower, and nearby streets in Newfoundland and Labrador's capital.",
  },
  {
    question: "Can I walk to Jellybean Row from the cruise port?",
    answer:
      "Yes — typically 15–25 minutes uphill from the waterfront, depending on route and berth location.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Jellybean Row Guide — St. John's, Newfoundland and Labrador",
  description:
    "Jellybean Row photography and walking guide for cruise passengers in St. John's, Newfoundland and Labrador — best streets, harbour views, and port-day timing.",
  path,
});

export default function JellybeanRowGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Jellybean Row Guide", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Jellybean Row Guide" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Jellybean Row Guide" }]} />
        <PageHero
          eyebrow="Photography · culture"
          title="Jellybean Row guide"
          subtitle="Colourful row houses, harbour backdrops, and walking routes for cruise passengers in St. John's, Newfoundland and Labrador."
          imageSrc={HERO_IMAGES.jellybeanRow.src}
          imageAlt={HERO_IMAGES.jellybeanRow.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Jellybean Row is walkable from most St. John's cruise berths — one of the easiest iconic photo stops on a port day."
            fields={{
              timeInPort: "2+ hours sufficient",
              activityLevel: "Easy to moderate (hills)",
              returnToShip: "Very high",
            }}
          />

          <GuideSection title="Why the houses are so colourful">
            <p>
              Local tradition holds that families painted homes in distinct colours so
              fishermen could spot their houses through fog. Today the palette defines
              St. John&apos;s identity — a contrast to muted architecture in many other
              Canadian ports.
            </p>
          </GuideSection>

          <GuideSection title="Best streets for photography">
            <p>
              Duckworth Street, Gower Street, and side lanes connecting to the harbour
              deliver classic Jellybean Row compositions. Morning and late-afternoon
              light reduce harsh shadows on narrow streets.
            </p>
          </GuideSection>

          <GuideSection title="Walking from the cruise port">
            <p>
              Head uphill from Water Street toward Duckworth. Wear comfortable shoes —
              cobblestones and slopes are common. See{" "}
              <Link href="/walking-st-johns-from-cruise-port" className="text-blue-800 hover:underline">walking from port</Link>.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[{ label: "City highlights tour", href: "/city-highlights-tour-st-johns" }]}
            guides={[{ label: "Signal Hill guide", href: "/signal-hill-guide" }]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
