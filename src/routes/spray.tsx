import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/spray")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /spray!";
}
