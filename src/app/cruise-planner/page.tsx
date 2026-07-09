import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePlanner } from "@/components/CruisePlanner";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/cruise-planner";

export const metadata: Metadata = pageMetadata({
  title: "Cruise Planner — St. John's Shore Excursions",
  description:
    "Match St. John's, Newfoundland and Labrador shore excursions to your hours ashore — interactive cruise day planner for cruise passengers.",
  path,
});

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "St. John's Cruise Planner",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Cruise Planner" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Cruise Planner" }]} />
        <PageHero
          eyebrow="Interactive planner"
          title="St. John's cruise planner"
          subtitle="Select your hours ashore in St. John's, Newfoundland and Labrador and see excursion suggestions with return-to-ship guidance."
        />

        <div className="mt-10 space-y-10">
          <CruisePlanner />
          <ReturnToShipBlock />
          <GuideRelatedLinks
            guides={[
              { label: "One day in St. John's", href: "/one-day-in-st-johns-from-a-cruise-ship" },
              { label: "Port guide", href: "/st-johns-cruise-port-guide" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
