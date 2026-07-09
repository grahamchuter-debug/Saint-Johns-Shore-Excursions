import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata, HERO_IMAGES } from "@/lib/site";

const path = "/st-johns-cruise-port-guide";

const faqs = [
  {
    question: "Where do cruise ships dock in St. John's, Newfoundland and Labrador?",
    answer:
      "Cruise ships typically berth at the St. John's harbour cruise terminal on the downtown waterfront, with gangway access near Water Street and the harbourfront. Confirm your daily planner — occasional assignments vary.",
  },
  {
    question: "Can I walk to downtown from the St. John's cruise terminal?",
    answer:
      "Yes — Water Street, the harbour boardwalk, and many city highlights are often 5–15 minutes on foot. Hills increase walking time to Signal Hill or Quidi Vidi.",
  },
  {
    question: "What currency is used in St. John's?",
    answer:
      "Canadian dollars (CAD). Cards are widely accepted; carry cash for tips and small vendors.",
  },
  {
    question: "How is St. John's different from Saint John, New Brunswick?",
    answer:
      "They are different provinces, ports, and cruise experiences. St. John's is the capital of Newfoundland and Labrador on the Avalon Peninsula. Saint John is in New Brunswick on the Bay of Fundy.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "St. John's Cruise Port Guide — Newfoundland and Labrador",
  description:
    "Complete guide to the St. John's, Newfoundland and Labrador cruise port — where ships dock, walking distances, taxis, weather, currency, and best excursions.",
  path,
});

export default function PortGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "St. John's Cruise Port Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "St. John's Cruise Port Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "St. John's Cruise Port Guide" },
          ]}
        />
        <PageHero
          eyebrow="Port guide · Newfoundland and Labrador"
          title="St. John's cruise port guide"
          subtitle="Where ships dock, walking distances to downtown, taxis, weather, and how to plan shore excursions in Newfoundland's capital."
          imageSrc={HERO_IMAGES.port.src}
          imageAlt={HERO_IMAGES.port.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot intro="St. John's is one of Canada's oldest cities and a highlight of many Canada & New England itineraries — but puffin boats, iceberg runs, and Cape Spear still require road time. Know your berth and hours ashore before booking." />

          <GuideSection title="Where ships dock">
            <p>
              Cruise vessels call at the <strong>St. John&apos;s harbour cruise
              terminal</strong> on the historic waterfront — placing passengers
              within walking distance of Water Street, the harbour boardwalk, and
              the colourful hills of downtown. The Narrows, the narrow entrance to
              one of the world&apos;s finest natural harbours, frames the approach
              from deck.
            </p>
            <p>
              You are in <strong>St. John&apos;s, Newfoundland and Labrador</strong>{" "}
              — not Saint John, New Brunswick. If your itinerary is unclear, read
              our{" "}
              <Link
                href="/st-johns-newfoundland-vs-saint-john-new-brunswick"
                className="text-blue-800 hover:underline"
              >
                port disambiguation guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Walking distance to downtown">
            <p>
              Water Street — among North America&apos;s oldest commercial routes —
              and George Street are typically a short walk from the terminal.
              Jellybean Row houses on Duckworth and Gower streets reward walkers
              willing to climb moderate hills.
            </p>
            <p>
              Signal Hill is roughly 2.5 km away with significant elevation.
              Quidi Vidi village sits northeast of downtown — walkable for fit
              guests or a quick taxi ride. See{" "}
              <Link href="/walking-st-johns-from-cruise-port" className="text-blue-800 hover:underline">
                walking from the cruise port
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Taxis and local transport">
            <p>
              Taxis queue at peak disembarkation. Rideshare availability varies —
              confirm apps work with local data before relying on them. Fares to
              Signal Hill, Cape Spear, or Quidi Vidi are modest compared with
              full-day coach tours.
            </p>
            <p>
              Organised shore excursions include terminal pickup — often the
              safest option for Cape Spear, puffin boats, and seasonal iceberg
              products where timing matters.
            </p>
          </GuideSection>

          <GuideSection title="Weather, currency, and local tips">
            <p>
              Atlantic weather changes quickly — wind, fog, and rain arrive without
              warning even in summer. Dress in layers; see{" "}
              <Link href="/what-to-wear-in-st-johns-newfoundland" className="text-blue-800 hover:underline">
                what to wear in St. John's
              </Link>
              .
            </p>
            <p>
              Canadian dollars (CAD); tipping 15–20% in restaurants. Newfoundlanders
              are famously welcoming — allow time for conversation in shops and
              pubs.
            </p>
          </GuideSection>

          <GuideSection title="Best excursions from this port">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link href="/signal-hill-shore-excursion" className="text-blue-800 hover:underline">
                  Signal Hill
                </Link>{" "}
                — iconic views and Cabot Tower
              </li>
              <li>
                <Link href="/cape-spear-shore-excursion" className="text-blue-800 hover:underline">
                  Cape Spear
                </Link>{" "}
                — easternmost point of North America
              </li>
              <li>
                <Link href="/city-highlights-tour-st-johns" className="text-blue-800 hover:underline">
                  City highlights
                </Link>{" "}
                — Jellybean Row and harbour
              </li>
              <li>
                Seasonal:{" "}
                <Link href="/puffin-tours-st-johns" className="text-blue-800 hover:underline">
                  puffins
                </Link>
                ,{" "}
                <Link href="/whale-watching-cruise-st-johns" className="text-blue-800 hover:underline">
                  whales
                </Link>
                ,{" "}
                <Link href="/iceberg-tour-st-johns" className="text-blue-800 hover:underline">
                  icebergs
                </Link>
              </li>
            </ul>
          </GuideSection>

          <ReturnToShipBlock confidence="High" note="Waterfront berths make self-guided downtown walks easy to time. Wildlife and iceberg tours need larger buffers — use our cruise planner." />

          <FAQSection faqs={faqs} />
          <ExcursionLinks />
          <GuideRelatedLinks
            guides={[
              { label: "One day in St. John's", href: "/one-day-in-st-johns-from-a-cruise-ship" },
              { label: "Best time to visit", href: "/best-time-to-visit-st-johns" },
            ]}
            excursions={[
              { label: "Signal Hill shore excursion", href: "/signal-hill-shore-excursion" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
