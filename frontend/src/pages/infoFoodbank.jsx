import {BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom'; 
import { useState } from "react";

export default function Page (props) {
  const location = useLocation();
  const foodbank = location.state
  console.log("info: ", foodbank)

  return <>
<button>Press here to favorite!</button>

    <h1>Food bank name: {foodbank.Program}</h1>
    <p>Located at: {foodbank.Address.Street}, {foodbank.Address.Borough}, {foodbank.Address.ZIP}</p>
    <p>Days Opened: {foodbank.Schedules[0].Days}</p>
    <p>Hours: {foodbank.Schedules[0].openingHour} - {foodbank.Schedules[0].closingHour} </p>
    <p>Phone Number: {foodbank.Phone}</p>

     <Link to="/Review">
        <button>Read other reviews!</button>
    </Link>

    <Link to="/foodbankReview">
        <button>Leave a review!</button>
    </Link>
  </>;
}
