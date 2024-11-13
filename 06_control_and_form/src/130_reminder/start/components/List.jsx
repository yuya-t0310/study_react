import { useState } from "react";

const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    const newTodos = todos.map((todo) => {
      deleteTodo(id);
    });
  };
  return (
    <>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <button onClick={() => complete(todo.id)}>完了</button>
              <span>{todo.content}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
