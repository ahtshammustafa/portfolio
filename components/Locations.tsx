"use client";

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import type { GeoLocation, LocationCategory } from "@/components/ui/LeafletMap";

const LeafletMap = dynamic(() => import("@/components/ui/LeafletMap"), {
  ssr: false,
});

const locations: GeoLocation[] = [
  {
    name: "Rawalpindi",
    lat: 33.6007,
    lng: 73.0679,
    category: "Career & Academic",
    desc: "Assistant Research Officer, Government of Pakistan (Jan 2024 - Present)",
  },
  {
    name: "NUST, Islamabad",
    lat: 33.6426,
    lng: 72.9917,
    category: "Career & Academic",
    desc: "MS Remote Sensing & GIS · Research Assistant, IGIS NUST (2021 - 2023)",
  },
  {
    name: "Muzaffarabad, Azad Kashmir",
    lat: 34.37,
    lng: 73.4711,
    category: "Career & Academic",
    desc: "Remote Sensing & GIS Intern, PCRWR (Jan 2021 - Aug 2021)",
  },
  {
    name: "Chinar Mineral Processing Mills",
    lat: 30.1798,
    lng: 66.975,
    category: "Career & Academic",
    desc: "Junior Geologist | Remote Sensing Analyst (Apr 2020 - May 2022)",
  },
  {
    name: "University of Azad Jammu and Kashmir",
    lat: 34.374,
    lng: 73.475,
    category: "Career & Academic",
    desc: "BS Geology (2016 - 2020)",
  },
  {
    name: "Kargah, Gilgit",
    lat: 35.8833,
    lng: 74.2167,
    category: "Mineral Exploration",
    desc: "Polymetallic (Cu-Pb-Ag-Au) deposit exploration & geochemical sampling",
  },
  {
    name: "Allai, Battagram",
    lat: 34.7833,
    lng: 73.0167,
    category: "Mineral Exploration",
    desc: "Chromite deposit exploration & structural mapping",
  },
  {
    name: "Sapat Complex, Kohistan",
    lat: 35.2667,
    lng: 73.25,
    category: "Mineral Exploration",
    desc: "Chromite deposit exploration (Sapat ultramafic complex)",
  },
  {
    name: "Indus River (Kohistan stretch)",
    lat: 35.4,
    lng: 73.0,
    category: "Mineral Exploration",
    desc: "Placer gold assessment (2-4 g/t grade characterization)",
  },
  {
    name: "Chitral",
    lat: 35.8518,
    lng: 71.7862,
    category: "Mineral Exploration",
    desc: "Lead-antimony & structurally controlled Pb-Sb-Au-Ag quartz vein exploration",
  },
  {
    name: "Astore",
    lat: 35.3411,
    lng: 74.9006,
    category: "Geological Fieldwork",
    desc: "High-altitude geological & geospatial fieldwork site",
  },
  {
    name: "Deosai Plains",
    lat: 34.8973,
    lng: 75.4271,
    category: "Geological Fieldwork",
    desc: "Glaciological & geomorphological survey site",
  },
  {
    name: "Hunza Valley",
    lat: 36.3167,
    lng: 74.65,
    category: "Geological Fieldwork",
    desc: "Slope stability, debris flow & glacial hazard fieldwork site",
  },
  {
    name: "Gilgit",
    lat: 35.9208,
    lng: 74.3144,
    category: "Geological Fieldwork",
    desc: "Placer gold (0.5-1 g/t) & regional geological survey site",
  },
  {
    name: "Khunjerab Pass",
    lat: 36.85,
    lng: 75.4167,
    category: "Geological Fieldwork",
    desc: "Karakoram tectonic & alpine cryosphere observation site",
  },
  {
    name: "Kotli, Azad Kashmir",
    lat: 33.5165,
    lng: 73.9033,
    category: "Geological Fieldwork",
    desc: "Sub-Himalayan stratigraphy & landslide susceptibility fieldwork",
  },
  {
    name: "Mianwali (Salt Range)",
    lat: 32.5854,
    lng: 71.5327,
    category: "Geological Fieldwork",
    desc: "Classic Salt Range stratigraphic & structural geology fieldwork",
  },
  {
    name: "Buner, KPK",
    lat: 34.4833,
    lng: 72.5667,
    category: "Geological Fieldwork",
    desc: "Carbonatite-alkaline igneous complex & marble exploration site",
  },
  {
    name: "Swat, KPK",
    lat: 34.7717,
    lng: 72.3603,
    category: "Geological Fieldwork",
    desc: "Metamorphic belt & hydrological flood assessment site",
  },
  {
    name: "Muslim Bagh, Balochistan",
    lat: 30.9667,
    lng: 68.1667,
    category: "Mineral Exploration",
    desc: "Muslim Bagh ophiolite complex & chromite deposit fieldwork",
  },
];

const CATEGORIES: ("All Sites" | LocationCategory)[] = [
  "All Sites",
  "Career & Academic",
  "Mineral Exploration",
  "Geological Fieldwork",
];

const Locations = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "All Sites" | LocationCategory
  >("All Sites");

  const filteredLocations = useMemo(() => {
    if (selectedCategory === "All Sites") return locations;
    return locations.filter((loc) => loc.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div id="locations" className="py-20 w-full">
      <h1 className="heading">
        Fieldwork &amp; <span className="text-purple">project locations</span>
      </h1>
      <p className="text-center text-white-200 text-sm md:text-base mt-3 max-w-2xl mx-auto">
        Interactive topographic view of 20+ geological surveys, mineral
        exploration sites, and research hubs across Pakistan.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
        {CATEGORIES.map((category) => {
          const count =
            category === "All Sites"
              ? locations.length
              : locations.filter((l) => l.category === category).length;
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                isActive
                  ? "bg-purple text-slate-950 border-purple shadow-md shadow-purple/25"
                  : "bg-black-200/70 text-white-200 border-white/[0.1] hover:border-white/[0.3] hover:text-white"
              }`}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <LeafletMap locations={filteredLocations} />
      </div>
    </div>
  );
};

export default Locations;

