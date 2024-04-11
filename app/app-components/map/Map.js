import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapPin } from "react-icons/fa";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";

const customIcon = L.divIcon({
  className: "custom-icon",
  html: ReactDOMServer.renderToString(<FaMapPin size={40} color="red" />),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Map = ({ address, latitude, longitude }) => {
  if (!latitude || !longitude) {
    return <div>Location data not available</div>;
  }
  return (
    <div className="z-10 relative" style={{ height: "400px", width: "full" }}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
