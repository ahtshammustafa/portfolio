"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export interface GeoLocation {
  name: string;
  lat: number;
  lng: number;
  desc: string;
  photo?: string;
}

const LeafletMap = ({ locations }: { locations: GeoLocation[] }) => {
  return (
    <MapContainer
      center={[32.5, 71.5]}
      zoom={6}
      scrollWheelZoom={true}
      className="w-full h-[500px] rounded-xl z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {locations.map((loc) => (
        <Marker key={loc.name} position={[loc.lat, loc.lng]}>
          <Popup>
            {loc.photo && (
              <img
                src={loc.photo}
                alt={loc.name}
                className="w-full h-28 object-cover rounded-md mb-2"
              />
            )}
            <strong>{loc.name}</strong>
            <br />
            {loc.desc}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
