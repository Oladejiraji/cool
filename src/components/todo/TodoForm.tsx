import { FormEvent, useState } from "react";
import { TodoType } from "../../routes/todo";

interface IProps {
  addTodo: (todo: TodoType) => void;
}

const TodoForm = ({ addTodo }: IProps) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({
      id: Date.now(),
      title: value,
      completed: false,
    });
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-1">
      <div>
        <input
          type="text"
          value={value}
          className="border border-[black]"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default TodoForm;
