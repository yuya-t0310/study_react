import { createSlice } from "@reduxjs/toolkit";
import { asyncCount } from "../../api/counter";

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    }
  }
})

const { add, minus } = counter.actions;

// redux thunk関数 関数をreturnする
// 副作用処理を記述可能
const addAsync = (payload) => {
  return async (dispatch, getState) => {
    const response = await asyncCount(payload)
    dispatch(add(response.data));
  }
}



export { add, minus, addAsync }
export default counter.reducer