import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/site";

const path = "/enquire";

export const metadata: Metadata = pageMetadata({
  title: "Enquire About St. John's Shore Excursions",
  description:
    "Ask about St. John's, Newfoundland and Labrador shore excursion availability — email your cruise ship, port hours, and interests. Enquiry-only; no online checkout.",
  path,
});

export default function EnquirePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Enquire About St. John's Shore Excursions",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Enquire" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Enquire" }]} />
        <PageHero
          eyebrow="Enquiry only · no checkout"
          title="Enquire about St. John's shore excursions"
          subtitle="No online checkout — email us with your ship, date, and hours ashore. We reply with options that fit St. John's, Newfoundland and Labrador cruise-port timing."
        />

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <p className="text-sm text-slate-700">
            Prefer to email directly?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("St. John's shore excursion enquiry")}`}
              className="font-semibold text-blue-800 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <CruisePassengerCallout>
              <p>
                Include your cruise line, ship name, port date, all-aboard time, and
                interests (Signal Hill, Cape Spear, puffins, whales, or downtown
                walking).
              </p>
            </CruisePassengerCallout>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <EnquiryForm />
            </div>
          </div>
          <div>
            <ExcursionLinks title="Popular excursions" />
            <div className="mt-8">
              <NeedHelpCTA />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
