import React, { useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const [scrollProgress, setScrollProgress] = useState(lenis?.progress || 0);

  const handleScroll = () => {
    setScrollProgress(lenis?.progress || 0);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [lenis?.progress]);

  return (
    <ReactLenis root>
      <main className="p-12">
        <div
          className="grid grid-cols-5 gap-12"
          id="infinity_grid_con"
          ref={gridRef}
          onScroll={() => {
            console.log("scrolleeed");
          }}
        >
          {new Array(100).fill(0).map((_, index) => {
            const positionBasedOnIndex = index % 5;
            let scrollOffset = 0;
            if (positionBasedOnIndex === 2) scrollOffset = 0;
            if (positionBasedOnIndex === 1 || positionBasedOnIndex === 3)
              scrollOffset = 1;
            if (positionBasedOnIndex === 0 || positionBasedOnIndex === 4)
              scrollOffset = 2;
            return (
              <div
                style={{
                  transform: `translateY(${
                    scrollProgress * 1000 * scrollOffset
                  }px)`,
                }}
                key={index}
                className="transition-all"
              >
                <img
                  src="/assets/movie.webp"
                  alt="movie images"
                  className="rounded-lg"
                />
              </div>
            );
          })}
        </div>
      </main>
    </ReactLenis>
  );
};

export default Home;
