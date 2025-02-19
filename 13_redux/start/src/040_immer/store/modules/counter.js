import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    add(state, { type, payload }) {
      console.log(type, payload)
      // ReduxToolkit内では、mutableな操作もimmutableな操作として扱われれる（Immerライブラリによる）
      state.count = state.count + payload;
      // immutabilityの保持
      // const newState = { ...state };
      // newState.count = state.count + payload;
      // return newState;

      // ReduxToolkit内でmutableな操作を行った場合はreturnを記述しない
    },
    minus(state, { type, payload }) {
      console.log(type, payload)
      state.count = state.count - payload;
      // immutabilityの保持
      // const newState = { ...state };
      // newState.count = state.count - payload;
      // return newState;
    }
  }
})

const { add, minus } = counter.actions;

export { add, minus }
export default counter.reducer