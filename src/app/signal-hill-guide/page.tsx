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

const path = "/signal-hill-guide";

const faqs = [
  {
    question: "What is Signal Hill famous for?",
    answer:
      "Panoramic views over St. John's harbour, Cabot Tower, military history, and the site where Marconi received the first transatlantic wireless signal in 1901.",
  },
  {
    question: "Can I walk to Signal Hill from the cruise ship?",
    answer:
      "It is possible for fit walkers but involves steep hills — most cruise passengers prefer taxi or an organised tour.",
  },
  {
    question: "Is Cabot Tower open to visitors?",
    answer:
      "Opening hours vary by season. Even when the tower interior is closed, rampart views remain worthwhile.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Signal Hill Guide — Cabot Tower Views From St. John's Cruise Port",
  description:
    "Signal Hill and Cabot Tower for St. John's cruise passengers — harbour views, walking advice, photography tips, and realistic port-day timing in Newfoundland.",
  path,
});

export default function SignalHillGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Signal Hill Guide", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Signal Hill Guide" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Signal Hill Guide" }]} />
        <PageHero
          eyebrow="Destination guide"
          title="Signal Hill guide"
          subtitle="History, Cabot Tower, harbour views, walking grades, and photography for cruise passengers in St. John's, Newfoundland and Labrador."
          imageSrc={HERO_IMAGES.signalHill.src}
          imageAlt={HERO_IMAGES.signalHill.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Signal Hill is the defining viewpoint over St. John's — plan for wind, fog, and moderate walking near Cabot Tower."
          />

          <GuideSection title="History">
            <p>
              Signal Hill guarded the Narrows — the narrow entrance to St. John&apos;s
              harbour — for centuries. Fortifications here saw action in 1762 when
              French forces briefly held the city. The hill&apos;s name reflects the
              flag signals once used to communicate with ships entering port.
            </p>
          </GuideSection>

          <GuideSection title="Cabot Tower">
            <p>
              Built in 1897–1900 to mark Queen Victoria&apos;s Diamond Jubilee and
              commemorate John Cabot&apos;s voyage. Guglielmo Marconi received the
              first transatlantic wireless message at Signal Hill in December 1901 — a
              milestone in global communications history.
            </p>
          </GuideSection>

          <GuideSection title="Views">
            <p>
              On clear days, the summit delivers sweeping views of the harbour,
              Jellybean Row, and the Atlantic. Fog is common — views may appear and
              disappear within minutes. Many photographers prefer morning light before
              afternoon cruise crowds peak.
            </p>
          </GuideSection>

          <GuideSection title="Walking advice">
            <p>
              Paths near Cabot Tower include stairs and slopes. Wear sturdy footwear;
              stay on marked routes near cliff edges. From the cruise terminal, walking
              uphill takes 35–50 minutes — taxis or tours save time on port days.
            </p>
          </GuideSection>

          <GuideSection title="Photography">
            <p>
              Bring a wide-angle lens for harbour panoramas. Wind makes tripods
              challenging on exposed ramparts. Colourful downtown houses photograph
              well from upper lookouts when fog lifts.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[{ label: "Signal Hill shore excursion", href: "/signal-hill-shore-excursion" }]}
            guides={[{ label: "Cape Spear guide", href: "/cape-spear-guide" }]}
          />
          <NeedHelpCTA excursion="signal-hill-shore-excursion" />
        </div>
      </div>
    </>
  );
}
