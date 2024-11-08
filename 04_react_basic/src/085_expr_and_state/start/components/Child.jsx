/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = () => {
  const hello = () => "hello";
  const fn = () => {};
  const a = hello();
  if (true) {
    ("hello");
  }
  return (
    <div className="component">
      <h3>式と文</h3>
      {/* 三項演算子は式なのでJSXに代入可能 */}
      {true ? "hello" : "bye"}
      {1}
    </div>
  );
};

export default Child;
