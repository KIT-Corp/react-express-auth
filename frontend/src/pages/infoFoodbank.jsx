import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from "react";

export default function Page () {
  return <>
    <h1>Food bank name</h1>
    <p>Located at: </p>
    <p>Hours: </p>

    <h2>Common Items Found:</h2>
    <ul>item 1</ul>
    <ul>item 2</ul>
    <ul>item 3</ul>

    <Link to="/foodbankReview">
        <button>Leave a review!</button>
    </Link>
  </>;
}
