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

const path = "/st-johns-cruise-ship-schedule";

const faqs = [
  {
    question: "Where can I find my St. John's cruise ship schedule?",
    answer:
      "Your cruise line app and daily planner are authoritative. This hub helps you plan excursions around typical Canada & New England call patterns in St. John's, Newfoundland and Labrador.",
  },
  {
    question: "How long do ships stay in St. John's?",
    answer:
      "Most calls allow six to nine hours ashore. Some itineraries include late departures — always confirm all-aboard time on your sailing.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "St. John's Cruise Ship Schedule — Newfoundland and Labrador",
  description:
    "St. John's, Newfoundland and Labrador cruise ship schedule planning hub — port timing, excursion fit, and how to match tours to your ship's call.",
  path,
});

export default function SchedulePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "St. John's Cruise Ship Schedule", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Cruise Ship Schedule" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Cruise Ship Schedule" }]} />
        <PageHero
          eyebrow="Planning hub"
          title="St. John's cruise ship schedule"
          subtitle="Plan shore excursions around your ship's call in St. John's, Newfoundland and Labrador — timing, buffers, and seasonal products."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Using this schedule hub">
            <p>
              Live ship schedules change frequently. Use your cruise line&apos;s official
              tools for arrival and departure times. This page helps you translate
              your hours ashore into realistic excursion choices.
            </p>
          </GuideSection>

          <GuideSection title="Typical port timing">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>4 hours:</strong> Downtown, Jellybean Row, Quidi Vidi — avoid long wildlife tours</li>
              <li><strong>6 hours:</strong> Signal Hill, Cape Spear, or city combos</li>
              <li><strong>8+ hours:</strong> Puffin boats, scenic drives, seasonal iceberg products</li>
            </ul>
            <p className="mt-4">
              Use the{" "}
              <Link href="/cruise-planner" className="text-blue-800 hover:underline">cruise planner</Link>{" "}
              and{" "}
              <Link href="/one-day-in-st-johns-from-a-cruise-ship" className="text-blue-800 hover:underline">one-day itineraries</Link>.
            </p>
          </GuideSection>

          <GuideSection title="Canada & New England season">
            <p>
              Most St. John&apos;s calls occur May through October. Match wildlife and
              iceberg expectations to your visit month via{" "}
              <Link href="/best-time-to-visit-st-johns" className="text-blue-800 hover:underline">best time to visit</Link>.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="Moderate" note="Always set a personal turnaround time 45–60 minutes before all-aboard — regardless of published tour return times." />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[{ label: "Port guide", href: "/st-johns-cruise-port-guide" }]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
