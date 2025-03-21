import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

const Path = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#333]">
      <svg
        height="500"
        width="800"
        // viewBox="0 0 500 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Early curve */}
        <path
          d="M10,400 L50,400 A50,50 0 0 0 100,350 L100,150 A50,50 0 0 1 150,100 L790,100"
          className="stroke-2 fill-none stroke-[grey]"
        />

        {/* Straight line */}
        <path
          d="M10 400 L 790 400"
          className="stroke-2 fill-none stroke-[grey]"
        />

        {/* Late curve */}
        <path
          d="M10,400 L550,400 A50,50 0 0 0 600,350 L600,150 A50,50 0 0 1 650,100 L790,100"
          className="stroke-2 fill-none stroke-[grey]"
        />

        {/* Early curve animated */}
        <motion.path
          d="M10,400 L50,400 A50,50 0 0 0 100,350 L100,150 A50,50 0 0 1 150,100 L790,100"
          className="stroke-2 fill-none stroke-[#0000ff]"
          strokeLinecap="round"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{
            pathLength: 0.05,
            pathOffset: [0, 1],
          }}
          transition={{
            pathOffset: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />

        {/* Late curve Animated */}
        <motion.path
          d="M10,400 L550,400 A50,50 0 0 0 600,350 L600,150 A50,50 0 0 1 650,100 L790,100"
          className="stroke-2 fill-none stroke-[#00ff00]"
          strokeLinecap="round"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{
            pathLength: 0.05,
            pathOffset: [0, 1],
          }}
          transition={{
            pathOffset: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />

        {/* Animated straight line */}
        <motion.path
          d="M10 400 L 790 400"
          className="stroke-2 fill-none stroke-[#ff0000]"
          strokeLinecap="round"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{
            pathLength: 0.08,
            pathOffset: [0, 1],
          }}
          transition={{
            pathOffset: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
        {/* Boxes */}
        <rect
          width={80}
          height={40}
          x="150"
          y="380"
          fill="#000"
          filter="url(#spotlight)"
        />
        <rect width={80} height={40} x="450" y="380" fill="#000" />
        <rect width={80} height={40} x="450" y="80" fill="#000" />
        <rect width={80} height={40} x="700" y="80" fill="#000" />

        {/* Filter */}
        <defs>
          {/* <!-- Define the spotlight filter --> * */}
          <filter id="spotlight">
            {/* Blur the area */}

            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="0.1"
              result="blur"
            />
            {/* <!-- Create specular lighting effect --> */}
            <feSpecularLighting
              in="blur"
              result="light"
              // specularConstant="1"
              // specularExponent="20"
              lighting-color="white"
            >
              {/* <!-- Define the spotlight --> */}
              <feSpotLight
                x="190"
                y="410"
                z="100"
                pointsAtX="160"
                pointsAtY="400"
                pointsAtZ="0"
                limitingConeAngle="10"
                // specularExponent="30"
              />
            </feSpecularLighting>
            {/* <!-- Blend the lighting effect with the original rectangle --> */}
            <feComposite
              in="SourceGraphic"
              in2="light"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="1"
              k4="0"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export const Route = createFileRoute("/path")({
  component: Path,
});
