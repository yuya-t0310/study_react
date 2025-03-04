const Example = () => {
  const num = { val: 2 };
  const double = (num) => {
    const newNum = {};
    // num.val = num.val * 2; とするとImmutabilityが保持されない（numのプロパティが変更される）
    newNum.val = num.val * 2;
    return newNum;
  };

  const newNum = double(num);
  console.log("newNum", newNum, "num", num);
  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
      <div></div>
    </>
  );
};

export default Example;
