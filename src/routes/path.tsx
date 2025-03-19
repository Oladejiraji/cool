import { createFileRoute } from "@tanstack/react-router";
import React from "react";

const Path = () => {
  return (
    <svg height="210" width="400" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M150 5 L75 200 L225 200 Z"
        className="fill-none stroke-green stroke-width-3"
      />
    </svg>
  );
};

export const Route = createFileRoute("/path")({
  component: Path,
});
