import Child from "./components/Child";
import { createContext } from "react";
export const MyContext = createContext("hello");

// useContext(アプリケーション全体でstateを保持する)
const Example = () => {
  return <Child />;
};

export default Example;
