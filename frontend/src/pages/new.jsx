import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from "react";

export default function newInfo () {
  return <>
    <h1>Register a new Food Bank </h1>

    <form> 
      <label>Enter program name</label>
      <input></input>
      <label>Enter organization phone</label>
      <input></input>
      <label>Enter organization phone</label>
      <input></input>
      <label>Input address: </label>
      <input></input>
      <label>Enter Days Open: </label>
      <input></input>
      <label>Accessible?</label>
      <input></input>
      <label>Other lanuages spoken:</label>
      <input></input>
      <label>Other resources provided:</label>
      <input></input>
      <button>Sumbit</button> <button>Cancel</button>
      </form>

  </>
}
