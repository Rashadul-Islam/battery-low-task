import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [],
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    addResult: (state, action) => {
      state.result.push(action.payload);
    },
    clearResult: (state) => {
      state.result = [];
    },
  },
});

export const { addResult, clearResult } = resultSlice.actions;

export default resultSlice.reducer;
