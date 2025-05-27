import { createFileRoute } from "@tanstack/react-router";

const Loader = () => {
  const lineCount = 60;
  const circleSize = 200;
  const lineLength = 20;
  const lineWidth = 2;
  const circleLengthExtension = lineLength + 50;

  const extendedLineDiameter = circleSize + circleLengthExtension * 2;

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <svg
        width={extendedLineDiameter}
        height={extendedLineDiameter}
        viewBox={`-${extendedLineDiameter / 5} -${extendedLineDiameter / 5} ${extendedLineDiameter} ${extendedLineDiameter}`}
      >
        <g
          id="g-parent"
          // transform={`translate(${circleLengthExtension}, ${circleLengthExtension})`}
        >
          {new Array(lineCount).fill(0).map((_, i) => {
            const radius = circleSize / 2;
            const centerX = radius;
            const centerY = radius;
            const angle = (i / lineCount) * 2 * Math.PI - Math.PI / 2;

            const innerX = radius * Math.cos(angle) + centerX;
            const innerY = radius * Math.sin(angle) + centerY;

            const outerX = (radius + lineLength) * Math.cos(angle) + centerX;
            const outerY = (radius + lineLength) * Math.sin(angle) + centerY;

            return (
              <g key={i}>
                <line
                  x1={innerX}
                  y1={innerY}
                  x2={outerX}
                  y2={outerY}
                  stroke="#333"
                  strokeWidth={lineWidth}
                  strokeLinecap="round"
                ></line>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export const Route = createFileRoute("/clock")({
  component: Loader,
});
