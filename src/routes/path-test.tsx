import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/path-test")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <svg width="400" height="300" viewBox="0 0 400 300">
        <defs>
          {/* <!-- Define the spotlight filter --> */}
          <filter id="spotlight">
            {/* <!-- Create specular lighting effect --> */}
            <feSpecularLighting
              result="light"
              specularConstant="1"
              specularExponent="20"
              lighting-color="white"
            >
              {/* <!-- Define the spotlight --> */}
              <feSpotLight
                x="200"
                y="50"
                z="100"
                pointsAtX="200"
                pointsAtY="150"
                pointsAtZ="0"
                specularExponent="30"
                limitingConeAngle="40"
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

        {/* <!-- Draw the rectangle and apply the filter --> */}
        <rect
          x="100"
          y="100"
          width="200"
          height="100"
          fill="blue"
          filter="url(#spotlight)"
        />
      </svg>
    </div>
  );
}
