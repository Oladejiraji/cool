import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";

export const Route = createFileRoute("/todo")({
  component: RouteComponent,
});

export interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}

function RouteComponent() {
  const [todos, setTodos] = React.useState<TodoType[]>([]);
  const addTodo = (todo: TodoType) => {
    setTodos((prev) => [...prev, todo]);
  };
  return (
    <main>
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </main>
  );
}
