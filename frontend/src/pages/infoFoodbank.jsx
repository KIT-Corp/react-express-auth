/** @format */

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
  data,
} from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/index.css';
import pinIcon from '../images/pinpointing.png';
import { useEffect } from 'react';
// import { coords } from '../components/FetchSpecific'

export default function Page(props) {
  const location = useLocation()
  
  const foodbank = location.state
  console.log("info: ", foodbank)

//   const markers = [
//     {
//       geocode: [40.837168399999996, -73.91148156953344],
//       popUp: "THE BIBLE CHURCH OF CHRIST"
//     }
//   ]

  //     const customIcon = new Icon({
  //     iconUrl: pinIcon,
  //     iconSize: [25, 25],
  //     iconAnchor: [12, 25] // Point at the bottom center of the icon
  //   });

  return (
    <>
      {/* <div>
      <MapContainer center={[40.837168399999996, -73.91148156953344]} zoom={5000}>
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
    </div> */}

      <button>Press here to favorite!</button>

    <h1>Food bank name: {foodbank.name}</h1>
    <p>Located at: {foodbank.food_bank_street}, {foodbank.food_bank_borough}, {foodbank.food_bank_zip}</p>
    <p>Days Opened: {foodbank.days_open}</p>
    <p>Hours: {foodbank.opening_hour} - {foodbank.closing_hour} </p>
    <p>Phone Number: {foodbank.phone_number}</p>


      <Link to="/Review">
        <button>Read other reviews!</button>
      </Link>

      <Link to="/Form">
        <button>Leave a review!</button>
      </Link>
    </>
  );
}
