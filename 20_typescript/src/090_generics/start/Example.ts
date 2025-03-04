const Example = () => {
  // 練習用
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  }
  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  }
  // 型が違うので同じような処理でも別々に記載する必要がある　⇒　冗長なのでgenericsを使用する

  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  }

  const numArry = repeat<number>(10, 3); //<>内は型推論されるので省略可能
  const strArry = repeat<string>("hello", 4);
  const boolArry = repeat<boolean>(true, 3);
  // リテラル型もOK
  const byeArry = repeat<"bye">("bye", 5)

  // const strArry = repeatStr("hello", 3)
  // const numArry = repeatNum(10, 3);
  console.log(strArry)
  console.log(numArry)
  console.log(boolArry)
  console.log(byeArry)

};

export default Example;
