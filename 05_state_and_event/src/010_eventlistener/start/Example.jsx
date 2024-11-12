const Example = () => {
  const clickHandler = () => {
    alert("ボタンガクリックされました。");
  };
  const clickHandler2 = () => {
    alert("ボタンがクリックされました。");
  };
  console.log(clickHandler); // returnが無い関数はundefinedが表示される
  return (
    <>
      {/* onClickで関数を呼び出すときは()を付けない⇒（）を付けるとクリックしなくても関数が呼び出される */}
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
