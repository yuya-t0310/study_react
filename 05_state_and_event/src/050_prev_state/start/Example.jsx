import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
    console.log(count); // このタイミングでは+1されていない　再レンダリング時のcountを設定している
    setCount(count + 1); // この時点でのcountは0なのでsetCountを2回呼んでも+2されない　+1のみされる

    // ↑で変更したstateを変更したい場合は関数を使用してprevstateを変更する
    setCount((prevstate) => {
      return prevstate + 1;
    });
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
