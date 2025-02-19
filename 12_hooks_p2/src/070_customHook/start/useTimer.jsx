import { useEffect, useState, useLayoutEffect } from "react";

// useStateやuseEffectを内部で読んでいる関数⇒custom hook
// useXXXXとすることが命名規則
const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // console.log('init');
    let intervalId = null;

    if (isRunning) {
      // console.log('timer start');

      intervalId = window.setInterval(() => {
        // console.log('interval running');
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      window.clearInterval(intervalId);
      // console.log('end');
    };
  }, [isRunning]);

  useEffect(() => {
    // // console.log('updated');

    document.title = "counter:" + time;
    window.localStorage.setItem("time-key", time);

    return () => {
      // debugger
      // // console.log('updated end');
    };
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem("time-key"));
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  const toggle = () => {
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return {
    isRunning: isRunning,
    time: time,
    toggle: toggle,
    reset: reset,
  };
};

export default useTimer;
