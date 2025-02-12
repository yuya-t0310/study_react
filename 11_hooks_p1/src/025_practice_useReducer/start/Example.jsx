import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change":
      return { ...state, [payload.name]: payload.value };
    case CALC_OPTIONS[0]:
      return { ...state, result: state.a + state.b };
    case CALC_OPTIONS[1]:
      return { ...state, result: state.a - state.b };
    case CALC_OPTIONS[2]:
      return { ...state, result: state.a / state.b };
    case CALC_OPTIONS[3]:
      return { ...state, result: state.a * state.b };
    default:
      throw new Error("不明なactionです。");
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  const numChangeHandler = (e) => {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: parseInt(e.target.value) },
    });
  };

  return (
    <>
      <h3>練習問題</h3>
      <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
        {/* <option value={CALC_OPTIONS[0]}>{CALC_OPTIONS[0]}</option>
        <option value={CALC_OPTIONS[1]}>{CALC_OPTIONS[1]}</option>
        <option value={CALC_OPTIONS[2]}>{CALC_OPTIONS[2]}</option>
        <option value={CALC_OPTIONS[3]}>{CALC_OPTIONS[3]}</option> */}
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
