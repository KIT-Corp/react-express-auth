/** @format */

import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Josh from '../images/joshua-aboutus.png';
import Irma from '../images/irma-aboutus.jpg';
import King from '../images/king-aboutus.jpg';
import Ty from '../images/ty-aboutus.jpg';
import '../styles/aboutUs.css';
import FoodInsecurityBarChart from '../components/FoodInsecurityBarChart';

export default function AboutUs() {
  return (
    <>
      <h1>About Us</h1>
      <section className="problem-section">
        <h2>The Problem: Food Insecurity In New York City</h2>
        <div className="problem-content">
          <p>
            "In New York City, food insecurity has reached alarming levels,
            affecting a significant portion of the population. Approximately 1.5
            million residents, including one in four children, experience food
            insecurity, meaning they lack consistent access to enough nutritious
            food for an active, healthy life.
            <br />
            <br />
            The economic challenges faced by New Yorkers exacerbate this issue.
            Half of the city’s working-age households do not earn enough to meet
            basic needs such as housing, food, healthcare, and transportation.
            This financial strain forces many families to make difficult
            choices, often sacrificing meals to cover other essential expenses.
            <br />
            <br />
            Children are particularly vulnerable. In 2021, it was projected that
            26% of children in New York City would face hunger, with rates as
            high as 36% in the Bronx. Such food insecurity can have long-term
            detrimental effects on children’s health, development, and academic
            performance.
            <br />
            <br />
            The COVID-19 pandemic further intensified food insecurity. The
            expiration of pandemic-era government supports, like the Child Tax
            Credit and emergency SNAP allotments, left many families with even
            fewer resources. Consequently, average monthly visits to food
            pantries and soup kitchens across NYC increased by 85% compared to
            pre-pandemic levels.
            <br />
            <br />
            Geographically, food insecurity is not evenly distributed across the
            city. Certain neighborhoods, such as East Williamsburg and West
            Farms, report food insecurity rates as high as 36% and 34%,
            respectively. These disparities highlight the need for targeted
            interventions in the most affected communities."
          </p>
          <FoodInsecurityBarChart />
        </div>
      </section>

      <section className="solution-section">
        <h2>The Solution:</h2>
        <p>
          "Comen Todos, inspired by the Spanish phrase “A donde come uno, comen
          dos y a donde comen dos comen todos” (“Where one eats, two eat, and
          where two eat, everyone eats”), embodies the belief that everyone
          deserves a seat at the table. <br /> <br />
          Our mission is to combat food insecurity by offering a centralized,
          user-friendly web platform that connects individuals and families with
          nearby food resources. We aim to reduce the stigma around asking for
          help by building a digital space that’s warm, inclusive, and rooted in
          community care. <br /> <br />
          By aggregating and organizing data on food banks, soup kitchens, and
          mutual aid programs across NYC, Comen Todos helps users find the
          support they need quickly and confidently. Our interactive features —
          like real-time location mapping, user reviews, and social sharing —
          make it easier to navigate food assistance without frustration or
          confusion. <br /> <br />
          Additionally, we empower food banks to create their own presence on
          the platform, share updates, and connect with those they serve
          directly. This two-way interaction not only fosters transparency, but
          also strengthens local networks of care. <br /> <br />
          At its core, Comen Todos is more than just a resource hub — it’s a
          digital extension of community solidarity. We believe that in standing
          together and sharing what we have, we can ensure no New Yorker has to
          face hunger alone."
        </p>
      </section>

      <section className="team-section">
        <h2>Meet The Team:</h2>
        <div className="team-members flex-nowrap gap-2 mt-8 overflow-x-auto px-4">
          <div className="member bg-white shadow-md rounded-lg p-4 w-60 flex-shrink-0 text-center">
            <img
              className="profile-pic w-32 h-32 object-cover rounded-full mx-auto"
              src={King}
              alt="King McLeod"
            />
            <h3>King McLeod</h3>
            <p>Backend Developer</p>
            <div className="social-icons flex justify-center gap-4 my-2">
              <a
                href="https://github.com/kurasmagnolia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/kingmmcleod/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <p className="bio">
              King focused on building out the structure of the database and
              server-side logic with clean and secure endpoints.
            </p>
          </div>

          <div className="member bg-white shadow-md rounded-lg p-4 w-60 flex-shrink-0 text-center">
            <img
              className="profile-pic w-32 h-32 object-cover rounded-full mx-auto"
              src={Josh}
              alt="Joshua Young"
            />
            <h3>Joshua Young</h3>
            <p>CSS Developer</p>
            <div className="social-icons flex justify-center gap-4 my-2">
              <a
                href="https://github.com/Youngjoshua248"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/joshua-young-b697812b1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <p className="bio">
              Josh is passionate about UI/UX and brought our frontend to life
              with beautiful styles.
            </p>
          </div>

          <div className="member bg-white shadow-md rounded-lg p-4 w-60 flex-shrink-0 text-center">
            <img
              className="profile-pic w-32 h-32 object-cover rounded-full mx-auto"
              src={Irma}
              alt="Irma Barrios"
            />
            <h3>Irma Barrios</h3>
            <p>Project Manager & Frontend Developer</p>
            <div className="social-icons flex justify-center gap-4 my-2">
              <a
                href="https://github.com/irmabrr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/irmabarrios1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <p className="bio">
              Irma led project planning and built key frontend components to
              ensure consistency and clarity.
            </p>
          </div>

          <div className="member bg-white shadow-md rounded-lg p-4 w-60 flex-shrink-0 text-center">
            <img
              className="profile-pic w-32 h-32 object-cover rounded-full mx-auto"
              src={Ty}
              alt="Tyreese Wray"
            />
            <h3>Tyreese Wray</h3>
            <p>Backend Developer</p>
            <div className="social-icons flex justify-center gap-4 my-2">
              <a
                href="https://github.com/Wraymar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/tyreesewray/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <p className="bio">
              Tyreese helped develop API routes and connect the frontend with
              our database models.
            </p>
          </div>
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
