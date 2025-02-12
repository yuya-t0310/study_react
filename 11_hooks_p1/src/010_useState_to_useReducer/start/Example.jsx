import { useState, useReducer } from "react";

// useReducer は useState の書き換えに使用
const Example = () => {
  const [state, setState] = useState(0);
  const countUp = () => {
    setState((prev) => {
      return (prev = prev + 1);
    });
  };

  // useReducerを使用する
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error("不明なactionです。");
    }
    // if (action === "+") {
    //   return ++prev;
    // } else if (action === "-") {
    //   return --prev;
    // }
  }, 0);
  const rcountUp = () => {
    dispatch({ type: "+", step: 2 }); // useReducerの第一引数の処理が実行される
  };
  const rcountDown = () => {
    dispatch({ type: "-", step: 3 });
  };

  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
