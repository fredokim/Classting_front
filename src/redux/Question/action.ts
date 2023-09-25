import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import QuestionStore from "./store";

const QuestionSlice = createSlice({
  name: "Question",
  initialState: QuestionStore,
  reducers: {
    getQuestionData(state: any, action: PayloadAction) {
      state.result = action.payload;
    },
    setPage(state: any, action: PayloadAction<number>) {
      state.page = state.page + action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getApiQuestionData.fulfilled, (state, action) => {
      state.result = action.payload;
    });
    builder.addCase(getApiQuestionData.rejected, (state, action) => {
      console.log(action);
    });
  },
});

const getApiQuestionData = createAsyncThunk(
  "/getApiQuestionData",
  async (form: any) => {
    const { amount, category, difficulty } = form;

    const rep = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );

    return rep.data;
  }
);

export const { getQuestionData, setPage } = QuestionSlice.actions;
export { getApiQuestionData };
export default QuestionSlice;
