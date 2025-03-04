import Hello, { Btn } from "./Hello";

const Example: React.FC = () => {
  // 練習
  return (
    <>
      <Btn fn={(text) => console.log(`Hello ${text}`)} />
      <Hello text="TypeScript">Children</Hello>
      <Hello />
    </>
  );
};

export default Example;
