/** @format */

//hi

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
  data,
} from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/index.css";
// import { coords } from '../components/FetchSpecific'
import pinIcon from "../images/pinpointing.png";
import { useEffect, useState } from "react";
import {
  getFoodBankReviews,
  getAllUserReviews,
  createReview,
} from "../adapters/review-adapters";

export default function Page(props) {
  const location = useLocation();
  console.log("hi");
  const foodbank = location.state;
  console.log("info: ", foodbank);
  const [sampleReviews, setSampleReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const [data, error] = await getFoodBankReviews(foodbank.id);
      if (error) {
        console.warn("Error fetching reviews:", error);
      } else {
        setSampleReviews(data.slice(0, 3));
        console.log("Fetched sample reviews:", data.slice(0, 3));
      }
    };

    fetchReviews();
  }, [foodbank.id]);

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
      <p>
        Located at: {foodbank.food_bank_street}, {foodbank.food_bank_borough},{" "}
        {foodbank.food_bank_zip}
      </p>
      <p>Days Opened: {foodbank.days_open}</p>
      <p>
        Hours: {foodbank.opening_hour} - {foodbank.closing_hour}{" "}
      </p>
      <p>Phone Number: {foodbank.phone_number}</p>
      <br></br>
      <br></br>
      <div>
        <h2>Some reviews from this foodbank:</h2>
        <div>
          {sampleReviews.map((review, index) => (
            <p key={index}>{review.content}</p>
          ))}
        </div>
      </div>

      <Link to="/Review" state={foodbank}>
        <button>Read other reviews!</button>
      </Link>

      <Link to="/Form" state={foodbank}>
        <button>Leave a review!</button>
      </Link>
    </>
  );
}
