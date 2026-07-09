export type NavItem = { label: string; href: string };

export const PORT_GUIDE_PATH = "/st-johns-cruise-port-guide";

export const mainNav: NavItem[] = [
  { label: "Excursions", href: "/excursions" },
  { label: "Port Guide", href: PORT_GUIDE_PATH },
  { label: "Cruise Planner", href: "/cruise-planner" },
  { label: "FAQ", href: "/faq" },
  { label: "Enquire", href: "/enquire" },
];

export const guideLinks: NavItem[] = [
  { label: "St. John's Cruise Port Guide", href: PORT_GUIDE_PATH },
  { label: "Best St. John's Shore Excursions", href: "/best-st-johns-shore-excursions" },
  {
    label: "Things To Do From A Cruise Ship",
    href: "/things-to-do-in-st-johns-from-a-cruise-ship",
  },
  { label: "One Day In St. John's", href: "/one-day-in-st-johns-from-a-cruise-ship" },
  { label: "Newfoundland Cruise Guide", href: "/newfoundland-cruise-guide" },
  { label: "Best Time To Visit", href: "/best-time-to-visit-st-johns" },
  { label: "What To Wear", href: "/what-to-wear-in-st-johns-newfoundland" },
  { label: "Walking From The Port", href: "/walking-st-johns-from-cruise-port" },
  { label: "St. John's vs Saint John NB", href: "/st-johns-newfoundland-vs-saint-john-new-brunswick" },
  { label: "Cruise Ship Schedule", href: "/st-johns-cruise-ship-schedule" },
  { label: "Cruise Planner", href: "/cruise-planner" },
  { label: "FAQ", href: "/faq" },
];

export const destinationGuideLinks: NavItem[] = [
  { label: "Signal Hill Guide", href: "/signal-hill-guide" },
  { label: "Cape Spear Guide", href: "/cape-spear-guide" },
  { label: "Jellybean Row Guide", href: "/jellybean-row-guide" },
  { label: "Quidi Vidi Village", href: "/quidi-vidi-village-guide" },
  { label: "Icebergs Near St. John's", href: "/icebergs-near-st-johns" },
  { label: "Whale Watching", href: "/whale-watching-st-johns" },
  { label: "Puffin Season", href: "/when-can-you-see-puffins-in-newfoundland" },
  { label: "Newfoundland Culture", href: "/newfoundland-culture-guide" },
];

export const excursionLinks: NavItem[] = [
  { label: "Signal Hill Tour", href: "/signal-hill-shore-excursion" },
  { label: "Cape Spear Tour", href: "/cape-spear-shore-excursion" },
  { label: "Whale Watching Cruise", href: "/whale-watching-cruise-st-johns" },
  { label: "Puffin Watching Tour", href: "/puffin-tours-st-johns" },
  { label: "City Highlights Tour", href: "/city-highlights-tour-st-johns" },
  { label: "Scenic Newfoundland Tour", href: "/scenic-newfoundland-tour" },
  { label: "Quidi Vidi Village Tour", href: "/quidi-vidi-village-tour" },
  { label: "Iceberg Tour", href: "/iceberg-tour-st-johns" },
];
