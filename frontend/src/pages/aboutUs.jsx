import { useState } from "react";
import Josh from '../photos/Marcy-99B.jpg'
import Irma from '../photos/Marcy-78.jpg'
import King from '../photos/Marcy-06.jpg'
import Ty from '../photos/Marcy-17.jpg'

export default function AboutUs() {
  return <>
    <h1>Comen Todos</h1>
    <h2>"Adonde come uno, comen todos"</h2>

    <h3>Mission statement: </h3>
    <p>ENTER MISSION STATEMENT HERE OOOO</p>



    <img className="id-photos" src= {King} />
    <p>King McLeod</p>
    <ul>Backend Developer</ul>
    <img className="id-photos" src={Josh} />
    <p>Joshua Young</p>
    <ul>CSS Developer</ul>
    <img className="id-photos" src= {Irma} />
    <p>Irma Barrios</p>
    <ul>Project Manager and Frontend Developer</ul>
    <img className="id-photos" src= {Ty} />
    <p>Tyreese Wray</p>
    <ul>Backend Developer</ul>
  </>;
}
