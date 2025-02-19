import { useEffect, useState } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((prev) => !prev)}>トグル</button>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("init");
    let intervalId = null;

    intervalId = window.setInterval(() => {
      console.log("interval called");
      setTime((prev) => prev + 1);
    }, 1000);
    // このコンポーネントが消滅する際に実行されるコールバック関数
    // 後始末に使われる
    return () => {
      window.clearInterval(intervalId);
      // console.log("end");
    };
  }, []); //依存配列なし

  useEffect(() => {
    //console.log("updated");
    document.title = "counter:" + time;
    window.localStorage.setItem("time-key-end", time);

    // クリーンアップ
    // 依存配列ありの場合、↑のコールバック関数が呼ばれる前に実行される
    return () => {
      //console.log("updated end");
    };
  }, [time]); // 依存配列あり

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;
