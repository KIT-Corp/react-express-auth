import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import pinIcon from "../images/pinpointing.png";
import { SearchBar } from "../components/SearchBar";
import { coords } from "../adapters/cords-adapter";
import { borough } from "../adapters/filter-adapter";
import "leaflet/dist/leaflet.css";
import "../styles/index.css";

export default function search() {
  const [cords, setCords] = useState([]);
  const [bro, setBro] = useState([]);
  const [filter, setFiltered] = useState([]);
  const [foodbank, setFoodBank] = useState([]);

  // getting borough names
  useEffect(() => {
    const doFetch = async () => {
      const boro = await borough();
      setBro(boro);
    };
    doFetch();
  }, []);

  useEffect(() => {
    setFiltered(bro);
  }, [bro]);

  const clickedFoodBank = (result) => {
    setFoodBank(result);
  };
  let navigate = useNavigate();
  useEffect(() => {
    if (foodbank.length !== 0) {
      // console.log("RUAH", foodbank)
      let path = "/foodBankInfoPage";
      navigate(path, { state: foodbank });
    }
  }, [foodbank]);

  //getting coordinates
  useEffect(() => {
    const doFetch = async () => {
      const cord = await coords();
      setCords(cord);
    };
    doFetch();
  }, []);

  //  getting pins to render on map
  const customIcon = new Icon({
    iconUrl: pinIcon,
    iconSize: [25, 25],
    iconAnchor: [12, 25],
  });

  // getting exact borough locations
  const filtering = (e) => {
    const id = e.target.value;
    let answer = [];

    if (id === "bro") {
      answer = bro.filter((it) => it.food_bank_borough === "Brooklyn");
    } else if (id === "bronx") {
      answer = bro.filter((it) => it.food_bank_borough === "Bronx");
    } else if (id === "man") {
      answer = bro.filter((it) => it.food_bank_borough === "NY");
    } else if (id === "que") {
      answer = bro.filter((it) => it.food_bank_borough === "Queens");
    } else if (id === "staten") {
      answer = bro.filter((it) => it.food_bank_borough === "Staten Island");
    } else {
      answer = [];
    }

    setFiltered(answer);
  };

  return (
    <>
      <div className="full-search">
        <h1>Begin your search here: </h1>
        <SearchBar />
      </div>

      <div className="filtering">
        <select onChange={filtering}>
          <option defaultValue="n" selected>
            -- Select an option --
          </option>
          <option value="bro">brooklyn</option>
          <option value="bronx"> bronx</option>
          <option value="man">manhattan</option>
          <option value="que">queens</option>
          <option value="staten">staten</option>
        </select>

        <div>
          {filter.map((bank, index) => (
            <ul
              className="filter-result"
              key={index}
              onClick={() => {
                clickedFoodBank(filter[index]);
              }}
            >
              {bank.name}
            </ul>
          ))}
        </div>
      </div>

      <div>
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
    </>
  );
}
