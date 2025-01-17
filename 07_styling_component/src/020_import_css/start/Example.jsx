import { useState } from "react";

import "./Example.css";
import SubButton from "./components/SubButton";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <button className={isSelected ? "btn selected" : "btn"} onClick={clickHandler}>
        ボタン
      </button>
      < SubButton/>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
