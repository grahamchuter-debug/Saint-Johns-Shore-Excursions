import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/st-johns-newfoundland-vs-saint-john-new-brunswick";

const faqs = [
  {
    question: "Is St. John's the same as Saint John?",
    answer:
      "No. St. John's is the capital of Newfoundland and Labrador on the Avalon Peninsula. Saint John is a city in New Brunswick on the Bay of Fundy. They are different provinces, ports, and cruise experiences.",
  },
  {
    question: "How do I know which port my cruise visits?",
    answer:
      "Check your cruise line itinerary for the province: Newfoundland and Labrador means St. John's NL. New Brunswick means Saint John NB. Confirm on your booking documents and daily planner.",
  },
  {
    question: "Do they have different shore excursions?",
    answer:
      "Completely different. St. John's offers Signal Hill, Cape Spear, puffins, and icebergs. Saint John NB focuses on Fundy tides, Reversing Falls, and different Atlantic Canada heritage.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "St. John's Newfoundland vs Saint John New Brunswick — Port Disambiguation",
  description:
    "Clear guide: St. John's, Newfoundland and Labrador is not Saint John, New Brunswick. Different cruise ports, provinces, and shore excursions — how to check your itinerary.",
  path,
});

export default function DisambiguationPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "St. John's Newfoundland vs Saint John New Brunswick",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "St. John's vs Saint John NB" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "St. John's vs Saint John NB" },
          ]}
        />
        <PageHero
          eyebrow="Important — read before booking"
          title="St. John's, Newfoundland and Labrador vs Saint John, New Brunswick"
          subtitle="Two similarly named cities, two different provinces, two completely different cruise ports. This page exists to prevent itinerary confusion."
        />

        <div className="mt-10 space-y-10">
          <div className="rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
            <p className="font-semibold text-amber-950 text-lg">
              This website covers St. John&apos;s, Newfoundland and Labrador only.
            </p>
            <p className="mt-2 text-amber-950/90">
              If your cruise visits Saint John in New Brunswick, you need shore
              excursion advice for that port — not this site.
            </p>
          </div>

          <GuideSection title="St. John's = Newfoundland and Labrador">
            <ul className="list-disc pl-5 space-y-2">
              <li>Province: Newfoundland and Labrador (NL)</li>
              <li>Location: Avalon Peninsula, easternmost major city in North America</li>
              <li>Highlights: Signal Hill, Cape Spear, puffins, icebergs, Jellybean Row</li>
              <li>Typical cruise region: Canada & New England</li>
            </ul>
            <p className="mt-4">
              Explore our{" "}
              <Link href="/st-johns-cruise-port-guide" className="text-blue-800 hover:underline">
                St. John&apos;s cruise port guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Saint John = New Brunswick">
            <ul className="list-disc pl-5 space-y-2">
              <li>Province: New Brunswick (NB)</li>
              <li>Location: Bay of Fundy coast — not on Newfoundland island</li>
              <li>Highlights: Reversing Falls, Fundy tides, Uptown heritage (different from St. John&apos;s NL)</li>
              <li>Also appears on Canada & New England itineraries — but a different port day</li>
            </ul>
          </GuideSection>

          <GuideSection title="How to check which port is on your itinerary">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Open your cruise line booking confirmation or app.</li>
              <li>Find the port name and <strong>province or country</strong> listed beside it.</li>
              <li>
                &quot;St. John&apos;s, NL&quot; or &quot;Newfoundland&quot; = this site.
                &quot;Saint John, NB&quot; or &quot;New Brunswick&quot; = different port.
              </li>
              <li>When in doubt, ask your cruise line directly before booking excursions.</li>
            </ol>
          </GuideSection>

          <GuideSection title="Different excursions">
            <p>
              St. John&apos;s shore excursions focus on Newfoundland culture, Atlantic
              puffins, seasonal icebergs, and dramatic Avalon coastline. Saint John NB
              excursions focus on Bay of Fundy phenomena and New Brunswick heritage.
              Never assume a tour marketed for one city works at the other.
            </p>
          </GuideSection>

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "St. John's port guide", href: "/st-johns-cruise-port-guide" },
              { label: "Newfoundland cruise guide", href: "/newfoundland-cruise-guide" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
