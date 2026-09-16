"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { excursions } from "@/lib/excursions";
import { CONTACT_EMAIL } from "@/lib/site";

function buildMailto(fields: {
  name: string;
  email: string;
  ship: string;
  portDate: string;
  hours: string;
  excursion: string;
  message: string;
}): string {
  const excursionLabel =
    excursions.find((e) => e.slug === fields.excursion)?.shortTitle ||
    fields.excursion ||
    "Not sure yet";

  const subject = `St. John's shore excursion enquiry${
    fields.excursion ? ` — ${excursionLabel}` : ""
  }`;

  const body = [
    `Name: ${fields.name}`,
    `Reply-to email: ${fields.email}`,
    `Cruise line / ship: ${fields.ship || "(not provided)"}`,
    `Port date: ${fields.portDate || "(not provided)"}`,
    `Hours in port: ${fields.hours || "(not provided)"}`,
    `Excursion interest: ${excursionLabel}`,
    "",
    "Message:",
    fields.message || "(none)",
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function EnquiryFormInner() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("excursion") ?? "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const href = buildMailto({
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      ship: String(data.get("ship") ?? "").trim(),
      portDate: String(data.get("portDate") ?? "").trim(),
      hours: String(data.get("hours") ?? "").trim(),
      excursion: String(data.get("excursion") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    });
    window.location.href = href;
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
        <p className="text-sm font-semibold text-blue-950">Primary contact</p>
        <p className="mt-1 text-sm text-blue-900/80">
          Email us to ask about St. John&apos;s, Newfoundland and Labrador
          port-day options — Signal Hill, Cape Spear, puffins, whales, and city
          walks. This site does not take online bookings or confirmations.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("St. John's shore excursion enquiry")}`}
          className="mt-3 inline-flex rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
        >
          Email {CONTACT_EMAIL}
        </a>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Optional details for your email
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Fill this in and choose &ldquo;Open email to enquire&rdquo; — your mail
          app opens with a draft to {CONTACT_EMAIL}. Nothing is sent until you send
          the email yourself.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Full name</span>
            <input
              required
              type="text"
              name="name"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              required
              type="email"
              name="email"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Cruise line / ship
            </span>
            <input
              type="text"
              name="ship"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              placeholder="e.g. Holland America / Zuiderdam"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Port date in St. John&apos;s, NL
            </span>
            <input
              type="date"
              name="portDate"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Hours in port</span>
            <select
              name="hours"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            >
              <option value="">Select…</option>
              <option value="4">About 4 hours</option>
              <option value="5">About 5 hours</option>
              <option value="6">About 6 hours</option>
              <option value="8">8+ hours</option>
              <option value="10">10+ hours</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Excursion interest
            </span>
            <select
              name="excursion"
              defaultValue={preselected}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            >
              <option value="">Not sure yet</option>
              {excursions.map((e) => (
                <option key={e.slug} value={e.slug}>
                  {e.shortTitle}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Message</span>
          <textarea
            name="message"
            rows={4}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="Group size, mobility needs, all-aboard time, interests (Signal Hill, Cape Spear, puffins, whales)…"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-blue-800 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900"
        >
          Open email to enquire
        </button>
      </form>
    </div>
  );
}

export function EnquiryForm() {
  return (
    <Suspense
      fallback={
        <div className="space-y-4">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("St. John's shore excursion enquiry")}`}
            className="inline-flex rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
          >
            Email {CONTACT_EMAIL}
          </a>
          <p className="text-slate-600">Loading enquiry details…</p>
        </div>
      }
    >
      <EnquiryFormInner />
    </Suspense>
  );
}
