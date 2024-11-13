import { useState } from "react";

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnterdTodo] = useState("");

  const addTodo = (e) => {
    // form submit時に自動で再読み込みされる動作を防ぐ
    e.preventDefault();
    // 引数にeを設定し、e.target.valueとするとbuttonのvalueを取得しようとするので値が入らない
    const inputVal = enteredTodo;
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: inputVal,
    };
    createTodo(newTodo);
    //入力欄初期化
    setEnterdTodo("");
  };
  return (
    <>
      <div>
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={enteredTodo}
            onChange={(e) => setEnterdTodo(e.target.value)}
          ></input>
          <button>追加</button>
        </form>
      </div>
    </>
  );
};

export default Form;
