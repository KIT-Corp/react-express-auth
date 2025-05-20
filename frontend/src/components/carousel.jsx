// import { console } from "inspector";
import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../styles/carousel.css";
import comen from "../images/comentodos.jpg";
import pin from "../images/pinpointing.png";

// { data }
export const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slide.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === slide.length - 1 ? 0 : slide - 1);
  };

  let slides = [
    {
      src: comen,
      alt: "comen todos cover art",
    },
    {
      src: pin,
      alt: "image 2",
    },
    {
      src: comen,
      alt: "image 3",
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
                  slide === index ? "inicator" : "indicator indicator-inactive"
                }
              ></button>
            );
          })}
        </span>
      </div>

      <div className="statement">
        <p>enter mission statement here</p>
      </div>
    </div>
  );
};
