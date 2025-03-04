import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  const shuffle = () => {
    // スプレッド演算子を使うことに注意
    // 配列から要素を一つずつ取り出し新たな配列を定義している
    const newNums = [...nums];
    const value = newNums.pop();
    newNums.unshift(value);
    setNums(newNums);
  };
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
