import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/things-to-do-in-st-johns-from-a-cruise-ship";

const faqs = [
  {
    question: "What can I do in St. John's without a tour?",
    answer:
      "Walk Water Street, explore Jellybean Row, visit harbour cafés, and browse the Seaport area. Signal Hill requires uphill walking or a taxi.",
  },
  {
    question: "What is unique to St. John's compared with other Canada & New England ports?",
    answer:
      "Newfoundland culture, Signal Hill and Cape Spear geography, seasonal puffins and icebergs, and one of North America's oldest harbours.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Things To Do In St. John's From A Cruise Ship",
  description:
    "Things to do in St. John's, Newfoundland and Labrador from a cruise ship — history, wildlife, scenic drives, culture, walking, photography, and food.",
  path,
});

export default function ThingsToDoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "Things To Do In St. John's From A Cruise Ship", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Things To Do" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Things To Do" }]} />
        <PageHero
          eyebrow="Port day ideas"
          title="Things to do in St. John's from a cruise ship"
          subtitle="History, wildlife, scenic coastline, culture, walking, photography, and food — organised by interest for cruise passengers in Newfoundland and Labrador."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout />

          <GuideSection title="History & heritage">
            <p>
              Signal Hill and Cabot Tower, The Rooms museum, the Anglican Cathedral,
              and Water Street&apos;s commercial history tell the story of one of
              North America&apos;s oldest English-founded cities. See our{" "}
              <Link href="/signal-hill-guide" className="text-blue-800 hover:underline">Signal Hill guide</Link>.
            </p>
          </GuideSection>

          <GuideSection title="Wildlife (seasonal — never guaranteed)">
            <p>
              Puffin boat tours (May–September), whale watching (June–September peak),
              and occasional seabirds from Cape Spear. Read{" "}
              <Link href="/when-can-you-see-puffins-in-newfoundland" className="text-blue-800 hover:underline">puffin season</Link>{" "}
              and{" "}
              <Link href="/whale-watching-st-johns" className="text-blue-800 hover:underline">whale watching</Link>{" "}
              guides before booking.
            </p>
          </GuideSection>

          <GuideSection title="Scenic drives & coastline">
            <p>
              Cape Spear, the Irish Loop, and Avalon Peninsula lookouts deliver
              Atlantic drama within day-trip range. Icebergs are seasonal only —{" "}
              <Link href="/icebergs-near-st-johns" className="text-blue-800 hover:underline">see expectations</Link>.
            </p>
          </GuideSection>

          <GuideSection title="Culture & villages">
            <p>
              Quidi Vidi harbour, local music on George Street, and{" "}
              <Link href="/newfoundland-culture-guide" className="text-blue-800 hover:underline">Newfoundland traditions</Link>{" "}
              distinguish St. John&apos;s from generic cruise ports.
            </p>
          </GuideSection>

          <GuideSection title="Walking & photography">
            <p>
              Jellybean Row, the harbour boardwalk, and Signal Hill viewpoints. See{" "}
              <Link href="/jellybean-row-guide" className="text-blue-800 hover:underline">Jellybean Row guide</Link>{" "}
              and{" "}
              <Link href="/walking-st-johns-from-cruise-port" className="text-blue-800 hover:underline">walking from port</Link>.
            </p>
          </GuideSection>

          <GuideSection title="Food & drink">
            <p>
              Fish and chips, toutons, local cod dishes, and Quidi Vidi Brewery.
              Combine with a{" "}
              <Link href="/city-highlights-tour-st-johns" className="text-blue-800 hover:underline">city highlights tour</Link>{" "}
              for efficient pacing.
            </p>
          </GuideSection>

          <GuideSection title="Excursion planning">
            <p>
              Use the{" "}
              <Link href="/cruise-planner" className="text-blue-800 hover:underline">cruise planner</Link>,{" "}
              <Link href="/one-day-in-st-johns-from-a-cruise-ship" className="text-blue-800 hover:underline">one-day itineraries</Link>, and{" "}
              <Link href="/best-st-johns-shore-excursions" className="text-blue-800 hover:underline">best excursions list</Link>{" "}
              to match activities to your hours ashore.
            </p>
          </GuideSection>

          <ReturnToShipBlock />
          <FAQSection faqs={faqs} />
          <ExcursionLinks />
          <GuideRelatedLinks guides={[{ label: "Port guide", href: "/st-johns-cruise-port-guide" }]} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
