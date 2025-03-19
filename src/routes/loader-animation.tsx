import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";

const Loader = () => {
  const [lineCount, setLineCount] = useState(60);
  const [circleSize, setCircleSize] = useState(200);
  const [lineLength, setLineLength] = useState(20);
  const [lineWidth, setLineWidth] = useState(2);
  const extendedLineLength = lineLength + 20;
  const circleLengthExtension = lineLength + 50;
  useEffect(() => {
    const gParent = document.getElementById("g-parent");
    if (!gParent) return;
    const lastLine = gParent.lastChild;
    const lastAnimation = lastLine?.lastChild?.lastChild;

    lastAnimation?.addEventListener("endEvent", () => {
      setTimeout(() => {
        gParent.childNodes.forEach((group, i) => {
          const textSvg = group.firstChild;
          const lineSvg = group.lastChild;

          textSvg?.childNodes.forEach((anim) => {
            if (anim.beginElement) {
              anim.beginElementAt(i * 0.2);
            }
          });
          lineSvg?.childNodes.forEach((anim) => {
            if (anim.beginElement) {
              anim.beginElementAt(i * 0.2);
            }
          });
        });
      }, 500);
    });
  }, []);
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <svg
        width={circleSize + circleLengthExtension * 2}
        height={circleSize + circleLengthExtension * 2}
        className=""
      >
        <g
          id="g-parent"
          transform={`translate(${circleLengthExtension}, ${circleLengthExtension})`}
        >
          {new Array(lineCount).fill(0).map((_, i) => {
            const radius = circleSize / 2;
            const centerX = radius;
            const centerY = radius;
            const angle = (i / lineCount) * 2 * Math.PI - Math.PI / 2;
            const angleInDeg = (angle * 180) / Math.PI;

            const innerX = radius * Math.cos(angle) + centerX;
            const innerY = radius * Math.sin(angle) + centerY;

            const innerExtendedX =
              (radius + extendedLineLength / 2) * Math.cos(angle) + centerX;
            const innerExtendedY =
              (radius + extendedLineLength / 2) * Math.sin(angle) + centerY;

            const outerX = (radius + lineLength) * Math.cos(angle) + centerX;
            const outerY = (radius + lineLength) * Math.sin(angle) + centerY;

            const outerExtendedX =
              (radius + extendedLineLength) * Math.cos(angle) + centerX;
            const outerExtendedY =
              (radius + extendedLineLength) * Math.sin(angle) + centerY;

            return (
              <g key={i}>
                <text
                  x={outerExtendedX}
                  y={outerExtendedY}
                  fontSize="10"
                  transform={`rotate(${angleInDeg + 90}, ${outerExtendedX}, ${outerExtendedY})`}
                  textAnchor="middle"
                  dominantBaseline="central"
                  opacity="0"
                >
                  <animate
                    attributeName="y"
                    begin={`${i * 0.2}s`}
                    dur="0.6s"
                    values={`${outerExtendedY}; ${outerExtendedY - 20}; ${outerExtendedY};`}
                  />
                  <animate
                    attributeName="opacity"
                    begin={`${i * 0.2}s`}
                    dur="0.6s"
                    values={`0; 1; 0;`}
                  />
                  {i + 1}
                </text>
                <line
                  x1={innerX}
                  y1={innerY}
                  x2={outerX}
                  y2={outerY}
                  stroke="#333"
                  strokeWidth={lineWidth}
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="x2"
                    begin={`${i * 0.2}s`}
                    dur="0.6s"
                    values={`${outerX}; ${outerExtendedX}; ${outerX};`}
                  />
                  <animate
                    attributeName="y2"
                    begin={`${i * 0.2}s`}
                    dur="0.6s"
                    values={`${outerY}; ${outerExtendedY}; ${outerY};`}
                  />
                  <animate
                    attributeName="x1"
                    begin={`${i * 0.2}s`}
                    dur="0.6s"
                    values={`${innerX}; ${innerExtendedX}; ${innerX};`}
                  />
                  <animate
                    attributeName="y1"
                    begin={`${i * 0.2}s`}
                    dur="0.6s"
                    values={`${innerY}; ${innerExtendedY}; ${innerY};`}
                  />
                </line>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export const Route = createFileRoute("/loader-animation")({
  component: Loader,
});
