import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import "../styles/index.css";
import pinIcon from '../photos/pin.png';

export default function Home() {
  const markers = [
    {
      geocode: [40.68725165, -73.94364819530983],
      popUp: "Location one"
    },
    {
      geocode: [40.68935165, -73.93364819], 
      popUp: "Location two"
    },
    {
      geocode: [40.68225165, -73.95364819],
      popUp: "Location three"
    },
  ];

  const customIcon = new Icon({
    iconUrl: pinIcon,
    iconSize: [25, 25],  // Slightly larger for better visibility
    iconAnchor: [12, 25] // Point at the bottom center of the icon
  });

  return (
    <div>

      <MapContainer center={[40.7128, -74.0060]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MapContainer>
        
    </div>

  );
}