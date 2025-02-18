import { useContext } from "react";
import { MyContext } from "../Example";
const GrandChild = () => {
  // 配列の0番目の値をとってくる
  const [value] = useContext(MyContext);
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>孫コンポーネント</h3>
    </div>
  );
};
export default GrandChild;
