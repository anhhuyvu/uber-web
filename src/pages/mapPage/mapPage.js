import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "./mapPage.css";
import Header from "../../shared/components/Header/header";
import Footer from "../../shared/components/Footer/footer";
import { LeafletgeoSearchToGo } from "../../components/GeoSearch/geoSearachToGo";
import { LeafletgeoSearchDestination } from "../../components/GeoSearch/geoSearchDestination";

const Body = () => {
  return (
    <MapContainer center={[10.823099, 106.629662]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[10.801941, 106.647484]}>
        <Tooltip>
          <p style={{ color: "red" }}>You are here</p>
        </Tooltip>
      </Marker>
      <div className="bar">
        <LeafletgeoSearchToGo />
        <LeafletgeoSearchDestination />
      </div>
    </MapContainer>
  );
};

const mapPage = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
export default mapPage;
