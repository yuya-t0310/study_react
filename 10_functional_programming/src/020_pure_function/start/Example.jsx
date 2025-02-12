const Example = () => {
  // 純粋関数
  // ・fn(決まった引数) => 決まった戻り値
  // ・関数外の状態（データ）は参照・変更しない
  //   (関数外の定数を参照する等はOKとされる)
  // ・関数外に影響を及ぼさない
  // ・引数で渡された値を変更しない
  // 上記の要件を満たさない操作は「副作用」と呼ぶ
  const val1 = 2,
    val2 = 3;
  const add = (val1, val2) => {
    return val1 + val2;
  };
  return (
    <>
      <h3>純粋関数</h3>
      <p>fn(決まった引数) には 決まった戻り値 を返す</p>
      <div>純粋関数：{add(val1, val2)}</div>
    </>
  );
};

export default Example;
