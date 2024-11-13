import { useState } from "react";

import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);

  // idを指定してtoDosListから削除
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      // 渡されたidに一致しないもののみをnewTodosに加える　⇒　渡されたidのみ削除される
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </>
  );
};

export default Todo;
