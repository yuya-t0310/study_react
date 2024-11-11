import { useState } from "react";

const Example = () => {
  // useState 配列の0番目に参照用の値, 配列の1番目に更新用の関数
  let [val, setVal] = useState();
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          //const setFn = valArry[1]; //更新用の関数
          setFn(e.target.value);
        }}
      />
      = {valArry[0]} //参照用の値
    </>
  );
};

export default Example;
