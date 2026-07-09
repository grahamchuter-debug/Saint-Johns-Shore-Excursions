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

const path = "/cape-spear-guide";

const faqs = [
  {
    question: "Is Cape Spear really the easternmost point in North America?",
    answer:
      "Cape Spear is the easternmost point of the Avalon Peninsula and the easternmost point accessible by paved road in Canada — a geography highlight for visitors to St. John's, Newfoundland and Labrador.",
  },
  {
    question: "How long does Cape Spear take from the cruise port?",
    answer:
      "About 15–20 minutes driving each way plus 45–75 minutes on site. Plan 3–4 hours total for a dedicated visit with return buffer.",
  },
  {
    question: "Is Cape Spear suitable for cruise passengers?",
    answer:
      "Yes on five-to-seven-hour port calls when booked as a half-day tour, often combined with Signal Hill.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Cape Spear Guide — Easternmost Point Near St. John's, NL",
  description:
    "Cape Spear guide for cruise passengers — easternmost point of North America, lighthouses, travel time, and cruise suitability from St. John's, Newfoundland and Labrador.",
  path,
});

export default function CapeSpearGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Cape Spear Guide", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Cape Spear Guide" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Cape Spear Guide" }]} />
        <PageHero
          eyebrow="Destination guide"
          title="Cape Spear guide"
          subtitle="Easternmost point of continental North America — lighthouses, cliff walks, and cruise-day planning from St. John's, Newfoundland and Labrador."
          imageSrc={HERO_IMAGES.capeSpear.src}
          imageAlt={HERO_IMAGES.capeSpear.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Cape Spear delivers open Atlantic drama within a short drive of the St. John's cruise terminal — ideal for half-day itineraries."
            fields={{
              timeInPort: "5–7 hours recommended",
              returnToShip: "High on standard tours",
            }}
          />

          <GuideSection title="Easternmost point of North America">
            <p>
              Standing at Cape Spear, you face the Atlantic with no land between you
              and Ireland. The site marks the eastern edge of the Avalon Peninsula and
              is among the first places in North America to see sunrise — weather
              permitting.
            </p>
          </GuideSection>

          <GuideSection title="The lighthouses">
            <p>
              The 1836 stone lighthouse is the oldest surviving lighthouse in
              Newfoundland. A taller rotating light built in 1955 still guides vessels.
              Interpretive panels explain keeper families who endured isolated winters.
            </p>
          </GuideSection>

          <GuideSection title="Travel time from St. John's cruise port">
            <p>
              Roughly 12 km southeast — 15–20 minutes by road. Not walkable on a port
              day. Organised tours or taxis are standard.
            </p>
          </GuideSection>

          <GuideSection title="Cruise suitability">
            <p>
              Works well on six-hour calls when paired efficiently with Signal Hill or
              downtown. Four-hour port days should not attempt Cape Spear unless your
              tour guarantees an unusually tight but verified schedule.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[{ label: "Cape Spear shore excursion", href: "/cape-spear-shore-excursion" }]}
            guides={[{ label: "Signal Hill guide", href: "/signal-hill-guide" }]}
          />
          <NeedHelpCTA excursion="cape-spear-shore-excursion" />
        </div>
      </div>
    </>
  );
}
