import { useState } from "react";

const Example = () => {
  const orderObj = { item: "apple", count: 10 };
  const [order, setOrder] = useState(orderObj);
  const changeItem = (e) => {
    setOrder((order) => ({ ...order, item: e.target.value }));
  };
  // 元の値を使うときはコールバックで書く方が良い
  // コールバック関数：他の関数の引数に渡される関数のこと
  // なんで？
  // setStateに関数以外の値を渡す⇒その値が新しいstateの値として設定される
  // setStateに関数を渡す⇒stateの値が更新されるタイミングで関数が実行される。その時に関数の引数には現在のstateの値が設定されて渡ってくる
  // ⇒非同期のstate更新になる
  // 　⇒連続で実行した際に最新の状態を参照できる保証がない
  //　　　⇒最新の状態を参照できることによる動作保証のためコールバック関数にした方がよい
  // (order) => ({ ...order, item: e.target.value })を省略せずに書くと以下となる
  // function(order){
  //  return { ...order, count: order.count + 1 }
  // }

  const countUp = () => {
    setOrder((order) => ({ ...order, count: order.count + 1 }));
  };
  const countDown = () => {
    setOrder((order) => ({ ...order, count: order.count - 1 }));
  };
  return (
    <div>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように「+と-ボタンをクリックするとCountの表示が1ずつ増減する機能」と「input要素に連動してItemの表示が変更される機能」を実装してください。コンポーネントの外側（上部）に変数や関数を準備しているためうまく使ってください。
      </p>
      <h3>Item:{order.item}</h3>
      <h3>Count:{order.count}</h3>
      <input type="text" value={order.item} onChange={changeItem} />
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default Example;
