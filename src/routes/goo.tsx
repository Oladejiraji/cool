import { createFileRoute } from "@tanstack/react-router";

const Goo = () => {
  return (
    <>
      <div className="blobs">
        <div className="blob">2</div>
        <div className="blob">1</div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export const Route = createFileRoute("/goo")({
  component: Goo,
});
