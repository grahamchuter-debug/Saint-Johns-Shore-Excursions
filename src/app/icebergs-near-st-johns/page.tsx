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

const path = "/icebergs-near-st-johns";

const faqs = [
  {
    question: "When can you see icebergs near St. John's?",
    answer:
      "Typically late April through early June, with peak weeks varying each year. July–September cruise calls should not expect iceberg viewing products.",
  },
  {
    question: "Are icebergs guaranteed?",
    answer:
      "No. Bergs must drift into range and be visible through weather. Some seasons deliver spectacular views; others offer none within day-trip distance.",
  },
  {
    question: "Can I see icebergs from downtown St. John's?",
    answer:
      "Occasionally in strong seasons bergs appear in the harbour or off Signal Hill — but most reliable viewing requires dedicated tours when bergs are reported nearby.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Icebergs Near St. John's — Seasonal Guide for Cruise Passengers",
  description:
    "Honest iceberg season guide for St. John's, Newfoundland and Labrador — best months, expectations, and why sightings are never guaranteed.",
  path,
});

export default function IcebergsGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Icebergs Near St. John's", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Iceberg Season Guide" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Iceberg Season Guide" }]} />
        <PageHero
          eyebrow="Seasonal · honest expectations"
          title="Icebergs near St. John's"
          subtitle="Iceberg Alley, best months, and what cruise passengers should realistically expect in St. John's, Newfoundland and Labrador — we do not overpromise."
          imageSrc={HERO_IMAGES.iceberg.src}
          imageAlt={HERO_IMAGES.iceberg.alt}
        />

        <div className="mt-10 space-y-10">
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-6">
            <p className="font-semibold text-rose-950">
              Iceberg viewing is seasonal and never guaranteed.
            </p>
            <p className="mt-2 text-rose-900/90">
              A cruise call in July does not include icebergs. Even in May, tours may
              drive long distances or cancel if no bergs are accessible.
            </p>
          </div>

          <CruisePassengerSnapshot
            intro="Icebergs are a bucket-list draw — but St. John's is a gateway, not a vending machine. Plan with flexibility."
            fields={{
              timeInPort: "7+ hours for iceberg chasing",
              returnToShip: "Moderate — berg location varies daily",
              bestFor: "Late April–early June calls only",
            }}
          />

          <GuideSection title="Best months">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Late April–May:</strong> Often strongest window; varies yearly</li>
              <li><strong>Early June:</strong> Still possible; bergs melt as waters warm</li>
              <li><strong>July onward:</strong> Not iceberg season for cruise passengers</li>
            </ul>
          </GuideSection>

          <GuideSection title="What to expect">
            <p>
              Operators monitor iceberg reports and may travel significant distances.
              Fog hides bergs as easily as it hides lighthouses. Photography rewards
              patience — and warm, windproof layers.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="Moderate" note="Only book iceberg products when your port call is long and your visit month aligns with season. See best time to visit for month-by-month context." />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[{ label: "Iceberg tour (seasonal)", href: "/iceberg-tour-st-johns" }]}
            guides={[{ label: "Best time to visit", href: "/best-time-to-visit-st-johns" }]}
          />
          <NeedHelpCTA excursion="iceberg-tour-st-johns" />
        </div>
      </div>
    </>
  );
}
