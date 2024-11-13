import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  return (
    <div>
      {/* htmlFor:ラベルをクリックしたときにフォーカスが当たるidを指定 */}
      <label htmlFor="123">ラベル</label>
      <div>
        <input
          id="123"
          placeholder="Hello"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <textarea
          id="456"
          placeholder="Hello"
          // valueはhtmlでは<textarea> value </textarea>とするが、jsxでは↓のように記述する
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <div>
        <h3>{val}</h3>
        <button onClick={clearVal}>クリア</button>
      </div>
    </div>
  );
};

export default Example;
