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

const path = "/quidi-vidi-village-guide";

const faqs = [
  {
    question: "What is Quidi Vidi Village?",
    answer:
      "A historic fishing village within St. John's, Newfoundland and Labrador — a sheltered harbour at Quidi Vidi Lake where stages, boats, and the Gut meet the Atlantic.",
  },
  {
    question: "How far is Quidi Vidi from the cruise terminal?",
    answer:
      "About 3 km — 10 minutes by taxi or 35–45 minutes walking over hills for fit guests.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Quidi Vidi Village Guide — St. John's, Newfoundland and Labrador",
  description:
    "Quidi Vidi Village guide for cruise passengers — harbour, brewery, crafts, walking distances, and tours from St. John's, Newfoundland and Labrador.",
  path,
});

export default function QuidiVidiGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Quidi Vidi Village Guide", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Quidi Vidi Guide" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Quidi Vidi Guide" }]} />
        <PageHero
          eyebrow="Village · culture"
          title="Quidi Vidi Village guide"
          subtitle="Historic fishing harbour, lake views, and local craft culture minutes from downtown St. John's, Newfoundland and Labrador."
          imageSrc={HERO_IMAGES.quidiVidi.src}
          imageAlt={HERO_IMAGES.quidiVidi.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Quidi Vidi packs village atmosphere into a compact visit — ideal combined with downtown or Signal Hill on the same port day."
            fields={{
              timeInPort: "4+ hours",
              returnToShip: "High",
            }}
          />

          <GuideSection title="The harbour and the Gut">
            <p>
              Quidi Vidi (&quot;Kiddy Viddy&quot; locally) centres on a narrow channel
              — the Gut — where the lake meets the ocean. Fishing stages, colourful
              boats, and working waterfront scenes feel worlds away from cruise-ship
              scale yet sit inside city limits.
            </p>
          </GuideSection>

          <GuideSection title="Brewery and artisans">
            <p>
              Quidi Vidi Brewing Company anchors many visits with harbour-view tastings.
              Nearby studios and small shops sell local crafts — useful on rainy port
              days.
            </p>
          </GuideSection>

          <GuideSection title="Getting there from the cruise port">
            <p>
              Taxi is fastest. Walking is possible via hilly residential streets.
              Many{" "}
              <Link href="/quidi-vidi-village-tour" className="text-blue-800 hover:underline">Quidi Vidi tours</Link>{" "}
              include transport from the terminal.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[{ label: "Quidi Vidi village tour", href: "/quidi-vidi-village-tour" }]}
            guides={[{ label: "Newfoundland culture guide", href: "/newfoundland-culture-guide" }]}
          />
          <NeedHelpCTA excursion="quidi-vidi-village-tour" />
        </div>
      </div>
    </>
  );
}
