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

const path = "/when-can-you-see-icebergs-in-newfoundland";

const icebergSeasonRows = [
  {
    month: "March",
    conditions: "Winter lingers; sea ice and pack ice more common than classic bergs",
    outlook: "Rare — late-month bergs possible in strong years only",
  },
  {
    month: "April",
    conditions: "Season opens; cold wind, fog, and variable visibility",
    outlook: "Possible — first bergs may appear along the northeast coast",
  },
  {
    month: "May",
    conditions: "Peak interest month; layered clothing essential on lookouts",
    outlook: "Often strongest — many years deliver bergs within day-trip range",
  },
  {
    month: "June",
    conditions: "Warmer air but bergs melt faster; whales increasingly active",
    outlook: "Still possible early June — fewer bergs as month progresses",
  },
  {
    month: "July",
    conditions: "Summer cruise peak; iceberg products usually finished",
    outlook: "Unlikely — occasional distant remnant at best",
  },
];

const faqs = [
  {
    question: "Are iceberg sightings guaranteed in Newfoundland?",
    answer:
      "No. Icebergs drift unpredictably along Iceberg Alley. Some seasons bring spectacular bergs near St. John's; other years keep ice far north. Fog, wind, and melt can hide or destroy bergs on any given day.",
  },
  {
    question: "Are icebergs dangerous for cruise passengers?",
    answer:
      "Viewed from approved lookouts, roads, or licensed tour boats, icebergs are generally safe when you follow operator guidance and stay behind barriers. Never approach ice on foot along the shore, and treat boat trips like any coastal excursion — conditions matter.",
  },
  {
    question: "Can you still see icebergs in Newfoundland in July?",
    answer:
      "July cruise calls should not plan around icebergs. Dedicated iceberg tours rarely operate, and any remaining ice is usually far offshore or already melted. Whale and puffin tours replace ice as the seasonal focus.",
  },
  {
    question: "Is iceberg viewing suitable for children?",
    answer:
      "Coastal lookouts such as Cape Spear can work for families with warm layers and patience. Long coach drives to rural viewing areas suit older children better. Boat tours depend on sea conditions and operator age policies.",
  },
  {
    question: "Is May or June better for icebergs near St. John's?",
    answer:
      "May is typically stronger for iceberg numbers; June trades more bergs for better weather and overlapping whale activity. Neither month guarantees a sighting — check local iceberg trackers and tour operator advice for your visit week.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "When Can You See Icebergs In Newfoundland? — Cruise Passenger Guide",
  description:
    "Honest iceberg season guide for St. John's, Newfoundland and Labrador cruise passengers — Iceberg Alley, best months, viewing spots, ship approaches, and what is never guaranteed.",
  path,
});

export default function IcebergSeasonPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "When Can You See Icebergs In Newfoundland?",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Iceberg Season Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Iceberg Season Guide" }]}
        />
        <PageHero
          eyebrow="Wildlife · seasonal"
          title="When can you see icebergs in Newfoundland?"
          subtitle="Everything cruise passengers need to know about iceberg season, where to see them, and how to maximise your chances."
          imageSrc={HERO_IMAGES.iceberg.src}
          imageAlt={HERO_IMAGES.iceberg.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Newfoundland sits on Iceberg Alley — one of the world's great iceberg corridors — but bergs are never on demand. Cruise passengers need realistic months, honest distances, and backup plans when ice does not cooperate."
            fields={{
              timeInPort: "6–9 hours typical; iceberg tours need full day",
              bestFor: "Late April through early June (varies yearly)",
              returnToShip: "Moderate — rural berg chases need buffers",
              popularTypes: "Coastal drives, Cape Spear, seasonal berg boats",
            }}
          />

          <GuideSection title="What causes Newfoundland's icebergs?">
            <p>
              Newfoundland and Labrador earned global fame as the southern end of{" "}
              <strong>Iceberg Alley</strong> — the corridor where massive freshwater
              ice drifts south from western Greenland, breaks free of the Arctic, and
              rides the Labrador Current past the island&apos;s northeast coast.
            </p>
            <p className="mt-3">
              These are not local formations. Most bergs calve from the Greenland ice
              sheet, then travel hundreds of kilometres over weeks or months before
              anyone in St. John&apos;s might spot them. That journey is why each berg
              feels like a fleeting event — and why no operator or harbour webcam can
              promise one on your port day.
            </p>
            <p className="mt-3">
              For harbour-level context on what cruise passengers realistically see
              from town, see also our{" "}
              <Link
                href="/icebergs-near-st-johns"
                className="text-blue-800 hover:underline"
              >
                icebergs near St. John&apos;s
              </Link>{" "}
              guide.
            </p>
          </GuideSection>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              When is iceberg season?
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Peak weeks shift every year. The table below reflects typical patterns
              for cruise passengers — not guarantees. Use the{" "}
              <Link href="/cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>{" "}
              to match your ship month to realistic options.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-left">
                    <th className="p-3 font-semibold">Month</th>
                    <th className="p-3 font-semibold">Typical conditions</th>
                    <th className="p-3 font-semibold">Iceberg outlook</th>
                  </tr>
                </thead>
                <tbody>
                  {icebergSeasonRows.map((row) => (
                    <tr key={row.month} className="border-b border-slate-100">
                      <td className="p-3 font-medium">{row.month}</td>
                      <td className="p-3 text-slate-700">{row.conditions}</td>
                      <td className="p-3 text-slate-700">{row.outlook}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
              <strong>Honest expectation:</strong> Iceberg season is exciting precisely
              because it is unpredictable. A May cruise in a strong year might deliver
              bergs from Signal Hill; a June call in a weak year might find nothing
              within a day&apos;s drive. Never book a port day solely around ice.
            </p>
          </section>

          <GuideSection title="Best places to see icebergs">
            <p>
              Newfoundland hosts famous viewing locations — but not all are realistic
              on a cruise excursion timetable.
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>
                <strong>St. John&apos;s harbour &amp; Signal Hill:</strong> When bergs
                drift close, the city delivers iconic photos without leaving town.
                Check local trackers — this is bonus luck, not a baseline plan.
              </li>
              <li>
                <strong>Cape Spear:</strong> Realistic on a half-day{" "}
                <Link
                  href="/cape-spear-shore-excursion"
                  className="text-blue-800 hover:underline"
                >
                  Cape Spear shore excursion
                </Link>
                . Occasional berg glimpses offshore in season; read our{" "}
                <Link
                  href="/cape-spear-guide"
                  className="text-blue-800 hover:underline"
                >
                  Cape Spear guide
                </Link>{" "}
                for what the headland actually delivers.
              </li>
              <li>
                <strong>Twillingate &amp; Bonavista:</strong> World-renowned berg towns
                on the northeast coast — typically <em>not</em> feasible on a standard
                6–8 hour St. John&apos;s port call without extreme rushing.
              </li>
              <li>
                <strong>Ferryland:</strong> Historic coast with berg potential in
                strong seasons — usually a long drive from the cruise terminal for
                independent travellers only.
              </li>
            </ul>
            <p className="mt-4">
              For most cruise passengers, the practical choices are harbour-adjacent
              luck, Cape Spear, or an organised{" "}
              <Link
                href="/iceberg-tour-st-johns"
                className="text-blue-800 hover:underline"
              >
                seasonal iceberg tour
              </Link>{" "}
              when operators confirm bergs within safe range.
            </p>
          </GuideSection>

          <GuideSection title="Can you see icebergs from your cruise ship?">
            <p>
              Sometimes — and that surprise sighting is one of the thrills of a
              Newfoundland approach. Ships often enter The Narrows at dawn or early
              morning, which can mean dramatic light <em>or</em> thick fog.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <strong>Arrival timing:</strong> Bergs visible at sea may melt or drift
                before you disembark. Photograph from the deck when safe — do not delay
                immigration plans chasing ice.
              </li>
              <li>
                <strong>Weather &amp; visibility:</strong> Fog hides icebergs as easily
                as it hides lighthouses. Clear days reward passengers on upper decks.
              </li>
              <li>
                <strong>Binoculars:</strong> A compact pair transforms distant white
                shapes into unmistakable berg profiles.
              </li>
              <li>
                <strong>Port approach:</strong> The final miles into St. John&apos;s can
                pass near coastal ice in strong seasons. Ask the crew if they expect
                viewing opportunities — they will not promise sightings.
              </li>
            </ul>
            <p className="mt-4">
              Pair ship-deck hopes with shore planning via our{" "}
              <Link
                href="/st-johns-cruise-port-guide"
                className="text-blue-800 hover:underline"
              >
                St. John&apos;s cruise port guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Best excursions for iceberg viewing">
            <p>
              When ice is present and your hours ashore allow, these are the excursion
              types cruise passengers most often combine:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>
                <Link
                  href="/cape-spear-shore-excursion"
                  className="text-blue-800 hover:underline"
                >
                  Cape Spear shore excursion
                </Link>{" "}
                — easternmost point, open-ocean views, occasional offshore bergs without
                committing to a long rural chase.
              </li>
              <li>
                <strong>Scenic coastal drives</strong> — Avalon Peninsula loops when
                operators report accessible ice; treat sightings as bonuses. See{" "}
                <Link
                  href="/scenic-newfoundland-tour"
                  className="text-blue-800 hover:underline"
                >
                  scenic Newfoundland tour
                </Link>
                .
              </li>
              <li>
                <Link
                  href="/iceberg-tour-st-johns"
                  className="text-blue-800 hover:underline"
                >
                  Seasonal iceberg tours
                </Link>{" "}
                — dedicated products that run only when bergs are confirmed within
                day-trip range; enquire early in strong seasons.
              </li>
              <li>
                <Link
                  href="/whale-watching-cruise-st-johns"
                  className="text-blue-800 hover:underline"
                >
                  Whale &amp; iceberg cruises
                </Link>{" "}
                — late May and early June sometimes overlap both; read our{" "}
                <Link
                  href="/whale-watching-st-johns"
                  className="text-blue-800 hover:underline"
                >
                  whale watching guide
                </Link>{" "}
                for seasonal honesty on combo trips.
              </li>
            </ul>
            <p className="mt-4">
              Compare fit and return confidence on our{" "}
              <Link
                href="/best-st-johns-shore-excursions"
                className="text-blue-800 hover:underline"
              >
                best St. John&apos;s shore excursions
              </Link>{" "}
              list and{" "}
              <Link
                href="/things-to-do-in-st-johns-from-a-cruise-ship"
                className="text-blue-800 hover:underline"
              >
                things to do from a cruise ship
              </Link>{" "}
              hub.
            </p>
          </GuideSection>

          <GuideSection title="Icebergs and whales">
            <p>
              Late spring is the sweet spot where iceberg chasers and whale watchers
              overlap. Humpbacks arrive as some bergs still drift south, and combo
              marketing peaks — but wildlife and ice remain independent events.
            </p>
            <p className="mt-3">
              A whale boat is not an iceberg tour unless the operator explicitly
              routes toward known ice <em>and</em> bergs are confirmed that day. Many
              passengers in May and early June sensibly plan one coastal drive or berg
              product plus a separate whale trip when port time allows.
            </p>
          </GuideSection>

          <GuideSection title="Cruise passenger tips">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Dress for the North Atlantic:</strong> Wind on Cape Spear or a
                boat deck feels colder than downtown. Pack a warm hat and waterproof
                shell even in May. See{" "}
                <Link
                  href="/what-to-wear-in-st-johns-newfoundland"
                  className="text-blue-800 hover:underline"
                >
                  what to wear in St. John&apos;s
                </Link>
                .
              </li>
              <li>
                <strong>Bring binoculars</strong> — ship, lookout, and coach windows
                all benefit.
              </li>
              <li>
                <strong>Use zoom, not digital crop</strong> — phone cameras struggle
                with distant white ice against bright sea haze.
              </li>
              <li>
                <strong>Check weather and fog forecasts</strong> the evening before your
                port day; fog can cancel or dull the best-laid berg plans.
              </li>
              <li>
                <strong>Enjoy the scenery regardless.</strong> Signal Hill, The Narrows,
                and Cape Spear reward visitors even when ice stays offshore. A port day
                without bergs is still a remarkable Newfoundland day.
              </li>
            </ul>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Dedicated iceberg chases and rural coast drives need six or more hours ashore and generous buffers before all-aboard. Harbour-level viewing from downtown is High confidence for time — Low for ice certainty."
          />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              {
                label: "Icebergs near St. John's",
                href: "/icebergs-near-st-johns",
              },
              {
                label: "Best time to visit",
                href: "/best-time-to-visit-st-johns",
              },
              {
                label: "Puffin season",
                href: "/when-can-you-see-puffins-in-newfoundland",
              },
            ]}
            excursions={[
              { label: "Iceberg tour", href: "/iceberg-tour-st-johns" },
              { label: "Cape Spear tour", href: "/cape-spear-shore-excursion" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
