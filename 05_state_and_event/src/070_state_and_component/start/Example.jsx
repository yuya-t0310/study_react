import { useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {/* コンポーネントが同じ位置で切り替わった場合stateを引き継ぐ */}
      {/* key（コンポーネントを一意に識別するための値）を設定することで別物として扱うことができる */}
      {toggle ? <Count key="A" title="A" /> : <Count key="B" title="B" />}
    </>
  );
};

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>
        {title}: {count}
      </h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
