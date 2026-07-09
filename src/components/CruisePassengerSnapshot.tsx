import type { CruiseSnapshotFields } from "@/lib/excursions";

const defaultFields: Required<CruiseSnapshotFields> = {
  timeInPort: "6–9 hours typical St. John's call",
  bestFor: "Signal Hill, Cape Spear, wildlife, downtown",
  activityLevel: "Varies by tour",
  familyFriendly: "Good with age-appropriate choices",
  returnToShip: "Build 45–60 min before all-aboard",
  popularTypes: "City tours, coastal drives, wildlife boats",
};

type CruisePassengerSnapshotProps = {
  fields?: CruiseSnapshotFields;
  intro?: string;
};

export function CruisePassengerSnapshot({
  fields,
  intro,
}: CruisePassengerSnapshotProps) {
  const merged = { ...defaultFields, ...fields };
  const rows: [string, string][] = [
    ["Typical time in port", merged.timeInPort],
    ["Best for", merged.bestFor],
    ["Activity level", merged.activityLevel],
    ["Family friendly", merged.familyFriendly],
    ["Return to ship", merged.returnToShip],
    ["Popular excursion types", merged.popularTypes],
  ];

  return (
    <aside
      className="rounded-xl border border-blue-200 bg-blue-50 p-6"
      aria-label="Cruise passenger snapshot"
    >
      <h2 className="text-lg font-semibold text-blue-950">
        Cruise passenger snapshot
      </h2>
      {intro && (
        <p className="mt-3 text-slate-700 leading-relaxed">{intro}</p>
      )}
      <dl className="cruise-snapshot__grid mt-5">
        {rows.map(([label, value]) => (
          <div key={label} className="cruise-snapshot__item">
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export function CruisePassengerCallout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-blue-200 bg-blue-50 p-6">
      <h2 className="text-lg font-semibold text-blue-950">
        Best for cruise passengers in St. John&apos;s, Newfoundland and Labrador
      </h2>
      <div className="mt-3 text-slate-700 leading-relaxed">
        {children ?? (
          <p>
            St. John&apos;s combines a compact historic harbour with dramatic
            headlands — but wildlife boats and iceberg runs need honest seasonal
            planning. Match your tour to your berth, hours ashore, and all-aboard
            deadline.
          </p>
        )}
      </div>
    </section>
  );
}
