import React from "react";
import { memo } from "react";

function areEqual(prevProps, nextProps) {
  if (prevProps.countB !== nextProps.countB) {
    return false; // 再レンダリング
  } else {
    return true; // 再レンダリング
  }
}

// props以外が更新されてもこの関数コンポーネントは再レンダリングされない
const ChildMemo = memo(({ countB }) => {
  console.log("%cChild render", "color: red;");
  return (
    <div className="child">
      <h3>子コンポーネント領域</h3>
      <p>ボタンBクリック回数：{countB}</p>
    </div>
  );
}, areEqual);

//const ChildMemo = React.memo(Child);
//const ChildMemo = memo(Child);
export default ChildMemo;
