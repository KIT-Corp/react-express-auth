import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from "react";

export default function Form () {
  return <>

    <h1>Leave a review</h1>

   <form>
<h1>food bank name</h1>
<input> </input>

<p>Average wait time</p>
<input></input>


<p>Comments:</p>
<input></input>

    </form>

    
        <button>Submit</button> 
        <button>Cancel</button>
  </>;
}
