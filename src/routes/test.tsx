import { MovieData } from "../data/movie";
import { Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { createFileRoute } from "@tanstack/react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { centerDistance } from "../utils/helper";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARD_WIDTH_BUFFER = 30;

const Test = () => {
  // State
  const [columns, setColumns] = useState(window.innerWidth < 1024 ? 3 : 5);
  const [cardSpacing, setCardSpacing] = useState(window.innerHeight * 0.06);
  const [cardWidth, setCardWidth] = useState(
    (window.innerWidth - cardSpacing * columns - 1) / columns +
      CARD_WIDTH_BUFFER
  );
  // Constants
  const CARD_HEIGHT = (window.innerHeight - cardSpacing) / 2;

  useGSAP(() => {
    const gridImages = gsap.utils.toArray(".grid_images") as Element[];
    gridImages.forEach((gridImage, position) => {
      const index = position % 5;
      const usableDist = centerDistance(new Array(5).fill(0), index);
      gsap.to(gridImage, {
        yPercent: usableDist * 100,
        ease: "none",
        scrollTrigger: {
          trigger: gridImage,
          start: "top bottom",
          end: "bottom top",
          // onUpdate: (self) => {

          // },
        },
      });
    });
    console.log(" ");
  });

  return (
    <ReactLenis root options={{ infinite: true }}>
      <div
        className="grid grid-cols-5 justify-center items-center h-fit infinity_grid_con"
        id="infinity_grid_con"
        style={{
          gap: `${cardSpacing}px`,
        }}
      >
        {MovieData.slice(0, 10).map((movie, index) => {
          return (
            <div
              key={index}
              className="grid_images hover:scale-105 hover:rotate-[0.05deg] transition-transform duration-500"
              style={{
                height: `${CARD_HEIGHT}px`,
                width: `${cardWidth}px`,
              }}
            >
              <img
                // src="/assets/movie.webp"
                src={movie.image?.medium || "/assets/movie.webp"}
                loading="lazy"
                alt={movie.name}
                className="rounded-lg h-full w-full"
              />
            </div>
          );
        })}
        {MovieData.slice(10, 40).map((movie, index) => {
          return (
            <div
              key={index}
              className="grid_images hover:scale-105 hover:rotate-[0.05deg] transition-transform duration-500"
              style={{
                height: `${CARD_HEIGHT}px`,
                width: `${cardWidth}px`,
              }}
            >
              <img
                // src="/assets/movie.webp"
                src={movie.image?.medium || "/assets/movie.webp"}
                loading="lazy"
                alt={movie.name}
                className="rounded-lg h-full w-full"
              />
            </div>
          );
        })}
        {MovieData.slice(0, 10).map((movie, index) => {
          return (
            <div
              key={index}
              className="grid_images hover:scale-105 hover:rotate-[0.05deg] transition-transform duration-500"
              style={{
                height: `${CARD_HEIGHT}px`,
                width: `${cardWidth}px`,
              }}
            >
              <img
                // src="/assets/movie.webp"
                src={movie.image?.medium || "/assets/movie.webp"}
                loading="lazy"
                alt={movie.name}
                className="rounded-lg h-full w-full"
              />
            </div>
          );
        })}
      </div>
    </ReactLenis>
  );
};

export const Route = createFileRoute("/test")({
  component: Test,
});
