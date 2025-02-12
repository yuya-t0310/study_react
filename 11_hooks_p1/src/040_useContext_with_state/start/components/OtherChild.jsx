import { useContext } from "react";
import { MyContext } from "../Example";

const OtherChild = () => {
  // 配列の1番目だけを取ってくる
  const [, setState] = useContext(MyContext);
  const clickHandler = (e) => {
    setState((prev) => prev + 1);
  };
  return (
    <div>
      <h3>他の子コンポーネント</h3>
      <button onClick={clickHandler}>+</button>
      {/* <h3>{value}</h3> */}
    </div>
  );
};

export default OtherChild;
