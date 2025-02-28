import { counterReducer } from "./counterReducer";

// 初期値
const initState = { count: 0, step: 1 };

describe("counterReducerの動作確認", () => {
  test("up", () => {
    const newState = counterReducer(initState, {
      type: "up",
    });
    expect(newState).toEqual({ count: 1, step: 1 });
  });

  test("down", () => {
    const newState = counterReducer(initState, {
      type: "down",
    });
    expect(newState).toEqual({ count: -1, step: 1 });
  });

  test("changeStep -> up", () => {
    let newState = counterReducer(initState, {
      type: "changeStep",
      payload: 2,
    });
    expect(newState).toEqual({ count: 0, step: 2 });
    newState = counterReducer(newState, {
      type: "up",
    });
    // オブジェクトの比較を行う際はtoEqualを使用する
    expect(newState).toEqual({ count: 2, step: 2 });
    // toBeで書いた場合
    expect(newState.count).toBe(2);
    expect(newState.step).toBe(2);
  });

  test("clear", () => {
    const newState = counterReducer(initState, {
      type: "clear",
    });
    expect(newState).toEqual({ count: 0, step: 1 });
  });
});
