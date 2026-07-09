import { HERO_IMAGES } from "./site";

export type FitnessLevel = "Easy" | "Moderate" | "Difficult";
export type ReturnConfidence = "High" | "Moderate" | "Tight";

export type CruiseSnapshotFields = {
  timeInPort?: string;
  bestFor?: string;
  activityLevel?: string;
  familyFriendly?: string;
  returnToShip?: string;
  popularTypes?: string;
};

export type Excursion = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  summary: string;
  duration: string;
  fitness: FitnessLevel;
  distanceFromTerminal: string;
  transferRequired: boolean;
  transferNote: string;
  bestFor: string[];
  returnConfidence: ReturnConfidence;
  returnNote: string;
  weatherConsiderations: string;
  cruiseSnapshot: string;
  snapshotFields: CruiseSnapshotFields;
  description: string[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  heroImage?: string;
  heroImageAlt?: string;
};

export const excursions: Excursion[] = [
  {
    slug: "signal-hill-shore-excursion",
    path: "/signal-hill-shore-excursion",
    title: "Signal Hill Shore Excursion — St. John's, Newfoundland and Labrador",
    shortTitle: "Signal Hill",
    summary:
      "Cabot Tower, panoramic harbour views, and the historic site where Marconi received the first transatlantic wireless signal — St. John's most iconic lookout.",
    duration: "2.5–3.5 hours (typical tour)",
    fitness: "Moderate",
    distanceFromTerminal:
      "Roughly 2.5 km from the cruise terminal to Signal Hill National Historic Site; 10–15 minutes by taxi or included on city tours.",
    transferRequired: true,
    transferNote:
      "Walking from the port involves steep hills. Most organised tours include coach or van transfer to the summit area with guided walking on the site.",
    bestFor: [
      "First-time visitors to St. John's, Newfoundland and Labrador",
      "History enthusiasts and photographers",
      "Passengers with at least five hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "Signal Hill tours are among the most reliable St. John's shore excursions — short transfer, predictable duration, and operators schedule around cruise all-aboard times.",
    weatherConsiderations:
      "Signal Hill is exposed to Atlantic wind and fog. Dress in layers; bring a windproof jacket even on mild summer days. Fog can lift quickly but may limit harbour views.",
    cruiseSnapshot:
      "Signal Hill defines the St. John's skyline from the harbour. A focused tour delivers Cabot Tower, military history, and the best elevated views of Jellybean Row and the Narrows without committing to a full-day rural drive.",
    snapshotFields: {
      timeInPort: "5–8 hours works well",
      bestFor: "Views, history, photography",
      activityLevel: "Moderate — slopes and stairs near Cabot Tower",
      familyFriendly: "Good — supervise children on cliff paths",
      returnToShip: "High confidence on standard tours",
      popularTypes: "City combo tours, dedicated Signal Hill visits",
    },
    description: [
      "Signal Hill rises above the entrance to St. John's harbour — a natural fortress that shaped Newfoundland's capital for centuries. Cruise passengers who climb or drive to the summit see one of Canada's most dramatic urban panoramas: colourful row houses spilling down the hills, fishing boats in the Narrows, and the open Atlantic beyond.",
      "Cabot Tower crowns the hill, built to mark Queen Victoria's Diamond Jubilee and linked to Guguelimo Marconi's 1901 wireless reception. Guides explain military fortifications, the 1762 battle, and how this headland protected one of North America's oldest harbours.",
      "Most shore excursions combine Signal Hill with a drive through downtown or a brief stop at the Battery neighbourhood below. Self-guided visitors can taxi to the top and walk the boardwalks, but allow time for the steep return if walking back to the cruise terminal.",
    ],
    highlights: [
      "Cabot Tower and National Historic Site interpretation",
      "Panoramic views over St. John's harbour and Jellybean Row",
      "Marconi wireless history and military heritage",
      "Strong photography in clear or moody fog conditions",
    ],
    faqs: [
      {
        question: "How much walking is required at Signal Hill?",
        answer:
          "From the upper parking area, expect 20–40 minutes of walking on paths and stairs to reach Cabot Tower viewpoints. Full walks from the cruise terminal uphill are strenuous and rarely recommended on port days.",
      },
      {
        question: "Is Signal Hill suitable for a short port call?",
        answer:
          "With at least five hours ashore, yes. Tours typically need 2.5–3.5 hours including transfer. Four-hour calls are tight unless your ship docks very early.",
      },
      {
        question: "What if fog covers the view?",
        answer:
          "Fog is common in St. John's, Newfoundland and Labrador. Historic interpretation still holds value, and fog sometimes lifts within minutes. Operators cannot guarantee clear views.",
      },
    ],
    relatedSlugs: [
      "city-highlights-tour-st-johns",
      "cape-spear-shore-excursion",
      "scenic-newfoundland-tour",
    ],
    heroImage: HERO_IMAGES.signalHill.src,
    heroImageAlt: HERO_IMAGES.signalHill.alt,
  },
  {
    slug: "cape-spear-shore-excursion",
    path: "/cape-spear-shore-excursion",
    title: "Cape Spear Shore Excursion — Easternmost Point of North America",
    shortTitle: "Cape Spear",
    summary:
      "Visit the easternmost point of continental North America — historic lighthouses, cliff walks, and Atlantic drama a short drive from St. John's cruise port.",
    duration: "3–4 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "About 12 km southeast of the cruise terminal; roughly 15–20 minutes by road.",
    transferRequired: true,
    transferNote:
      "Coach, van, or taxi required. Organised tours often combine Cape Spear with Signal Hill or a scenic coastal loop.",
    bestFor: [
      "Geography and lighthouse enthusiasts",
      "Photographers seeking dramatic coastline",
      "Passengers with five or more hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "Cape Spear is close enough to the city for reliable half-day timing. Build 45–60 minutes before all-aboard as with any St. John's shore excursion.",
    weatherConsiderations:
      "Fully exposed headland — expect strong wind, sea spray, and rapid weather changes. Sturdy footwear recommended for wet boardwalks.",
    cruiseSnapshot:
      "Cape Spear offers something few cruise ports can match: standing at the eastern edge of North America. Transfer time is modest compared with rural Newfoundland full-day trips, making it a strong add to Signal Hill or city itineraries.",
    snapshotFields: {
      timeInPort: "5–7 hours recommended",
      bestFor: "Scenery, lighthouses, geography",
      activityLevel: "Easy — short cliff-path walks",
      familyFriendly: "Good — hold children near cliff edges",
      returnToShip: "High on organised tours",
      popularTypes: "Coastal tours, Signal Hill combos",
    },
    description: [
      "Cape Spear National Historic Site preserves the oldest surviving lighthouse in Newfoundland — a squat stone tower from 1836 — alongside a 1950s replacement still guiding ships through North Atlantic storms. Interpretive trails explain how families kept the light burning through winters that isolated them from St. John's.",
      "For cruise passengers, Cape Spear delivers open-ocean drama without the highway commitment of iceberg-chasing tours up the coast. Whales are occasionally spotted offshore in season, but never guaranteed from the cliffs.",
      "Most tours allow 45–75 minutes on site. Combining Cape Spear with Signal Hill fills a balanced half-day; attempting both plus a rural iceberg run on a six-hour call is usually unrealistic.",
    ],
    highlights: [
      "Easternmost point of continental North America",
      "Historic and active lighthouses",
      "Cliff boardwalks and WWII gun battery remnants",
      "Reliable half-day timing from St. John's cruise port",
    ],
    faqs: [
      {
        question: "How far is Cape Spear from the St. John's cruise terminal?",
        answer:
          "About 12 km — typically 15–20 minutes by road depending on traffic. It is not walkable on a port day.",
      },
      {
        question: "Can I combine Cape Spear and Signal Hill in one tour?",
        answer:
          "Yes — this is a popular combination for six-to-eight-hour port calls in St. John's, Newfoundland and Labrador.",
      },
      {
        question: "Will I see icebergs from Cape Spear?",
        answer:
          "Occasionally in late spring when bergs drift near the Avalon Peninsula, but Cape Spear is not a dedicated iceberg-viewing site. See our iceberg guide for seasonal expectations.",
      },
    ],
    relatedSlugs: [
      "signal-hill-shore-excursion",
      "scenic-newfoundland-tour",
      "whale-watching-cruise-st-johns",
    ],
    heroImage: HERO_IMAGES.capeSpear.src,
    heroImageAlt: HERO_IMAGES.capeSpear.alt,
  },
  {
    slug: "whale-watching-cruise-st-johns",
    path: "/whale-watching-cruise-st-johns",
    title: "Whale Watching Cruise from St. John's, Newfoundland and Labrador",
    shortTitle: "Whale Watching",
    summary:
      "Boat-based whale watching from the Avalon Peninsula — humpbacks, minkes, and occasional fin whales in season, with honest guidance on sighting likelihood.",
    duration: "3–4 hours (typical boat tour)",
    fitness: "Easy",
    distanceFromTerminal:
      "Boat operators depart from St. John's harbour or nearby Bay Bulls — 20–40 minutes by transfer depending on operator.",
    transferRequired: true,
    transferNote:
      "Tours include pier-to-boat transfers or meet points with coach pickup from the cruise terminal area.",
    bestFor: [
      "Wildlife enthusiasts visiting between May and September",
      "Passengers comfortable on open-water boats",
      "Those who accept that sightings are never guaranteed",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "Weather cancellations happen. Choose operators who monitor cruise schedules and build buffer before all-aboard. Morning departures often suit tighter port windows.",
    weatherConsiderations:
      "North Atlantic swells and fog can cancel or shorten trips. Bring warm layers, rain gear, and motion-sickness preparation if sensitive.",
    cruiseSnapshot:
      "Newfoundland sits on a major whale migration route, but cruise timing and weather determine success. We prioritise honest seasonal advice over promises — enquire with your exact port date and hours ashore.",
    snapshotFields: {
      timeInPort: "6+ hours recommended",
      bestFor: "Wildlife, photography, open boat experience",
      activityLevel: "Easy — some climbing on boat decks",
      familyFriendly: "Good — check minimum ages with operator",
      returnToShip: "Moderate — weather dependent",
      popularTypes: "Dedicated whale boats, combo wildlife tours",
    },
    description: [
      "Humpback whales feed along the Avalon coast from late spring through early autumn, with peak activity often in July and August. Minke whales appear earlier; fin whales are less common but possible offshore. No operator can guarantee a sighting on any single departure.",
      "Boat tours typically last two to three hours on the water plus transfer time. Bay Bulls and Witless Bay areas are common departure zones — puffin colonies overlap, and some products combine both species in one wildlife cruise.",
      "Cruise passengers should confirm cancellation policies, seasickness suitability, and explicit return-to-ship commitments before booking independent whale watching in St. John's, Newfoundland and Labrador.",
    ],
    highlights: [
      "Seasonal humpback and minke whale opportunities",
      "Open North Atlantic setting near St. John's",
      "Potential combo with puffin colonies (seasonal)",
      "Clear guidance on realistic expectations",
    ],
    faqs: [
      {
        question: "What are the best months for whale watching in St. John's?",
        answer:
          "June through August offer the strongest humpback activity for most cruise seasons. May and September can still produce sightings but with lower consistency.",
      },
      {
        question: "Are whale sightings guaranteed?",
        answer:
          "No. Wildlife is unpredictable. Reputable operators report historical sighting rates but cannot promise whales on your specific sailing.",
      },
      {
        question: "Can whale watching fit a five-hour port call?",
        answer:
          "It is tight. Most passengers need six or more hours ashore once transfers, boarding time, and a 45–60 minute return buffer are included.",
      },
    ],
    relatedSlugs: [
      "puffin-tours-st-johns",
      "cape-spear-shore-excursion",
      "scenic-newfoundland-tour",
    ],
    heroImage: HERO_IMAGES.whale.src,
    heroImageAlt: HERO_IMAGES.whale.alt,
  },
  {
    slug: "puffin-tours-st-johns",
    path: "/puffin-tours-st-johns",
    title: "Puffin Watching Tour from St. John's, Newfoundland and Labrador",
    shortTitle: "Puffin Tour",
    summary:
      "Boat tours to Atlantic puffin colonies near the Avalon Peninsula — seasonal nesting access with honest timing advice for cruise passengers.",
    duration: "3.5–5 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Witless Bay Ecological Reserve is roughly 30–40 km south; about 45–60 minutes by road to boat operators.",
    transferRequired: true,
    transferNote:
      "Full transfer to Bay Bulls or nearby harbours is standard. Not feasible without an organised tour on a port day.",
    bestFor: [
      "Birdwatchers and wildlife photographers",
      "Passengers visiting mid-May through early September",
      "Those combining puffins with whale watching when seasons overlap",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "Road time plus boat duration makes this a half-day commitment. Works best with six or more hours ashore and favourable sea conditions.",
    weatherConsiderations:
      "Fog and swell affect boat access. Puffins are present on colonies in season but may be less visible in heavy fog or high wind.",
    cruiseSnapshot:
      "Atlantic puffins nest in Newfoundland from spring through summer — Witless Bay hosts one of the largest colonies in eastern North America. Sightings from land in St. John's city are rare; boat tours are the practical cruise-passenger option.",
    snapshotFields: {
      timeInPort: "6–8 hours recommended",
      bestFor: "Birdlife, photography, wildlife boats",
      activityLevel: "Easy",
      familyFriendly: "Excellent for nature-loving families",
      returnToShip: "Moderate — allow weather buffer",
      popularTypes: "Puffin and whale combo boats",
    },
    description: [
      "Atlantic puffins return to Newfoundland nesting sites from roughly May through early September, with peak colony activity in June and July. Witless Bay Ecological Reserve, south of St. John's, supports hundreds of thousands of seabirds including puffins, murres, and kittiwakes.",
      "Boat operators run tours that circle the islands — passengers see puffins on water and cliff faces, often at close range when conditions cooperate. Combining puffin and whale watching is common when both seasons overlap.",
      "Puffins are not guaranteed to perform for cameras every trip, and independent travellers who miss the boat queue risk their port day. Enquire with your ship schedule before committing.",
    ],
    highlights: [
      "Witless Bay puffin colonies (seasonal)",
      "Potential whale sightings on combo tours",
      "Expert seabird interpretation",
      "One of Newfoundland's signature wildlife experiences",
    ],
    faqs: [
      {
        question: "When can you see puffins near St. John's?",
        answer:
          "Typically mid-May through early September, with peak activity June–July. Outside nesting season, puffin tours do not operate.",
      },
      {
        question: "Can I see puffins without a boat tour?",
        answer:
          "Occasional puffins appear near Cape Spear or coastal trails, but reliable close views require boat access to colony islands.",
      },
      {
        question: "Is this tour suitable for short port days?",
        answer:
          "Generally no — allow for 45–60 minutes driving each way plus two to three hours on the water. See our puffin season guide for planning.",
      },
    ],
    relatedSlugs: [
      "whale-watching-cruise-st-johns",
      "iceberg-tour-st-johns",
      "scenic-newfoundland-tour",
    ],
    heroImage: HERO_IMAGES.puffin.src,
    heroImageAlt: HERO_IMAGES.puffin.alt,
  },
  {
    slug: "city-highlights-tour-st-johns",
    path: "/city-highlights-tour-st-johns",
    title: "St. John's City Highlights Shore Excursion",
    shortTitle: "City Highlights",
    summary:
      "Water Street, Jellybean Row, the harbour, and downtown heritage — the essential introduction to St. John's, Newfoundland and Labrador from the cruise pier.",
    duration: "2.5–4 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Cruise ships dock at the St. John's harbour terminal — downtown and Water Street are often 5–15 minutes on foot.",
    transferRequired: false,
    transferNote:
      "Walking tours start at or near the terminal. Coach highlights tours cover hills and Signal Hill exterior viewpoints.",
    bestFor: [
      "First-time visitors wanting downtown orientation",
      "Shorter port calls and mobility-conscious guests",
      "Rainy-day plans mixing indoor stops with harbour walks",
    ],
    returnConfidence: "High",
    returnNote:
      "City-focused tours are the most flexible St. John's shore excursions for timing. Self-guided waterfront walks are easy to control against all-aboard.",
    weatherConsiderations:
      "Downtown St. John's is hilly — wet cobblestones need sensible footwear. Fog adds atmosphere on harbour walks.",
    cruiseSnapshot:
      "St. John's is one of Canada's oldest cities and among the most walkable cruise ports in Atlantic Canada — when your ship docks centrally, a city highlights tour delivers culture without long highway transfers.",
    snapshotFields: {
      timeInPort: "4+ hours for core highlights",
      bestFor: "History, architecture, harbour walks",
      activityLevel: "Easy to moderate on hills",
      familyFriendly: "Excellent",
      returnToShip: "Very high near harbour berths",
      popularTypes: "Walking tours, coach highlights, hop-on hop-off",
    },
    description: [
      "A city highlights tour threads together the stories that define Newfoundland's capital: Basque and English fishing history, confederation-era politics, and a modern cultural scene anchored on George Street and the harbourfront.",
      "Jellybean Row's brightly painted houses — on streets like Duckworth and Gower — provide the postcard views cruise passengers expect. Guides explain how families chose distinct colours so fishermen could spot home through fog.",
      "Tours may include The Rooms museum exterior, Cathedral of St. John the Baptist, or a drive past Signal Hill if time allows. Four-hour port calls suit a focused waterfront and Jellybean Row walk; six hours opens Signal Hill or Quidi Vidi add-ons.",
    ],
    highlights: [
      "Jellybean Row and historic downtown streets",
      "Water Street — one of North America's oldest commercial routes",
      "Harbour views and local culture",
      "Minimal transfer time from cruise berths",
    ],
    faqs: [
      {
        question: "Can I explore downtown St. John's without a tour?",
        answer:
          "Yes — many cruise berths place you within walking distance of Water Street and the harbour. Pick up a map, set a firm return time, and see our walking-from-port guide.",
      },
      {
        question: "How hilly is downtown St. John's?",
        answer:
          "Noticeably hilly. Main shopping streets connect via slopes and stairs. Easy-grade tours route around the steepest climbs.",
      },
      {
        question: "Does this include Signal Hill?",
        answer:
          "Some city tours add Signal Hill; others stay downtown. Confirm the itinerary when you enquire.",
      },
    ],
    relatedSlugs: [
      "signal-hill-shore-excursion",
      "quidi-vidi-village-tour",
      "scenic-newfoundland-tour",
    ],
    heroImage: HERO_IMAGES.jellybeanRow.src,
    heroImageAlt: HERO_IMAGES.jellybeanRow.alt,
  },
  {
    slug: "scenic-newfoundland-tour",
    path: "/scenic-newfoundland-tour",
    title: "Scenic Newfoundland Coast Tour from St. John's",
    shortTitle: "Scenic Coast",
    summary:
      "Avalon Peninsula drives, coastal villages, lookouts, and Newfoundland scenery — a flexible scenic day without overpromising wildlife or icebergs.",
    duration: "4–6 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Routes vary; coastal lookouts typically 15–60 km from St. John's cruise terminal.",
    transferRequired: true,
    transferNote:
      "Coach or small-group van essential. Itineraries adapt to weather, light, and season.",
    bestFor: [
      "Scenery lovers and photographers",
      "Passengers who have already toured downtown",
      "Six-to-eight-hour port calls wanting rural Newfoundland flavour",
    ],
    returnConfidence: "High",
    returnNote:
      "Scenic loops that stay on the Avalon Peninsula generally maintain reliable return timing compared with long-distance iceberg chases.",
    weatherConsiderations:
      "Coastal fog, wind, and rain arrive quickly. Operators may reroute to sheltered harbours or interior lookouts.",
    cruiseSnapshot:
      "Newfoundland's coastline is the reason many Canada & New England itineraries include St. John's. A scenic tour samples fishing villages, headlands, and open Atlantic views within sensible driving range of the cruise port.",
    snapshotFields: {
      timeInPort: "6–8 hours ideal",
      bestFor: "Coastal drives, photography, culture",
      activityLevel: "Easy — optional short walks at stops",
      familyFriendly: "Good",
      returnToShip: "High on peninsula loops",
      popularTypes: "Small-group vans, private drivers",
    },
    description: [
      "The Avalon Peninsula wraps St. John's in a necklace of coves, resettled communities, and windswept headlands. Scenic tours might trace the Irish Loop, visit Petty Harbour or Bay Bulls, or combine Cape Spear with coastal villages depending on season and group interest.",
      "Unlike dedicated wildlife boats, scenic drives treat whale or iceberg sightings as bonuses — never guarantees. Honest guides explain what is realistic for your visit month before leaving the terminal.",
      "Photography stops at lookouts, lighthouses, and colourful harbours fill memory cards without the fitness demands of long backcountry hikes.",
    ],
    highlights: [
      "Avalon Peninsula coastal lookouts",
      "Fishing villages and harbour scenes",
      "Flexible routing for weather and season",
      "Balanced timing for standard port days",
    ],
    faqs: [
      {
        question: "Will a scenic tour include icebergs?",
        answer:
          "Only in seasonal months and only if bergs are present on the accessible coast that day. Dedicated iceberg tours focus specifically on that goal.",
      },
      {
        question: "How does this differ from the city highlights tour?",
        answer:
          "City tours focus on downtown St. John's. Scenic tours spend more time on rural coastal roads and villages outside the urban core.",
      },
      {
        question: "Is motion sickness a concern?",
        answer:
          "Coach travel on winding coastal roads affects some guests. Boat segments are not usually included unless booked as a combo.",
      },
    ],
    relatedSlugs: [
      "cape-spear-shore-excursion",
      "signal-hill-shore-excursion",
      "quidi-vidi-village-tour",
    ],
    heroImage: HERO_IMAGES.capeSpear.src,
    heroImageAlt: HERO_IMAGES.capeSpear.alt,
  },
  {
    slug: "quidi-vidi-village-tour",
    path: "/quidi-vidi-village-tour",
    title: "Quidi Vidi Village Shore Excursion — St. John's, Newfoundland and Labrador",
    shortTitle: "Quidi Vidi",
    summary:
      "A historic fishing village inside St. John's — Quidi Vidi Lake, artisan studios, brewery, and harbour charm minutes from the cruise terminal.",
    duration: "2–3 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "About 3 km northeast of the cruise terminal; 10 minutes by taxi or included on city tours.",
    transferRequired: true,
    transferNote:
      "Walking is possible for fit guests (roughly 35–45 minutes from port via hilly streets). Most tours drive the short distance.",
    bestFor: [
      "Culture and craft beer enthusiasts",
      "Photographers seeking village harbour scenes",
      "Passengers wanting a compact add-on to downtown",
    ],
    returnConfidence: "High",
    returnNote:
      "Short distance from the cruise port makes Quidi Vidi one of the easiest St. John's excursions to schedule with confidence.",
    weatherConsiderations:
      "Harbour-side paths can be windy. Quidi Vidi Brewery and local studios offer indoor time on wet days.",
    cruiseSnapshot:
      "Quidi Vidi feels like a step back in time — a working harbour tucked beside a glacial lake — yet sits within the city limits of St. John's, Newfoundland and Labrador. Ideal for combining with Jellybean Row or Signal Hill on the same port day.",
    snapshotFields: {
      timeInPort: "4+ hours",
      bestFor: "Village charm, brewery, crafts",
      activityLevel: "Easy",
      familyFriendly: "Good — brewery areas age-restricted",
      returnToShip: "High",
      popularTypes: "Walking tours, city combo tours",
    },
    description: [
      "Quidi Vidi Village preserves a tight knot of stages, sheds, and fishing boats at the mouth of Quidi Vidi Lake where it meets the Atlantic. Artists, brewers, and boat builders keep the harbour active beyond the tourist snapshot.",
      "Quidi Vidi Brewing Company draws visitors for local ales with harbour views — a popular rainy-day anchor. Short walks around the Gut pass colourful stages where cod drying once dominated the economy.",
      "Cruise tours often pair Quidi Vidi with downtown Jellybean Row or a Signal Hill photo stop. Independent guests can taxi out, explore for 90 minutes, and return without the commitment of a rural full-day drive.",
    ],
    highlights: [
      "Quidi Vidi harbour and lake setting",
      "Local brewery and artisan studios",
      "Compact timing from St. John's cruise port",
      "Distinct village atmosphere within the city",
    ],
    faqs: [
      {
        question: "Can I walk to Quidi Vidi from the cruise ship?",
        answer:
          "Fit walkers can — expect hills and 35–45 minutes each way. Many guests prefer a short taxi or a tour that includes transport.",
      },
      {
        question: "How long should I spend in Quidi Vidi?",
        answer:
          "90–120 minutes covers the harbour walk, a brewery stop, and photography without rushing.",
      },
      {
        question: "Is Quidi Vidi the same as downtown Jellybean Row?",
        answer:
          "No — Quidi Vidi is a separate fishing village northeast of downtown. Both are highlights of St. John's, Newfoundland and Labrador.",
      },
    ],
    relatedSlugs: [
      "city-highlights-tour-st-johns",
      "signal-hill-shore-excursion",
      "scenic-newfoundland-tour",
    ],
    heroImage: HERO_IMAGES.quidiVidi.src,
    heroImageAlt: HERO_IMAGES.quidiVidi.alt,
  },
  {
    slug: "iceberg-tour-st-johns",
    path: "/iceberg-tour-st-johns",
    title: "Iceberg Tour from St. John's, Newfoundland and Labrador (Seasonal)",
    shortTitle: "Iceberg Tour",
    summary:
      "Seasonal iceberg viewing from the Avalon coast — honest guidance on timing, likelihood, and when cruise passengers should or should not book.",
    duration: "4–6 hours (when operating)",
    fitness: "Easy",
    distanceFromTerminal:
      "Viewing areas vary — often 1–3 hours driving along the coast when bergs are present.",
    transferRequired: true,
    transferNote:
      "Dedicated iceberg tours use coach and sometimes boat. Products run only when bergs are accessible within safe day-trip range.",
    bestFor: [
      "Passengers in St. John's between late April and early June",
      "Flexible travellers who accept that bergs may not appear",
      "Photography enthusiasts in peak iceberg weeks",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "Iceberg chasing adds driving uncertainty. Only book when your port call allows generous buffer and operators confirm berg locations same-day.",
    weatherConsiderations:
      "Fog hides icebergs as easily as it hides lighthouses. Cold wind on coastal lookouts — full winter-style layers even in May.",
    cruiseSnapshot:
      "Newfoundland's iceberg season draws global attention, but bergs are never on demand. St. John's is a gateway — not a guarantee. We explain months, distances, and realistic expectations before you enquire.",
    snapshotFields: {
      timeInPort: "7+ hours recommended",
      bestFor: "Seasonal iceberg photography",
      activityLevel: "Easy — mostly driving and lookout stops",
      familyFriendly: "Good when seas and weather cooperate",
      returnToShip: "Moderate — depends on berg location",
      popularTypes: "Coastal drives, boat add-ons when available",
    },
    description: [
      "Icebergs calve from Greenland glaciers and drift south along the Newfoundland coast, typically visible from shore or tour boats between late April and early June — with peak weeks varying year to year. Some seasons deliver spectacular bergs within day-trip range of St. John's; others keep ice far north.",
      "Iceberg tours monitor daily berg reports and may drive significant distances — or cancel if nothing is reachable within your port window. This is fundamentally different from fixed-itinerary city tours.",
      "Cruise passengers arriving in July, August, or September should not expect iceberg products to operate. Whale and puffin tours replace ice as the seasonal wildlife focus.",
    ],
    highlights: [
      "Seasonal iceberg viewing when conditions align",
      "Expert interpretation of Iceberg Alley dynamics",
      "Honest assessment before you commit port time",
      "Photography opportunities when bergs are present",
    ],
    faqs: [
      {
        question: "Are icebergs guaranteed on an iceberg tour?",
        answer:
          "No. Bergs must drift into range and be visible through weather. Operators may travel long distances or refund if nothing is accessible.",
      },
      {
        question: "What are the best months for icebergs near St. John's?",
        answer:
          "Late April through early June offer the best chances, with May often strongest. Timing varies every year.",
      },
      {
        question: "Can I see icebergs from downtown St. John's?",
        answer:
          "Occasionally bergs appear in the harbour or off Signal Hill in strong seasons, but most reliable viewing requires a dedicated tour or lucky timing.",
      },
    ],
    relatedSlugs: [
      "scenic-newfoundland-tour",
      "whale-watching-cruise-st-johns",
      "cape-spear-shore-excursion",
    ],
    heroImage: HERO_IMAGES.iceberg.src,
    heroImageAlt: HERO_IMAGES.iceberg.alt,
  },
];

export function getExcursion(slug: string): Excursion | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getExcursionByPath(path: string): Excursion | undefined {
  return excursions.find((e) => e.path === path);
}

export function getRelatedExcursions(slug: string): Excursion[] {
  const excursion = getExcursion(slug);
  if (!excursion) return [];
  return excursion.relatedSlugs
    .map((s) => getExcursion(s))
    .filter((e): e is Excursion => e !== undefined);
}

export const staticGuidePaths = [
  "/st-johns-cruise-port-guide",
  "/best-st-johns-shore-excursions",
  "/things-to-do-in-st-johns-from-a-cruise-ship",
  "/one-day-in-st-johns-from-a-cruise-ship",
  "/newfoundland-cruise-guide",
  "/st-johns-cruise-ship-schedule",
  "/best-time-to-visit-st-johns",
  "/when-can-you-see-puffins-in-newfoundland",
  "/when-can-you-see-icebergs-in-newfoundland",
  "/what-to-wear-in-st-johns-newfoundland",
  "/st-johns-newfoundland-vs-saint-john-new-brunswick",
  "/walking-st-johns-from-cruise-port",
  "/signal-hill-guide",
  "/cape-spear-guide",
  "/jellybean-row-guide",
  "/quidi-vidi-village-guide",
  "/icebergs-near-st-johns",
  "/whale-watching-st-johns",
  "/newfoundland-culture-guide",
  "/faq",
  "/cruise-planner",
  "/enquire",
  "/excursions",
];
