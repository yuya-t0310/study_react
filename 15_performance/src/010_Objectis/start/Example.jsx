import { useState } from "react";

const Example = () => {
  console.log("render");

  const [countA, setCount] = useState({
    val: 0,
  });

  const isSame = Object.is({ val: 0 }, { val: 0 });
  console.log(isSame); // ⇒false

  const obj = { val: 0 };
  const obj2 = obj;
  console.log(Object.is(obj, obj2)); // ⇒true

  return (
    <>
      <h3>再レンダリングが発生する条件</h3>
      <p>stateの値が変更された時</p>
      <p>Object.isによって変更は検知される</p>
      <button
        onClick={() => {
          setCount((prev) => {
            const newState = { ...prev };
            newState.val = 1; // 値を変えなくても別オブジェクトであるので再レンダリングが発生する
            return newState;
          });
        }}
      >
        ボタンA
      </button>
      <h3>{countA.val}</h3>
    </>
  );
};

export default Example;
