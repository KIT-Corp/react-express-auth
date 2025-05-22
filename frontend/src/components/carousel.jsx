// import { console } from "inspector";
import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../styles/carousel.css";
import staten from "../images/statenisland.jpg";
import man from "../images/manhattan.jpg";
import brook from "../images/brooklyn.jpg";
import bronx from "../images/bronx.jpg";
import queens from "../images/queens.jpg";

export const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide - 1);
  };

  useEffect(() => {
    const changeSlide = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % slides.length);

    }, 3000); // Change every 3 seconds, adjust if needed

    return () => clearInterval(changeSlide);
  }, []);

  let slides = [
    {
      src: staten,
      alt: "staten island",
    },
    {
      src: man,
      alt: "manhattan",
    },
    {
      src: brook,
      alt: "brooklyn",
    },
    {
      src: bronx,
      alt: "bronx",
    },
    {
      src: queens,
      alt: "queens",
    },
  ];

  return (
    <div className="main-selections">
      <div className="carol">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        {slides.map((item, index) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={index}
              className={slide === index ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className="indicators">
          {slides.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => setSlide(index)}
                className={
                  slide === index ? "indicator" : "indicator indicator-inactive"
                }
              ></button>
            );
          })}
        </span>
      </div>
      <div className="statement">
        <p>
          Welcome to our project called Comen Todos. We chose the name Comen
          Todos from a Spanish phrase that says, "Adonde come uno, comen dos, y
          adonde comen dos, comen todos" which means "Where one eats, everyone
          eats." We decided to focus on the topic of food insecurity. In times
          like these, we're reminded of how fortunate we are to have access to
          food — but many people aren't as lucky and don't have the resources to
          easily tackle this issue. That's why we created Comen Todos — a
          website made for the community, designed to bring together important
          information that would normally take hours to find, all in one place.
        </p>
        <div className="butt">
          <Link to="/AboutUs">
            <button className="aboutus-butt">Learn more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
