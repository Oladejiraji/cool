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
        {/* <path
          d="M10,400 L550,400 A50,50 0 0 0 600,350 L600,150 A50,50 0 0 1 650,100 L790,100"
          className="stroke-2 fill-none stroke-[grey]"
        /> */}

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
        {/* <motion.path
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
        /> */}

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
        <rect width={100} height={60} x="150" y="370" fill="#4b4d52" />
        <text x="178" y="406" font-weight="700" filter="url(#outline)">
          Darth
        </text>
        <rect width={100} height={60} x="450" y="370" fill="#4b4d52" />
        <rect width={100} height={60} x="450" y="70" fill="#4b4d52" />
        {/* <rect width={100} height={60} x="670" y="70" fill="#4b4d52" /> */}

        <filter id="outline">
          <feMorphology
            in="SourceAlpha"
            result="DILATED"
            operator="dilate"
            radius="0"
          >
            <animate
              attributeName="radius"
              from="0"
              to="2"
              dur="1s"
              fill="freeze"
            />
          </feMorphology>

          <feFlood
            flood-color="#32DFEC"
            flood-opacity="1"
            result="PINK"
          ></feFlood>
          <feComposite
            in="PINK"
            in2="DILATED"
            operator="in"
            result="OUTLINE"
          ></feComposite>

          <feMerge>
            <feMergeNode in="OUTLINE" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>
    </div>
  );
};

export const Route = createFileRoute("/path")({
  component: Path,
});
