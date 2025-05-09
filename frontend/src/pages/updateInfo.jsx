import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from "react";

export default function update() {
  return <>
    <h1>Food Bank Info Update: </h1>

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
      <label>Enter organization phone:</label>
      <input></input>
      <button>Sumbit</button> <button>Cancel</button>
      </form>

  </>
}
