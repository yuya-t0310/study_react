import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("useEffect is called");
    window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []); //[]は依存配列とよばれる

  useEffect(() => {
    document.title = "counter:" + time;
    window.localStorage.setItem("time-key", time);
  }, [time]); // 依存配列の値をuseEffect内で書き換えてはならない

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;
