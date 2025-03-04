import { useState } from "react";

type todo = {
  id: number;
  text: string;
};
type User = {
  name: string;
  age: number;
};

const Example = () => {
  const Example = () => {
    const [text, setText] = useState("hello");
    useState(0);

    const [animals, setAnimals] = useState<string[]>(["dog", "cat"]);
    const [users, serUsers] = useState<User[]>([{ name: "Tom", age: 22 }]);
    const [todos, setTodos] = useState<todo[]>([{ id: 0, text: "Homework" }]);
  };
};

export default Example;
