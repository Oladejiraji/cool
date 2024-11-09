import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import { MovieData } from "../data/movie";
import { Fragment } from "react/jsx-runtime";
import { centerDistance } from "../utils/helper";
import { useEffect, useState } from "react";

gsap.registerPlugin(Observer);
const CARD_WIDTH_BUFFER = 30;

const Home = () => {
  // State
  const [columns, setColumns] = useState(window.innerWidth < 1024 ? 3 : 5);
  const [cardSpacing, setCardSpacing] = useState(window.innerHeight * 0.06);
  const [cardWidth, setCardWidth] = useState(
    (window.innerWidth - cardSpacing * columns - 1) / columns +
      CARD_WIDTH_BUFFER
  );
  // Constants
  const CARD_REPEAT = 8;
  const CARD_HEIGHT = cardWidth * 1.3;
  // const COLUMN_CARD_NO = 10 * CARD_REPEAT;
  // const TOTAL_COLUMN_HEIGHT =
  //   CARD_HEIGHT * COLUMN_CARD_NO + cardSpacing * (COLUMN_CARD_NO - 1);

  // Function to reset grid positions
  const resetGrids = (gridArray: Element[]) => {
    const gridCon = gridArray[0].getBoundingClientRect() as DOMRect;
    // console.log(reset)
    gridArray.forEach((section) => {
      gsap.to(section, {
        duration: 0,
        y: `-${gridCon.height / 2}`,
      });
    });
  };

  // Handle scroll function
  const handleScroll = (direction: "up" | "down", observer: Observer) => {
    const gridArray = gsap.utils.toArray(".infinity_grid_con") as Element[];
    const gridCon = gridArray[
      (gridArray.length - 1) / 2
    ]?.getBoundingClientRect() as DOMRect;
    const resetPoint =
      Math.floor(Math.abs(gridCon.y)) >
        Math.floor((gridCon.height * 5) / CARD_REPEAT) ||
      Math.floor(Math.abs(gridCon.y)) <
        Math.floor((gridCon.height * 3) / CARD_REPEAT);
    if (resetPoint) {
      resetGrids(gridArray);
    } else {
      gridArray.forEach((section, i) => {
        const usableDist = centerDistance(gridArray, i) + 1;

        gsap.to(section, {
          duration: 0.001,
          y:
            direction === "up"
              ? `-=${1 * usableDist * observer.deltaY}`
              : `-=${1 * usableDist * observer.deltaY}`,
        });
      });
    }
  };

  const handleResize = () => {
    const currColumns = window.innerWidth < 1024 ? 3 : 5;
    setColumns(currColumns);
    setCardSpacing(window.innerHeight * 0.06);
    setCardWidth(
      (window.innerWidth - cardSpacing * currColumns - 1) / currColumns +
        CARD_WIDTH_BUFFER
    );
    const gridArray = gsap.utils.toArray(".infinity_grid_con") as Element[];
    resetGrids(gridArray);
  };

  // Throttle resize event
  let resizeTimeout: number | null;
  const resizeThrottler = () => {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        handleResize();
        // The actualResizeHandler will execute at a rate of 15fps
      }, 66);
    }
  };

  // Scroll observer
  useGSAP(() => {
    Observer.create({
      target: window,
      type: "wheel,scroll,touch",
      onDown: (self) => handleScroll("down", self),
      onUp: (self) => handleScroll("up", self),
    });
  });

  // Initial slider setup
  useEffect(() => {
    const gridArray = gsap.utils.toArray(".infinity_grid_con") as Element[];
    resetGrids(gridArray);
  }, []);

  // Resize event
  useEffect(() => {
    window.addEventListener("resize", resizeThrottler, false);
    return () => window.removeEventListener("resize", resizeThrottler, false);
  }, []);

  // Screen orientation change event
  // useEffect(() => {
  //   screen?.orientation.addEventListener("change", handleResize);
  //   return () => {
  //     screen?.orientation.removeEventListener("change", handleResize);
  //   };
  // }, []);

  return (
    <main
      className="overflow-hidden h-full absolute inset-0 flex justify-center bg-primary-100 main_mask"
      style={{
        gap: `${cardSpacing}px`,
      }}
    >
      {new Array(columns).fill(0).map((_, columnIndex) => (
        <div
          key={columnIndex}
          className="flex flex-col justify-center items-center h-fit infinity_grid_con"
          id="infinity_grid_con"
          style={{
            // transform: `translate(0px, -${TOTAL_COLUMN_HEIGHT / 2.001}px)`,
            rowGap: `${cardSpacing}px`,
          }}
        >
          {new Array(CARD_REPEAT).fill(0).map((_, repeatIndex) => (
            <Fragment key={repeatIndex}>
              {MovieData.slice(columnIndex * 10, (columnIndex + 1) * 10).map(
                (movie, index) => {
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
                }
              )}
            </Fragment>
          ))}
        </div>
      ))}
    </main>
  );
};

export default Home;
