
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/index.css";
import pinIcon from "../images/pinpointing.png";
import { coords } from "../adapters/cords-adapter";
import { useEffect, useState } from "react";
import comen from "../images/comentodos.jpg";
import { Carousel } from "../components/carousel";
import { slides } from "../components/carouselData.json";

export default function Home() {
  const [cords, setCords] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const cord = await coords();
      
      console.log("coords", cord);

      setCords(cord);
    };
    doFetch();
  }, []);

  const customIcon = new Icon({
    iconUrl: pinIcon,
    iconSize: [25, 25], // Slightly larger for better visibility
    iconAnchor: [12, 25], // Point at the bottom center of the icon
  });

  return (
    <div>
      {/* <img src={comen} /> */}

      <Carousel data={slides} />

      <MapContainer center={[40.7128, -74.006]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cords.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
