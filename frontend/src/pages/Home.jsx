import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from "react";

export default function Review () {
  return <>

    <h1>home page</h1>
    <h2>mission statement</h2>
    <p>about our website</p>
    <h3>map will be here</h3>
     <div id="map"></div>

    <Link to="/search"> 
        <button>Click here for more</button>
    </Link>
  </>;
}
