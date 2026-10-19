export type Product = {
  slug: string;
  name: string;
  latin: string;
  price: number;
  size: string;
  category: "Car Care" | "Garage Tools" | "Home & Garden" | "Bundles";
  img: string;
  badge?: string;
  short: string;
  description: string;
  notes: string[];
  ritual: string;
};

export const categories = [
  "All",
  "Car Care",
  "Garage Tools",
  "Home & Garden",
  "Bundles",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    slug: "stormforce-pressure-washer",
    name: "StormForce Pressure Washer",
    latin: "2200W · 150 bar · AU plug",
    price: 149,
    size: "1 unit",
    category: "Garage Tools",
    img: "https://images.pexels.com/photos/6873178/pexels-photo-6873178.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Best seller",
    short: "Serious cleaning power for driveways, cars and workshop days.",
    description:
      "A compact high-pressure system built for weekend warriors. The StormForce delivers reliable cleaning power without taking over your garage, with Australian-ready power and a generous hose reach.",
    notes: [
      "150 bar working pressure",
      "8 m high-pressure hose",
      "Australian plug and warranty",
    ],
    ritual:
      "Start on the widest spray pattern, work from the top down and keep the nozzle moving across paintwork.",
  },
  {
    slug: "interior-detailing-kit",
    name: "Interior Detailing Kit",
    latin: "12-piece · cabin refresh",
    price: 79,
    size: "12 pieces",
    category: "Car Care",
    img: "https://images.pexels.com/photos/11139243/pexels-photo-11139243.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Workshop pick",
    short:
      "The brushes, towels and tools for a cabin that feels factory fresh.",
    description:
      "A practical 12-piece set for dashboards, vents, leather, screens and the places dust likes to hide. Everything stores neatly in the included carry case.",
    notes: [
      "Soft-detail brushes",
      "Microfibre glass and trim towels",
      "Vent and crevice tools",
    ],
    ritual:
      "Vacuum first, agitate with a soft brush, then wipe in straight passes with a clean microfibre towel.",
  },
  {
    slug: "foam-cannon-starter-pack",
    name: "Foam Cannon Starter Pack",
    latin: "Snow foam · pH neutral",
    price: 89,
    size: "1.5 L kit",
    category: "Car Care",
    img: "https://images.pexels.com/photos/20051469/pexels-photo-20051469.jpeg?auto=compress&cs=tinysrgb&w=1200",
    short:
      "Thick, clingy foam that lifts road film before you touch the paint.",
    description:
      "The low-contact first step for a safer wash. Pair the adjustable cannon with pH-neutral foam to loosen grit and road grime before your mitt reaches the surface.",
    notes: [
      "Adjustable foam dial",
      "1.5 L bottle",
      "Works with StormForce fittings",
    ],
    ritual:
      "Rinse loose dirt, cover the vehicle from bottom to top and allow three to five minutes of dwell time.",
  },
  {
    slug: "garage-organisation-rail",
    name: "Garage Organisation Rail",
    latin: "Powder-coated steel · modular",
    price: 129,
    size: "120 cm rail",
    category: "Garage Tools",
    img: "https://images.pexels.com/photos/20042048/pexels-photo-20042048.jpeg?auto=compress&cs=tinysrgb&w=1200",
    short: "Put every hose, brush and bottle back in its place.",
    description:
      "A modular wall rail for the equipment you actually use. Heavy-duty hooks keep the floor clear and make the next project faster to start.",
    notes: [
      "120 cm powder-coated rail",
      "Six repositionable hooks",
      "Wall fixings included",
    ],
    ritual:
      "Mount into a solid surface, keep heavy tools low and leave a clear zone for safe movement around the vehicle.",
  },
  {
    slug: "backyard-utility-bundle",
    name: "Backyard Utility Bundle",
    latin: "Outdoor living · weekend ready",
    price: 249,
    size: "3-piece bundle",
    category: "Bundles",
    img: "https://images.pexels.com/photos/32024878/pexels-photo-32024878.jpeg?auto=compress&cs=tinysrgb&w=1200",
    badge: "Save $40",
    short: "A practical trio for patios, outdoor furniture and garden jobs.",
    description:
      "Bring the same problem-solving approach outside the garage. This bundle pairs a compact blower, hose reel and adjustable garden sprayer for the jobs that keep the backyard moving.",
    notes: [
      "Compact cordless blower",
      "15 m retractable hose reel",
      "Multi-pattern garden sprayer",
    ],
    ritual:
      "Clear the area, choose the right attachment and store every tool under cover when the job is done.",
  },
  {
    slug: "modular-outdoor-rack",
    name: "Modular Outdoor Rack",
    latin: "Weather-ready · 90 cm",
    price: 159,
    size: "90 cm rack",
    category: "Home & Garden",
    img: "https://images.pexels.com/photos/7546775/pexels-photo-7546775.jpeg?auto=compress&cs=tinysrgb&w=1200",
    short: "A clean home for garden gear, firewood and outdoor essentials.",
    description:
      "Keep the shed, patio or side path organised with a weather-ready modular rack. The open frame makes daily access easy while keeping tools off the ground.",
    notes: [
      "Rust-resistant coated steel",
      "Adjustable shelf spacing",
      "Flat-pack assembly",
    ],
    ritual:
      "Place on level ground, load heavier items low and keep a small clear zone around the rack for access.",
  },
];

export function formatAud(amount: number) {
  return `$${amount.toFixed(2)} AUD`;
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
