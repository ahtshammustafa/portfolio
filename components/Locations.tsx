"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/ui/LeafletMap"), {
  ssr: false,
});

const locations = [
  {
    name: "Rawalpindi",
    lat: 33.6007,
    lng: 73.0679,
    desc: "Assistant Director, Government of Pakistan (Jan 2024 - Present)",
  },
  {
    name: "NUST, Islamabad",
    lat: 33.6426,
    lng: 72.9917,
    desc: "Research Assistant, National University of Sciences and Technology (Jan 2023 - Dec 2023)",
  },
  {
    name: "Muzaffarabad, Azad Kashmir",
    lat: 34.3700,
    lng: 73.4711,
    desc: "Intern, PCRWR (Dec 2020 - Feb 2021)",
  },
  {
    name: "Chinar Mineral Processing Mills",
    lat: 30.1798,
    lng: 66.9750,
    desc: "Junior Geologist | Remote Sensing Analyst (Apr 2020 - May 2022)",
  },
  {
    name: "University of Azad Jammu and Kashmir",
    lat: 34.3700,
    lng: 73.4711,
    desc: "BS Geology (2016 - 2020)",
  },
  {
    name: "Chitral",
    lat: 35.8518,
    lng: 71.7862,
    desc: "Geological and geospatial fieldwork site",
  },
  {
    name: "Astore",
    lat: 35.3411,
    lng: 74.9006,
    desc: "Geological and geospatial fieldwork site",
  },
  {
    name: "Deosai",
    lat: 34.8973,
    lng: 75.4271,
    desc: "Geological and geospatial fieldwork site",
  },
  {
    name: "Hunza",
    lat: 36.3167,
    lng: 74.6500,
    desc: "Geological and geospatial fieldwork site",
  },
  {
    name: "Gilgit",
    lat: 35.9208,
    lng: 74.3144,
    desc: "Geological and geospatial fieldwork site",
  },
  {
    name: "Khunjerab Pass",
    lat: 36.8500,
    lng: 75.4167,
    desc: "Geological and geospatial fieldwork site",
  },
  {
    name: "Kotli, Azad Kashmir",
    lat: 33.5165,
    lng: 73.9033,
    desc: "Geological and geospatial fieldwork site",
  },
  {
    name: "Mianwali (Salt Range)",
    lat: 32.5854,
    lng: 71.5327,
    desc: "Geological and geospatial fieldwork site",
  },
  {
    name: "Buner, KPK",
    lat: 34.4833,
    lng: 72.5667,
    desc: "Geological and geospatial fieldwork site",
  },
  {
    name: "Swat, KPK",
    lat: 34.7717,
    lng: 72.3603,
    desc: "Geological and geospatial fieldwork site",
  },
  {
    name: "Muslim Bagh, Balochistan",
    lat: 30.9667,
    lng: 68.1667,
    desc: "Geological and geospatial fieldwork site",
  },
  {
    name: "Kargah, Gilgit",
    lat: 35.8833,
    lng: 74.2167,
    desc: "Polymetallic (Cu-Pb-Ag-Au) deposit exploration",
  },
  {
    name: "Allai, Battagram",
    lat: 34.7833,
    lng: 73.0167,
    desc: "Chromite deposit exploration",
  },
  {
    name: "Sapat Complex, Kohistan",
    lat: 35.2667,
    lng: 73.2500,
    desc: "Chromite deposit exploration (Sapat ultramafic complex)",
  },
  {
    name: "Indus River (Kohistan stretch)",
    lat: 35.4000,
    lng: 73.0000,
    desc: "Placer gold assessment (2-4 g/t)",
  },
];

const Locations = () => {
  return (
    <div id="locations" className="py-20 w-full">
      <h1 className="heading">
        Fieldwork &amp; <span className="text-purple">project locations</span>
      </h1>
      <div className="mt-12">
        <LeafletMap locations={locations} />
      </div>
    </div>
  );
};

export default Locations;
