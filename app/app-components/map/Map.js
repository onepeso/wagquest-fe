import { useState, useEffect } from "react";

const Map = ({ address, latitude, longitude }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null; // Return null during server-side rendering
  }

  const { MapContainer, TileLayer, Marker, Popup } = require("react-leaflet");
  const { FaMapPin } = require("react-icons/fa");
  const L = require("leaflet");
  const ReactDOMServer = require("react-dom/server");

  const customIcon = L.divIcon({
    className: "custom-icon",
    html: ReactDOMServer.renderToString(<FaMapPin size={40} color="red" />),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  if (!latitude || !longitude) {
    return <div>Location data not available</div>;
  }

  return (
    <div className="relative" style={{ height: "400px", width: "full" }}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={16}
        scrollWheelZoom={false}
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
