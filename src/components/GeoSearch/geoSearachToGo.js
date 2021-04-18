import "leaflet-geosearch/dist/geosearch.css";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import icon from "./constant";

export function LeafletgeoSearchToGo() {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      marker: {
        icon,
      },
      searchLabel: "Where to ?",
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, []);

  return null;
}
