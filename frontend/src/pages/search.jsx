/** @format */

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/index.css';
import pinIcon from '../images/pin.png';
import { SearchBar } from '../components/SearchBar';

export default function search() {
  const markers = [
    {
      geocode: [40.68725165, -73.94364819530983],
      popUp: 'Location one',
    },
    {
      geocode: [40.68935165, -73.93364819],
      popUp: 'Location two',
    },
    {
      geocode: [40.68225165, -73.95364819],
      popUp: 'Location three',
    },
  ];

  const customIcon = new Icon({
    iconUrl: pinIcon,
    iconSize: [25, 25],
    iconAnchor: [12, 25], // Point at the bottom center of the icon
  });

  return (
    <>
      <h1>Search Food Banks Here: </h1>
      <SearchBar />
      <div> SearchResults </div>

      <p>map here</p>

      <div>
        <MapContainer center={[40.7128, -74.006]} zoom={13}>
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

      <h2>Closest to you:</h2>
      <p>probably a list here with basic info:</p>
      <ul>time</ul>
      <ul>location</ul>
      <ul>phone number</ul>
    </>
  );
}
