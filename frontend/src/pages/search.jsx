import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import "../styles/index.css";
import pinIcon from '../photos/pinpointing.png';
import { SearchBar } from '../components/SearchBar';
import { coords } from '../adapters/cords-adapter'
import { useEffect, useState } from "react";

export default function search() {
    const [cords, setCords] = useState([]);


  useEffect(() => {
    const doFetch = async () => {
      const cord = await coords();
      console.log('coords', cord)
      setCords(cord)
    };
    doFetch();
 },  [])

  

  const customIcon = new Icon({
    iconUrl: pinIcon,
    iconSize: [25, 25], 
    iconAnchor: [12, 25] // Point at the bottom center of the icon
  });


  return <>

    <h1>Search Food Banks Here: </h1>
    <SearchBar />

    
    <div>
      <MapContainer center={[40.7128, -74.0060]} zoom={13}>
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

  <div>
    <h2>Search by borough:</h2>
        <p>probably a list here with basic info:</p>
        <ul>time</ul>
        <ul>location</ul>
        <ul>phone number</ul>
  </div>
  
  </>;
};
