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

const path = "/faq";

const faqs = [
  {
    question: "Where do cruise ships dock in St. John's, Newfoundland and Labrador?",
    answer:
      "At the St. John's harbour cruise terminal on the downtown waterfront, with walking access to Water Street and the harbour boardwalk for many berths.",
  },
  {
    question: "Is this site for Saint John, New Brunswick?",
    answer:
      "No. This site covers St. John's, Newfoundland and Labrador only. See our disambiguation page if your itinerary is unclear.",
  },
  {
    question: "Can I book excursions on this website?",
    answer:
      "Not yet — use the enquire form and we will recommend options matched to your ship schedule. Enquiry-only, no online checkout.",
  },
  {
    question: "Are puffins, whales, and icebergs guaranteed?",
    answer:
      "No. All are seasonal and weather-dependent. We explain honest expectations on each guide page.",
  },
  {
    question: "How much buffer should I leave before all-aboard?",
    answer:
      "Build at least 45–60 minutes beyond your tour's stated return time, especially for coastal drives and boat tours.",
  },
  {
    question: "What is the best excursion for first-time visitors?",
    answer:
      "Signal Hill with downtown highlights, or a dedicated city tour covering Jellybean Row and the harbour — depending on hours ashore.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "FAQ — St. John's Shore Excursions, Newfoundland and Labrador",
  description:
    "Frequently asked questions about St. John's, Newfoundland and Labrador cruise port visits, shore excursions, timing, and booking enquiries.",
  path,
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "FAQ", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQ" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        <PageHero
          eyebrow="Help centre"
          title="Frequently asked questions"
          subtitle="St. John's, Newfoundland and Labrador cruise port and shore excursion answers for cruise passengers."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Geography">
            <p>
              This website is exclusively for{" "}
              <strong>St. John&apos;s, Newfoundland and Labrador</strong>.{" "}
              <Link href="/st-johns-newfoundland-vs-saint-john-new-brunswick" className="text-blue-800 hover:underline">
                St. John&apos;s vs Saint John NB
              </Link>
            </p>
          </GuideSection>

          <FAQSection faqs={faqs} title="Common questions" />
          <ReturnToShipBlock />
          <GuideRelatedLinks
            guides={[
              { label: "Port guide", href: "/st-johns-cruise-port-guide" },
              { label: "Cruise planner", href: "/cruise-planner" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
