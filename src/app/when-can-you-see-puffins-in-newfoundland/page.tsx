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

const path = "/when-can-you-see-puffins-in-newfoundland";

const puffinSeasonRows = [
  {
    month: "March",
    conditions: "Offshore; colonies not accessible",
    outlook: "No puffin tours",
  },
  {
    month: "April",
    conditions: "Birds return offshore; cold wind and fog",
    outlook: "Tours rare until late month",
  },
  {
    month: "May",
    conditions: "Nesting begins; layered clothing on boats",
    outlook: "Tours operating — building toward peak",
  },
  {
    month: "June",
    conditions: "Peak colony activity; fog still common",
    outlook: "Often strongest month for close views",
  },
  {
    month: "July",
    conditions: "Warmest boat conditions; busy cruise season",
    outlook: "Peak puffin viewing",
  },
  {
    month: "August",
    conditions: "Active colonies; seas can be lively",
    outlook: "Excellent viewing through month",
  },
  {
    month: "September",
    conditions: "Colonies depart mid to late month",
    outlook: "Early September only — check operator schedules",
  },
  {
    month: "October",
    conditions: "Season ended; birds offshore or migrated",
    outlook: "No puffin tours",
  },
];

const faqs = [
  {
    question: "When can you see puffins near St. John's?",
    answer:
      "Atlantic puffin boat tours typically run mid-May through early September, with peak colony activity in June and July. Witless Bay Ecological Reserve, south of St. John's, hosts one of the largest puffin colonies in eastern North America.",
  },
  {
    question: "Can you see puffins without a boat tour?",
    answer:
      "Occasional puffins appear near Cape Spear or coastal trails, but reliable close views require boat access to colony islands. Land-based sightings from downtown St. John's are rare.",
  },
  {
    question: "Are puffin sightings guaranteed?",
    answer:
      "No. Puffins nest on schedule, but fog, sea state, and operator routing affect what you see on any given trip. Colonies are active in season — individual behaviour and photography conditions still vary.",
  },
  {
    question: "Can I combine puffins and whales on one port day?",
    answer:
      "Late May through early September sometimes allows combo products when both seasons overlap. You need six or more hours ashore and a generous return buffer — wildlife events remain independent.",
  },
  {
    question: "Is puffin viewing suitable for children?",
    answer:
      "Boat tours suit many families when seas are calm, but young children may struggle with cold spray, motion, and three-hour water time. Check operator age policies and seasickness guidance before booking.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "When Can You See Puffins in Newfoundland? — Season & Cruise Timing",
  description:
    "When can you see puffins in Newfoundland from St. John's? Nesting season months, Witless Bay boat tours, and honest cruise-day timing for Atlantic puffin watching.",
  path,
});

export default function PuffinSeasonPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "When Can You See Puffins In Newfoundland?",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Puffin Season Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Puffin Season Guide" }]}
        />
        <PageHero
          eyebrow="Wildlife · seasonal"
          title="When can you see puffins in Newfoundland?"
          subtitle="Everything cruise passengers need to know about Atlantic puffin season, Witless Bay colonies, and how to plan a realistic port day."
          imageSrc={HERO_IMAGES.puffin.src}
          imageAlt={HERO_IMAGES.puffin.alt}
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Puffins are one of Newfoundland's signature wildlife draws — but they nest on offshore islands, not on George Street. Cruise passengers need honest months, boat logistics, and backup plans when fog cancels departures."
            fields={{
              timeInPort: "6–8 hours recommended for puffin boats",
              bestFor: "Mid-May through early September",
              returnToShip: "Moderate — allow driving plus water time",
              popularTypes: "Witless Bay boat tours, combo whale trips",
            }}
          />

          <GuideSection title="Where do puffins nest near St. John's?">
            <p>
              Atlantic puffins breed on islands along the Avalon Peninsula coast.
              <strong> Witless Bay Ecological Reserve</strong> — roughly 30–45
              minutes south of the St. John&apos;s cruise terminal by road — supports
              hundreds of thousands of seabirds including puffins, murres, and
              kittiwakes.
            </p>
            <p className="mt-3">
              St. John&apos;s city itself is not a puffin colony. The practical
              cruise-passenger experience is a licensed boat tour circling the reserve
              islands — passengers see puffins on water and cliff faces, often at
              close range when conditions cooperate.
            </p>
            <p className="mt-3">
              Compare boat products on our{" "}
              <Link
                href="/puffin-tours-st-johns"
                className="text-blue-800 hover:underline"
              >
                puffin tours from St. John&apos;s
              </Link>{" "}
              page and read{" "}
              <Link
                href="/cape-spear-guide"
                className="text-blue-800 hover:underline"
              >
                Cape Spear
              </Link>{" "}
              for occasional coastal seabird context — not a substitute for colony
              boats.
            </p>
          </GuideSection>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              When is puffin season?
            </h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              Nesting calendars are more predictable than icebergs — but fog, sea state,
              and operator schedules still matter. Use the{" "}
              <Link href="/cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>{" "}
              to match your ship month to realistic wildlife options.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-left">
                    <th className="p-3 font-semibold">Month</th>
                    <th className="p-3 font-semibold">Typical conditions</th>
                    <th className="p-3 font-semibold">Puffin outlook</th>
                  </tr>
                </thead>
                <tbody>
                  {puffinSeasonRows.map((row) => (
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
              <strong>Honest expectation:</strong> Puffin tours operate in season,
              but each trip depends on safe sea conditions and visibility. A July call
              in fog may still disappoint — have a downtown or Signal Hill backup ready.
            </p>
          </section>

          <GuideSection title="Best excursions for puffin viewing">
            <p>
              Cruise passengers with six or more hours ashore typically choose:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>
                <Link
                  href="/puffin-tours-st-johns"
                  className="text-blue-800 hover:underline"
                >
                  Dedicated puffin boat tours
                </Link>{" "}
                — Witless Bay departures with expert seabird interpretation.
              </li>
              <li>
                <Link
                  href="/whale-watching-cruise-st-johns"
                  className="text-blue-800 hover:underline"
                >
                  Whale &amp; puffin combo cruises
                </Link>{" "}
                — when seasons overlap late May through August; read our{" "}
                <Link
                  href="/whale-watching-st-johns"
                  className="text-blue-800 hover:underline"
                >
                  whale watching guide
                </Link>{" "}
                for seasonal honesty.
              </li>
              <li>
                <Link
                  href="/scenic-newfoundland-tour"
                  className="text-blue-800 hover:underline"
                >
                  Scenic coastal drives
                </Link>{" "}
                — cliff viewpoints without guaranteed colony access; better as add-ons
                than puffin substitutes.
              </li>
            </ul>
            <p className="mt-4">
              Short port days should skip puffin boats and choose walkable{" "}
              <Link
                href="/things-to-do-in-st-johns-from-a-cruise-ship"
                className="text-blue-800 hover:underline"
              >
                things to do downtown
              </Link>{" "}
              instead.
            </p>
          </GuideSection>

          <GuideSection title="Puffins and whales">
            <p>
              Late spring and summer marketing loves combo trips — and when humpbacks
              and puffins share the calendar, one boat can deliver both. Wildlife
              remains independent: whales feed on different schedules than cliff
              nesting, and operators route toward what conditions allow.
            </p>
            <p className="mt-3">
              Many passengers in June and July sensibly book one puffin-focused product
              when port time is tight, or a combo when eight hours ashore allows a
              relaxed return buffer.
            </p>
          </GuideSection>

          <GuideSection title="Cruise passenger tips">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Book early on multi-ship days</strong> — puffin boats fill when
                several vessels call St. John&apos;s.
              </li>
              <li>
                <strong>Dress for cold spray</strong> — boat decks feel colder than
                downtown. See{" "}
                <Link
                  href="/what-to-wear-in-st-johns-newfoundland"
                  className="text-blue-800 hover:underline"
                >
                  what to wear in St. John&apos;s
                </Link>
                .
              </li>
              <li>
                <strong>Bring binoculars and a zoom lens</strong> — puffins move fast;
                phones struggle at distance in bright sea haze.
              </li>
              <li>
                <strong>Confirm return-to-ship policy</strong> before booking
                independent boats — our{" "}
                <Link
                  href="/st-johns-cruise-port-guide"
                  className="text-blue-800 hover:underline"
                >
                  port guide
                </Link>{" "}
                explains terminal logistics.
              </li>
              <li>
                <strong>Enjoy the colony regardless of the perfect photo.</strong>{" "}
                Hundreds of thousands of seabirds in one reserve is a remarkable
                experience even when cameras struggle.
              </li>
            </ul>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Puffin boats need 45–60 minutes driving each way plus two to three hours on the water. Six hours ashore is a practical minimum; eight hours is comfortable."
          />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Best time to visit", href: "/best-time-to-visit-st-johns" },
              {
                label: "Whale watching guide",
                href: "/whale-watching-st-johns",
              },
              {
                label: "One day in St. John's",
                href: "/one-day-in-st-johns-from-a-cruise-ship",
              },
            ]}
            excursions={[
              { label: "Puffin tours", href: "/puffin-tours-st-johns" },
              {
                label: "Whale watching cruise",
                href: "/whale-watching-cruise-st-johns",
              },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
