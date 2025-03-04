const Example = () => {
  // 練習用
  // 引数は型定義が必須
  function sum1(x: number, y: number){
    return x + y;
  }

  console.log(sum1(1, 2))

  // ?をつけると任意の引数となる
  // ただし型定義にundefinedが追加される
  // const sum2 = (x: number, y?: number) => x + y;

  //                                    ↓戻り値の型 何も返らない場合はvoid
  const sum2 = (x: number, y: number): number => x + y;
  console.log(sum2(1, 4));

  type Sum = (x: number, y: number) => number;
  const sum3: Sum = (x, y) => x + y;
  console.log(sum3(100, 150))
};

export default Example;
