import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${arg}`;
  const o = {
    color: "red",
    num: 123,
  };
  return (
    <>
      {/* オブジェクトをpropsとして渡す場合は{{ }}とする（オブジェクトリテラル） */}
      <Child
        // color={o.color}
        // num={o.num}
        // 上記は{...o}（スプレッド演算子）で代用できる
        {...o}
        fn={hello}
        bool
        obj={{ name: "Tom", age: "18" }}
      />
      {/* <Child color="red" /> */}
    </>
  );
};

export default Example;
