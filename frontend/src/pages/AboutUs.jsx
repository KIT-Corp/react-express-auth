/** @format */

import { useState } from "react";
import Josh from "../images/Marcy-99B.jpg";
import Irma from "../images/Marcy-78.jpg";
import King from "../images/Marcy-06.jpg";
import Ty from "../images/Marcy-17.jpg";
import "../styles/aboutUs.css";
import FoodInsecurityBarChart from "../components/FoodInsecurityBarChart";

export default function AboutUs() {
  return (
    <>
      <h1>About Us</h1>
      <section className="problem-section">
        <h2>The Problem: Food Insecurity In New York City</h2>
        <div className="problem-content">
          <p>
            "In New York City, food insecurity has reached alarming levels, affecting a significant portion of the population. Approximately 1.5 million residents, including one in four children, experience food insecurity, meaning they lack consistent access to enough nutritious food for an active, healthy life.<br />
            <br />
            The economic challenges faced by New Yorkers exacerbate this issue. Half of the city’s working-age households do not earn enough to meet basic needs such as housing, food, healthcare, and transportation.  This financial strain forces many families to make difficult choices, often sacrificing meals to cover other essential expenses.<br />
            <br />
            Children are particularly vulnerable. In 2021, it was projected that 26% of children in New York City would face hunger, with rates as high as 36% in the Bronx.  Such food insecurity can have long-term detrimental effects on children’s health, development, and academic performance.<br />
            <br />
            The COVID-19 pandemic further intensified food insecurity. The expiration of pandemic-era government supports, like the Child Tax Credit and emergency SNAP allotments, left many families with even fewer resources. Consequently, average monthly visits to food pantries and soup kitchens across NYC increased by 85% compared to pre-pandemic levels.<br />
            <br />
            Geographically, food insecurity is not evenly distributed across the city. Certain neighborhoods, such as East Williamsburg and West Farms, report food insecurity rates as high as 36% and 34%, respectively.  These disparities highlight the need for targeted interventions in the most affected communities."
          </p>
          <FoodInsecurityBarChart />
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
