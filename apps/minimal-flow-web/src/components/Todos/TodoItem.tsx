import TodoCheckbox from "./TodoCheckbox";
import { deleteTodo } from "../../app/(app)/home/actions";

export default function TodoItem({ todo }: any) {
  return (
    <li className="todoItem">
      <div className="todoItemLeft">
        <TodoCheckbox id={todo.id} completed={todo.completed} />
      </div>

      <div className="todoItemContent">
        <button
          type="button"
          style={{
            all: "unset",
            cursor: "pointer",
            textUnderlineOffset: "3px",
            flex: 1,
            opacity: todo.completed ? 0.6 : 1,
          }}
          className="todoItemTitle"
        >
          {todo.title}
        </button>
      </div>
      
      <div className="todoItemRight">
        <form action={deleteTodo.bind(null, todo.id)}>
          <button>🗑</button>
        </form>
      </div>
      
    </li>
  );
}