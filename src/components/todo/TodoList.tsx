import { TodoType } from "../../routes/todo";

interface IProps {
  todos: TodoType[];
}

const TodoList = ({ todos }: IProps) => {
  return (
    <div>
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <p>{todo.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
