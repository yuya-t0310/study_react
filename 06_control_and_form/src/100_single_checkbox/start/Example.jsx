import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  // const toggleChecked = () => {
  //   setIsChecked((prevState) => !prevState);
  // };
  return (
    <>
      <div>
        <label htmlFor="my-check">チェック：</label>
        <input
          type="checkbox"
          id="my-check"
          checked={isChecked}
          onChange={() => setIsChecked((prevState) => !prevState)}
        />
      </div>
      <div>{isChecked ? "ON!" : "OFF!"}</div>
    </>
  );
};

export default Example;
