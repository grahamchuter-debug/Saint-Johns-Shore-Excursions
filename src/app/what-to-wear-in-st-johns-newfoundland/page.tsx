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

const path = "/what-to-wear-in-st-johns-newfoundland";

const faqs = [
  {
    question: "What should cruise passengers wear in St. John's in summer?",
    answer:
      "Layered clothing year-round — T-shirt or light base, fleece or sweater, and a windproof waterproof jacket. July and August feel mild downtown but Signal Hill, Cape Spear, and boat decks stay cold and windy.",
  },
  {
    question: "Do I need rain gear for a St. John's port day?",
    answer:
      "Yes. Drizzle and fog arrive without warning even in peak summer. A packable waterproof shell beats relying on ship umbrellas in coastal wind.",
  },
  {
    question: "What footwear works best in St. John's?",
    answer:
      "Comfortable waterproof walking shoes with grip for hills and wet sidewalks. Boat tours and Cape Spear benefit from closed-toe shoes that handle spray and uneven paths.",
  },
  {
    question: "How cold is St. John's in May on a cruise?",
    answer:
      "Highs often 5–12°C with wind chill lower on headlands. Pack a warm hat, gloves optional, and full layers — May is not short-sleeve weather on the Atlantic.",
  },
  {
    question: "Should I dress differently for puffin or whale boats?",
    answer:
      "Boat decks are colder and wetter than downtown. Add a warm mid-layer, hat, and waterproof outer shell regardless of the month. Seasickness sufferers should dress in removable layers.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "What to Wear in St. John's Newfoundland — Cruise Layers & Weather",
  description:
    "What to wear in St. John's, Newfoundland on a cruise — layers for wind, fog, and rain, plus packing tips for Signal Hill, Cape Spear, and boat tours.",
  path,
});

export default function WhatToWearPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "What To Wear In St. John's, Newfoundland",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "What To Wear" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "What To Wear" }]}
        />
        <PageHero
          eyebrow="Practical guide"
          title="What to wear in St. John's, Newfoundland"
          subtitle="Layers, wind, fog, and rain — honest packing advice for cruise passengers on the North Atlantic."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="St. John's weather punishes outfit optimism. The same July afternoon can feel warm on Water Street and freezing on a whale boat — plan layers, not a single lucky jacket."
            fields={{
              bestFor: "Waterproof shell + warm mid-layer every month",
              activityLevel: "Hills downtown; wind on headlands and boats",
            }}
          />

          <GuideSection title="The layering rule">
            <p>
              Newfoundland cruise passengers should think in three layers every month
              ships call:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <strong>Base:</strong> Moisture-wicking T-shirt or light long sleeve —
                avoid cotton alone on active days.
              </li>
              <li>
                <strong>Mid:</strong> Fleece, sweater, or light puffy jacket — essential
                on Signal Hill, Cape Spear, and boat decks.
              </li>
              <li>
                <strong>Shell:</strong> Windproof, waterproof jacket with a hood — fog
                drizzle and Atlantic spray make this non-negotiable.
              </li>
            </ul>
            <p className="mt-4">
              Match depth to month using our{" "}
              <Link
                href="/best-time-to-visit-st-johns"
                className="text-blue-800 hover:underline"
              >
                best time to visit
              </Link>{" "}
              table — May needs warmer mid-layers than August, but August still needs
              the shell.
            </p>
          </GuideSection>

          <GuideSection title="Wind, fog, and rain">
            <p>
              St. John&apos;s sits on the North Atlantic — wind is constant, fog rolls
              through The Narrows without invitation, and rain often arrives as fine
              drizzle rather than dramatic storms. Umbrellas fail on exposed headlands;
              a hooded jacket wins.
            </p>
            <p className="mt-3">
              Fog affects photography and boat departures more than comfort if you are
              dressed correctly. Bright sun still pairs with cold wind on{" "}
              <Link
                href="/signal-hill-guide"
                className="text-blue-800 hover:underline"
              >
                Signal Hill
              </Link>{" "}
              and{" "}
              <Link
                href="/cape-spear-guide"
                className="text-blue-800 hover:underline"
              >
                Cape Spear
              </Link>
              — do not leave the ship in shorts-only outfits.
            </p>
          </GuideSection>

          <GuideSection title="Footwear">
            <p>
              Downtown St. John&apos;s is hilly — Duckworth and Gower streets climb
              quickly from the harbour. Wear comfortable shoes with grip; waterproof
              walking shoes beat fashion sneakers on wet cobblestones.
            </p>
            <p className="mt-3">
              Boat tours for{" "}
              <Link
                href="/when-can-you-see-puffins-in-newfoundland"
                className="text-blue-800 hover:underline"
              >
                puffins
              </Link>{" "}
              and{" "}
              <Link
                href="/whale-watching-st-johns"
                className="text-blue-800 hover:underline"
              >
                whales
              </Link>{" "}
              mean cold, wet decks — closed-toe shoes with non-slip soles. Cape Spear
              paths can be muddy after rain.
            </p>
          </GuideSection>

          <GuideSection title="By excursion type">
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>Downtown walking:</strong> Layers you can tie around your waist
                when cafés feel warm; see{" "}
                <Link
                  href="/walking-st-johns-from-cruise-port"
                  className="text-blue-800 hover:underline"
                >
                  walking from port
                </Link>
                .
              </li>
              <li>
                <strong>Signal Hill &amp; city tours:</strong> Windproof shell
                mandatory; hat recommended year-round.
              </li>
              <li>
                <strong>Cape Spear &amp; coastal drives:</strong> Warmest mid-layer you
                packed; gloves optional in May and October.
              </li>
              <li>
                <strong>Wildlife boats:</strong> Treat like cold-weather boating — hat,
                gloves in shoulder months, waterproof pants if you own them.
              </li>
              <li>
                <strong>Iceberg season (May–June):</strong> Same as boats plus extra
                warmth for long coastal coach days; see{" "}
                <Link
                  href="/when-can-you-see-icebergs-in-newfoundland"
                  className="text-blue-800 hover:underline"
                >
                  iceberg season guide
                </Link>
                .
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="What to pack in your day bag">
            <ul className="list-disc space-y-2 pl-5">
              <li>Compact waterproof jacket (even if the morning looks clear)</li>
              <li>Warm hat and light gloves for headlands and boats</li>
              <li>Sunglasses — coastal glare is real when fog breaks</li>
              <li>Small daypack instead of heavy ship tote for hill walking</li>
              <li>Binoculars for wildlife and iceberg spotting</li>
              <li>Ship card and photo ID — standard, but easy to forget when layering up</li>
            </ul>
          </GuideSection>

          <GuideSection title="What you can skip">
            <p>
              Formal wear, heavy winter parkas in July, and reliance on ship-provided
              umbrellas. St. John&apos;s is casual — pubs, museums, and tour coaches
              accept practical travel clothing. Save suitcase space for layers rather
              than dress shoes unless you have a specific formal event onboard.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Clothing choices rarely affect return timing — but under-dressed passengers cut sightseeing short when cold. Over-layer and adjust on the fly."
          />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Best time to visit", href: "/best-time-to-visit-st-johns" },
              { label: "Port guide", href: "/st-johns-cruise-port-guide" },
              {
                label: "One day in St. John's",
                href: "/one-day-in-st-johns-from-a-cruise-ship",
              },
            ]}
            excursions={[
              { label: "Signal Hill tour", href: "/signal-hill-shore-excursion" },
              { label: "Cape Spear tour", href: "/cape-spear-shore-excursion" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
