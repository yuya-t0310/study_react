import { useState } from "react";

const Example = () => {
  let displayVal;
  let [val, setVal] = useState();
  console.log("再レンダリングされました");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setVal(e.target.value);
          // displayVal = e.target.value;
        }}
      />
      = {val}
    </>
  );
};

// 1.Exampleコンポーネントのレンダリング
// 2.onChange実行
// 3.Exampleコンポーネントの再レンダリング
// 1~3 で変更した値をどこかに保持しておく必要がある ⇒ state ⇒ これを提供しているのがuseState

export default Example;
