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
import { pageMetadata } from "@/lib/site";

const path = "/one-day-in-st-johns-from-a-cruise-ship";

const faqs = [
  {
    question: "How much time do I need in St. John's, Newfoundland and Labrador?",
    answer:
      "Four hours suits downtown and Jellybean Row on foot. Six hours opens Signal Hill or a city highlights tour. Eight hours allows Cape Spear, puffin boats, or a scenic Avalon drive — always with a 45–60 minute all-aboard buffer.",
  },
  {
    question: "Should I book an excursion or explore St. John's independently?",
    answer:
      "Downtown and the harbour boardwalk are walkable from most cruise berths. Signal Hill, Cape Spear, puffin boats, and iceberg products need transport — organised tours simplify return timing on short port days.",
  },
  {
    question: "Can I combine wildlife and sightseeing in one day?",
    answer:
      "On eight-hour calls in season, some passengers pair a morning puffin or whale boat with an afternoon city tour. Wildlife is never guaranteed — build backup plans around downtown and Signal Hill.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "One Day In St. John's From A Cruise Ship — Itinerary Guide",
  description:
    "Sample itineraries for 4, 6, and 8 hours ashore in St. John's, Newfoundland and Labrador — walking, taxis, excursions, food, photography, and return-to-ship timing.",
  path,
});

export default function OneDayPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "One Day In St. John's From A Cruise Ship",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "One Day In St. John's" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "One Day In St. John's" },
          ]}
        />
        <PageHero
          eyebrow="Itinerary guide"
          title="One day in St. John's from a cruise ship"
          subtitle="Practical half-day and full-day plans for cruise passengers — 4, 6, and 8 hours ashore in Newfoundland and Labrador."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Always subtract 45–60 minutes from your available time for an all-aboard buffer. Fog, hills, and seasonal wildlife tours can compress even generous port calls."
            fields={{
              timeInPort: "4–8 hours depending on ship schedule",
              bestFor: "Downtown walks, Signal Hill, Cape Spear, seasonal wildlife",
              returnToShip: "High for downtown-only; Moderate for full-day tours",
            }}
          />

          <GuideSection title="4 hours ashore">
            <p>
              <strong>Best for:</strong> Walkable downtown, Jellybean Row, harbour
              photography, and local food without leaving the flat waterfront zone.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>0:00–0:15 — Clear customs, walk to Water Street and the harbour</li>
              <li>0:15–1:15 — Jellybean Row photos on Duckworth and Gower streets</li>
              <li>1:15–1:45 — Lunch at a harbour café or pub on George Street</li>
              <li>1:45–2:30 — The Rooms museum, harbour boardwalk, or Seaport browsing</li>
              <li>2:30–3:00 — Last-minute shopping, return walk to terminal</li>
              <li>3:00+ — Onboard buffer before all-aboard</li>
            </ul>
            <p className="mt-3">
              <strong>Walking option:</strong> Self-guided — see{" "}
              <Link
                href="/walking-st-johns-from-cruise-port"
                className="text-blue-800 hover:underline"
              >
                walking from port
              </Link>{" "}
              and our{" "}
              <Link
                href="/jellybean-row-guide"
                className="text-blue-800 hover:underline"
              >
                Jellybean Row guide
              </Link>
              .
              <br />
              <strong>Skip on 4 hours:</strong> Signal Hill uphill hikes, Cape Spear,
              puffin boats, and rural iceberg chases.
            </p>
          </GuideSection>

          <GuideSection title="6 hours ashore">
            <p>
              <strong>Best for:</strong> Signal Hill, city highlights, or Quidi Vidi
              plus a downtown lunch — the classic St. John&apos;s introduction.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>0:00–0:30 — Disembark, meet pre-booked tour or taxi to Signal Hill</li>
              <li>0:30–2:00 — Signal Hill, Cabot Tower, and harbour panoramas</li>
              <li>2:00–2:45 — Return to downtown, quick Water Street stop</li>
              <li>2:45–3:30 — Lunch and Jellybean Row photography</li>
              <li>3:30–4:30 — Quidi Vidi village or The Rooms if time allows</li>
              <li>4:30–5:15 — Return to terminal with buffer</li>
            </ul>
            <p className="mt-3">
              <strong>Excursion picks:</strong>{" "}
              <Link
                href="/signal-hill-shore-excursion"
                className="text-blue-800 hover:underline"
              >
                Signal Hill shore excursion
              </Link>
              ,{" "}
              <Link
                href="/city-highlights-tour-st-johns"
                className="text-blue-800 hover:underline"
              >
                city highlights tour
              </Link>
              , or{" "}
              <Link
                href="/quidi-vidi-village-tour"
                className="text-blue-800 hover:underline"
              >
                Quidi Vidi village tour
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="8 hours ashore">
            <p>
              <strong>Best for:</strong> Cape Spear, seasonal puffin or whale boats,
              scenic Avalon drives, or a thorough city-plus-coast combination.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>0:00–3:30 — Organised Cape Spear, puffin boat, or scenic Newfoundland tour</li>
              <li>3:30–5:00 — Downtown lunch, Jellybean Row, harbour walk</li>
              <li>5:00–6:00 — Signal Hill photos or Quidi Vidi if energy allows</li>
              <li>6:00–6:45 — Return to ship with generous buffer</li>
            </ul>
            <p className="mt-3">
              <strong>Excursion picks:</strong>{" "}
              <Link
                href="/cape-spear-shore-excursion"
                className="text-blue-800 hover:underline"
              >
                Cape Spear shore excursion
              </Link>
              ,{" "}
              <Link
                href="/puffin-tours-st-johns"
                className="text-blue-800 hover:underline"
              >
                puffin tours
              </Link>{" "}
              (May–September),{" "}
              <Link
                href="/whale-watching-cruise-st-johns"
                className="text-blue-800 hover:underline"
              >
                whale watching cruise
              </Link>
              , or{" "}
              <Link
                href="/scenic-newfoundland-tour"
                className="text-blue-800 hover:underline"
              >
                scenic Newfoundland tour
              </Link>
              . Match season to our{" "}
              <Link
                href="/best-time-to-visit-st-johns"
                className="text-blue-800 hover:underline"
              >
                best time to visit
              </Link>{" "}
              guide.
            </p>
          </GuideSection>

          <GuideSection title="Food and photography">
            <p>
              Fresh seafood, toutons, and fish-and-chips appear on menus across
              downtown. George Street and Water Street offer harbour-side dining
              without long transfers. Signal Hill, Cape Spear, and Jellybean Row
              deliver the iconic Newfoundland photos cruise passengers expect — pack
              layers for wind on headlands. See{" "}
              <Link
                href="/what-to-wear-in-st-johns-newfoundland"
                className="text-blue-800 hover:underline"
              >
                what to wear in St. John&apos;s
              </Link>{" "}
              before you go ashore.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Downtown-only days are High confidence for timing. Wildlife boats and Cape Spear need six or more hours ashore and a firm 45–60 minute buffer before all-aboard."
          />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              {
                label: "Things to do from a cruise ship",
                href: "/things-to-do-in-st-johns-from-a-cruise-ship",
              },
              { label: "Cruise planner", href: "/cruise-planner" },
              { label: "Port guide", href: "/st-johns-cruise-port-guide" },
            ]}
            excursions={[
              { label: "City highlights tour", href: "/city-highlights-tour-st-johns" },
              { label: "Signal Hill tour", href: "/signal-hill-shore-excursion" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
