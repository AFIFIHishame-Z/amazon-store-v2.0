/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t bottom-0 from-gray-100 to-transparent z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading={"lazy"}
            src="https://links.papareact.com/gi1"
            alt="Thumbs 1"
          />
        </div>
        <div>
          <img
            loading={"lazy"}
            src="https://links.papareact.com/6ff"
            alt="Thumbs 2"
          />
        </div>
        <div>
          <img
            loading={"lazy"}
            src="https://links.papareact.com/7ma"
            alt="Thumbs 3"
          />
        </div>
      </Carousel>
    </div>
  );
}
