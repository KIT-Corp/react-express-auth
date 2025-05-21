/** @format */

import { useState } from "react";
import Josh from "../images/Marcy-99B.jpg";
import Irma from "../images/Marcy-78.jpg";
import King from "../images/Marcy-06.jpg";
import Ty from "../images/Marcy-17.jpg";
import "../styles/aboutUs.css";

export default function AboutUs() {
  return (
    <>
      <h1>About Us</h1>
      <section className="problem-section">
        <h2>The Problem:</h2>
        <div className="problem-content">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua..."
          </p>
          <div className="graph-placeholder">Graph representing data</div>
        </div>
      </section>

      <section className="solution-section">
        <h2>The Solution:</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        </p>
      </section>

      <section className="team-section">
        <h2>Meet The Team:</h2>
        <div className="team-members">
          {[1, 2, 3].map((_, i) => (
            <div className="member" key={i}>
              <div className="profile-pic"></div>
              <p>Socials:</p>
              <div className="social-icons">LI EMAIL</div>
              <p className="bio">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// <>
//   <h1>Comen Todos</h1>
//   <h2>"Adonde come uno, comen todos"</h2>

//   <h3>Mission statement: </h3>
//   <p>ENTER MISSION STATEMENT HERE OOOO</p>

//   <div className="aboutPics">
//     <img id="king-photos" src={King} />
//     <p>King McLeod</p>
//     <ul>Backend Developer</ul>
//   </div>

//   <div className="aboutPics">
//     <img className="id-photos" src={Josh} />
//     <p>Joshua Young</p>
//     <ul>CSS Developer</ul>
//   </div>

//   <div className="aboutPics">
//     <img className="id-photos" src={Irma} />
//     <p>Irma Barrios</p>
//     <ul>Project Manager and Frontend Developer</ul>
//   </div>

//   <div className="aboutPics">
//     <img className="id-photos" src={Ty} />
//     <p>Tyreese Wray</p>
//     <ul>Backend Developer</ul>
//   </div>
// </>
