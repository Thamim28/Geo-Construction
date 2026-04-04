"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/Button";
import {
  CheckCircle2,
  ChevronDown,
  Hammer,
  Zap,
  Globe,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA — extracted & condensed from the three PDF offers             */
/* ------------------------------------------------------------------ */

interface SpecCategory {
  title: string;
  items: string[];
}

interface PackageTier {
  title: string;
  price: string;
  offer?: string;
  icon: React.ReactNode;
  color: "black" | "yellow";
  isPopular?: boolean;
  categories: SpecCategory[];
}

const packages: PackageTier[] = [
  {
    title: "Standard",
    price: "1,999",
    icon: <Hammer className="text-brand-yellow" />,
    color: "black",
    categories: [
      {
        title: "Design",
        items: ["2D Floor Plan", "Basic Elevation Plan"],
      },
      {
        title: "Structure",
        items: [
          "Basement: Up to 3 ft",
          "Steel: Kamachi / MCR / Pulkit",
          "Bricks: 9\" exterior, 4.5\" interior",
          "Cement: Dalmia / Coromandel (roof), Zuari / Priya (others)",
          "RCC Mix: M20 | Waterproofing: Dr. Fixit",
          "Ceiling Height: 9.6 ft",
        ],
      },
      {
        title: "Kitchen",
        items: [
          "Wall Tiles 2 ft above slab — up to Rs.40/sqft",
          "SS Sink up to Rs.1,500 | Faucet up to Rs.1,000",
          "Granite Slab 20 mm — up to Rs.100/sqft",
        ],
      },
      {
        title: "Bathroom",
        items: [
          "2 bathrooms per floor",
          "Wall Tiles 7 ft — up to Rs.40/sqft",
          "Sanitary & CP Fittings up to Rs.10,000",
          "EWC + Health Faucet + Wall Mixer + Overhead Shower (1 bathroom)",
          "Indian Closet with 2 taps (1 bathroom)",
          "CPVC/PVC: Polyhose / Finolex",
        ],
      },
      {
        title: "Plumbing",
        items: [
          "Shower with hot & cold wall mixer",
          "Dining: 1 wash basin with tap",
          "Kitchen: SS sink + 1 tap + RO point",
          "Service: 1 tap + washing machine outlet",
        ],
      },
      {
        title: "Doors & Windows",
        items: [
          "Main Door: Steel door with frame",
          "Internal: Skin door + 2nd quality teak frame",
          "Windows: UPVC Sliding 2-Track",
          "MS Grill for all windows",
        ],
      },
      {
        title: "Painting",
        items: [
          "Interior: Asian/JK Putty + Tractor Emulsion",
          "Exterior: Asian Primer + Ace Emulsion",
        ],
      },
      {
        title: "Flooring",
        items: [
          "Living/Dining/Rooms: up to Rs.45/sqft",
          "Balcony/Staircase/Parking: up to Rs.35/sqft (anti-skid)",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires: Orbit / Kundan Hills",
          "Switches: Orbit / Sona",
          "Bedroom: Fan, 2 lights, 5A socket, AC point",
          "Hall: 2 fans, 2 lights, sockets, TV cable point",
          "Kitchen: 2 lights, exhaust, chimney, fridge & mixer sockets",
          "Bathroom: Light, heater socket, hairdryer socket",
          "Service: Light + washing machine socket",
        ],
      },
      {
        title: "Complimentary",
        items: [
          "Overhead Tank: 500L (Titus/Spider)",
          "MS Staircase Railing",
          "Parapet Wall 3 ft",
          "Soak Pit (3 well rings)",
        ],
      },
    ],
  },
  {
    title: "Premium",
    price: "2,299",
    offer: "1 Lakh Modular Kitchen Setup OR 1 Lakh Cash Offer",
    icon: <Zap className="text-brand-black" />,
    color: "yellow",
    isPopular: true,
    categories: [
      {
        title: "Design",
        items: ["2D Floor Plan", "Basic Elevation Plan", "Isometric View Plan"],
      },
      {
        title: "Structure",
        items: [
          "Basement: Up to 3 ft",
          "Steel: GBR / ARS",
          "Bricks: 9\" exterior, 4.5\" interior (Wire-cut)",
          "Cement: Coromandel / UltraTech (roof), Zuari / Priya (others)",
          "RCC Mix: M20 | Waterproofing: Dr. Fixit",
          "Ceiling Height: 10 ft",
        ],
      },
      {
        title: "Kitchen",
        items: [
          "Wall Tiles 2 ft above slab — up to Rs.45/sqft",
          "SS Sink up to Rs.2,000 | Faucet up to Rs.1,200",
          "Granite Slab 20 mm — up to Rs.120/sqft",
        ],
      },
      {
        title: "Bathroom",
        items: [
          "2 bathrooms per floor",
          "Wall Tiles 7 ft — up to Rs.45/sqft",
          "Sanitary & CP Fittings up to Rs.13,000",
          "EWC + Health Faucet + Wall Mixer + Overhead Shower (1 bathroom)",
          "Indian Closet with 2 taps (1 bathroom)",
          "PVC Heavy Door | CPVC/PVC: Finolex",
        ],
      },
      {
        title: "Plumbing",
        items: [
          "Shower with hot & cold wall mixer",
          "Dining: 1 wash basin with tap",
          "Kitchen: SS sink + 1 tap + RO point",
          "Service: 1 tap + washing machine outlet",
        ],
      },
      {
        title: "Doors & Windows",
        items: [
          "Main Door: Steel door with frame",
          "Internal: Skin door + 2nd quality teak frame",
          "Windows: UPVC Sliding 2-Track with mesh",
          "MS Grill for all windows",
        ],
      },
      {
        title: "Painting",
        items: [
          "Interior: Asian/JK Putty + Premium Emulsion (Asian/Berger)",
          "Exterior: Asian Primer + Apex Emulsion",
          "Ceiling putty included",
        ],
      },
      {
        title: "Flooring",
        items: [
          "Living/Dining/Rooms: up to Rs.55/sqft (4x2 tiles)",
          "Balcony/Staircase/Parking: up to Rs.40/sqft (anti-skid)",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires: Finolex / Polycab",
          "Switches: GM / Legrand / Wood",
          "Bedroom: Fan, 2 lights, 5A socket, AC point",
          "Hall: 2 fans, 2 lights, sockets, TV cable point",
          "Kitchen: 2 lights, exhaust, chimney, fridge & mixer sockets",
          "Bathroom: Light, heater socket, hairdryer socket",
          "Service: Light + washing machine socket",
        ],
      },
      {
        title: "Complimentary",
        items: [
          "Overhead Tank: 1000L (Ashirvad)",
          "SS Staircase Railing",
          "Parapet Wall 3 ft",
          "Soak Pit (3 well rings)",
          "Sill Concrete where needed",
          "Fiber Mesh at all column & beam joints",
        ],
      },
    ],
  },
  {
    title: "Executive",
    price: "2,499",
    offer: "1 Lakh Modular Kitchen + Rs.50,000 TV Unit OR Rs.1,50,000 Cash",
    icon: <Globe className="text-brand-yellow" />,
    color: "black",
    categories: [
      {
        title: "Design",
        items: ["2D Floor Plan", "Basic Elevation Plan", "Isometric View Plan"],
      },
      {
        title: "Structure",
        items: [
          "Basement: Up to 3 ft",
          "Steel: iSteel / ARS",
          "Bricks: 9\" exterior, 4.5\" interior (Wire-cut)",
          "Cement: Coromandel / UltraTech (roof), Dalmia / Coromandel (others)",
          "RCC Mix: M20 | Waterproofing: Dr. Fixit",
          "Ceiling Height: 10 ft",
        ],
      },
      {
        title: "Kitchen",
        items: [
          "Wall Tiles 2 ft above slab — up to Rs.50/sqft",
          "SS Sink up to Rs.2,500 | Faucet up to Rs.1,500",
          "Granite Slab 20 mm — up to Rs.140/sqft",
        ],
      },
      {
        title: "Bathroom",
        items: [
          "2 bathrooms per floor",
          "Wall Tiles 10 ft — up to Rs.45/sqft",
          "Sanitary & CP Fittings up to Rs.15,000 (Jaquar / Essco / RAK)",
          "EWC + Health Faucet + Wall Mixer + Overhead Shower (1 bathroom)",
          "Indian Closet with 2 taps (1 bathroom)",
          "PVC Heavy Door | CPVC/PVC: Finolex / Ashirvad",
        ],
      },
      {
        title: "Plumbing",
        items: [
          "Shower with hot & cold wall mixer",
          "Dining: 1 wash basin with tap",
          "Kitchen: SS sink + 1 tap + RO point",
          "Service: 1 tap + washing machine outlet",
        ],
      },
      {
        title: "Doors & Windows",
        items: [
          "Main Door: Mexin steel door + French window with frame",
          "Internal: Design door + 2nd quality teak frame",
          "Windows: UPVC Sliding 2-Track with mesh",
          "MS Grill for all windows",
        ],
      },
      {
        title: "Painting",
        items: [
          "Interior: Asian/JK Putty + Royal Emulsion",
          "Exterior: Asian Primer + Ultima Emulsion",
          "Ceiling putty included",
        ],
      },
      {
        title: "Flooring",
        items: [
          "Living/Dining/Rooms: up to Rs.65/sqft (4x2 tiles)",
          "Balcony/Staircase/Parking: up to Rs.45/sqft (anti-skid)",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires: Havells / Polycab",
          "Switches: Havells / Legrand",
          "Bedroom: Fan, 2 lights, 5A socket, AC point",
          "Hall: 2 fans, 2 lights, sockets, TV cable point",
          "Kitchen: 2 lights, exhaust, chimney, fridge & mixer sockets",
          "Bathroom: Light, heater socket, hairdryer socket",
          "Service: Light + washing machine socket",
        ],
      },
      {
        title: "Complimentary",
        items: [
          "Overhead Tank: 1500L (Ashirvad)",
          "SS Staircase Railing",
          "Parapet Wall 3 ft",
          "Soak Pit (5 well rings)",
          "Sill Concrete where needed",
          "Fiber Mesh at all column & beam joints",
          "Pest Control during basement filling",
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Dropdown component                                                 */
/* ------------------------------------------------------------------ */

function CategoryDropdown({
  category,
  color,
}: {
  category: SpecCategory;
  color: "black" | "yellow";
}) {
  const [open, setOpen] = useState(false);

  const isYellow = color === "yellow";

  return (
    <div
      className={cn(
        "rounded-xl border overflow-hidden transition-colors",
        isYellow
          ? "border-brand-black/15 bg-brand-black/5"
          : "border-white/10 bg-white/5"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer transition-colors",
          isYellow ? "hover:bg-brand-black/10" : "hover:bg-white/10"
        )}
      >
        <span className="text-[11px] font-black uppercase tracking-widest">
          {category.title}
        </span>
        <ChevronDown
          size={14}
          className={cn(
            "transition-transform duration-300 opacity-60",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <ul className="px-4 pb-3 space-y-2">
            {category.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[11px] font-medium opacity-80 leading-relaxed"
              >
                <CheckCircle2
                  size={12}
                  className="shrink-0 mt-0.5 opacity-70"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pricing Card                                                       */
/* ------------------------------------------------------------------ */

function PricingCard({ pkg }: { pkg: PackageTier }) {
  const isYellow = pkg.color === "yellow";

  return (
    <div
      className={cn(
        "relative p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.02] flex flex-col",
        isYellow
          ? "bg-brand-yellow text-brand-black border-brand-yellow shadow-2xl shadow-brand-yellow/20"
          : "bg-brand-black text-white border-white/10"
      )}
    >
      {pkg.isPopular && (
        <div className="absolute top-0 right-10 -translate-y-1/2 bg-white text-brand-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-slate-100">
          Most Popular
        </div>
      )}

      <div className="mb-6">{pkg.icon}</div>

      <h4 className="text-2xl font-black uppercase tracking-tighter mb-1">
        {pkg.title}
      </h4>

      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-xs font-black uppercase tracking-widest opacity-60">
          from
        </span>
        <span className="text-4xl font-black">
          <span className="text-lg">Rs.</span>
          {pkg.price}
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
          /sqft
        </span>
      </div>

      {pkg.offer && (
        <p
          className={cn(
            "text-[10px] font-bold uppercase tracking-wide mb-6 px-3 py-2 rounded-lg",
            isYellow ? "bg-brand-black/10" : "bg-brand-yellow/10 text-brand-yellow"
          )}
        >
          Offer: {pkg.offer}
        </p>
      )}

      {!pkg.offer && <div className="mb-6" />}

      {/* Dropdown categories */}
      <div className="space-y-2 mb-8 flex-1">
        {pkg.categories.map((cat) => (
          <CategoryDropdown key={cat.title} category={cat} color={pkg.color} />
        ))}
      </div>

      <Button
        variant={isYellow ? "primary" : "secondary"}
        className="w-full py-6 font-black uppercase tracking-widest text-xs rounded-xl"
      >
        Select Plan
      </Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported Section                                                   */
/* ------------------------------------------------------------------ */

export function PackagesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {packages.map((pkg) => (
        <PricingCard key={pkg.title} pkg={pkg} />
      ))}
    </div>
  );
}
