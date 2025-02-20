import { add } from "./add"; // static import

const Example = () => {
  // dynamicImport
  const dynamicImport = async () => {
    // 必要な時だけインポートできる ⇒ 処理が軽くなる
    const module = await import("./add");
    console.log(module);
  };
  import("./add").then((module) => {
    console.log(module);
  });
  console.log(add(1, 2));
};

export default Example;
