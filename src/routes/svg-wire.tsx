import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/svg-wire")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black">
      {/* <svg viewBox="0 0 50 50" className="bg-neutral-900 max-w-[100px] mx-auto">
        <g>
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="50"
            stroke="rgb(50,50,50)"
            strokeWidth="2"
          />
          <rect
            x="0"
            y="0"
            width="100%"
            height="20"
            fill="url(#line_color)"
            mask="url(#animated_line)"
            style={{
              animation: "to-down linear infinite 2s",
            }}
          />
          <defs>
            <linearGradient id="line_color" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,0,255,0.1)" />
              <stop offset="100%" stopColor="rgb(255,100,255)" />
            </linearGradient>
          </defs>
          <mask id="animated_line">
            <line x1="0" y1="0" x2="0" y2="50" stroke="white" strokeWidth="2" />
          </mask>
        </g>
      </svg> */}
    </div>
  );
}
