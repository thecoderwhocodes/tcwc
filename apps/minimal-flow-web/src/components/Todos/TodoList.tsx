import TodoItem from "./TodoItem";

export default function TodoList({ todos }: any) {
  return (
    <ul className="todoList">
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}