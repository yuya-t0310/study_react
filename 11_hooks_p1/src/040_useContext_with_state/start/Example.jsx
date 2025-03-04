import { useState, createContext } from "react";
import Child from "./components/Child";
import OtherChild from "./components/OtherChild";
export const MyContext = createContext();

const Example = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      {/**Context.Provider コンポーネントで囲む この中ではcreateComponentで設定されたvalueを使用可能*/}
      <MyContext.Provider value={[value, setValue]}>
        <Child />
        <OtherChild />
        {value}
      </MyContext.Provider>
    </>
  );
};

export default Example;
