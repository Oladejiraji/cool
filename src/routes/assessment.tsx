import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/assessment")({
  component: RouteComponent,
});

function RouteComponent() {
  return <List items={["A", "B", "C"]} />;
}

const List = (props: { items: string[] }) => {
  const { items } = props;
  const [weight, setWeight] = React.useState(items[0]);
  return (
    <ul>
      {items
        .sort((a, b) => {
          if (a === weight && b !== weight) return -1;
          if (b === weight && a !== weight) return 1;
          return 0;
        })
        .map((item, i) => {
          return (
            <li
              onClick={() => {
                setWeight(item);
              }}
              key={i}
            >
              {item}
            </li>
          );
        })}
    </ul>
  );
};
