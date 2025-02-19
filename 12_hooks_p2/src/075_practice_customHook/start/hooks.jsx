import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((state) => state + 1);
  };

  return {
    count: count,
    countUp: countUp,
  };
};

export default useCount;
