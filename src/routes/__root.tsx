import { createRootRoute, useMatch, useMatches } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import AnimatedOutlets from "../layouts/AnimatedOutlets";

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

const RootComponent = () => {
  const matches = useMatches();
  const match = useMatch({ strict: false });
  const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
  const nextMatch = matches[nextMatchIndex];

  return (
    <AnimatePresence mode="popLayout">
      <AnimatedOutlets key={nextMatch.id} />
    </AnimatePresence>
  );
};
