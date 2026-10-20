"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export type LocationCategory =
  | "Career & Academic"
  | "Mineral Exploration"
  | "Geological Fieldwork";

export interface GeoLocation {
  name: string;
  lat: number;
  lng: number;
  desc: string;
  category?: LocationCategory;
  photo?: string;
}

const LeafletMap = ({ locations }: { locations: GeoLocation[] }) => {
  return (
    <div className="relative w-full">
      <MapContainer
        center={[33.8, 72.5]}
        zoom={6}
        scrollWheelZoom={true}
        className="w-full h-[520px] rounded-2xl border border-white/[0.1] z-0"
      >
        <TileLayer
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, SRTM | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker key={`${loc.name}-${loc.desc}`} position={[loc.lat, loc.lng]}>
            <Popup>
              <div className="min-w-[180px]">
                {loc.photo && (
                  <img
                    src={loc.photo}
                    alt={loc.name}
                    className="w-full h-28 object-cover rounded-md mb-2"
                  />
                )}
                {loc.category && (
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-purple/20 text-purple mb-1">
                    {loc.category}
                  </span>
                )}
                <div className="font-bold text-sm text-slate-900">
                  {loc.name}
                </div>
                <div className="text-xs text-slate-600 mt-1">{loc.desc}</div>
                <div className="text-[10px] text-slate-400 mt-1.5 font-mono">
                  {loc.lat.toFixed(4)}°N, {loc.lng.toFixed(4)}°E
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;

