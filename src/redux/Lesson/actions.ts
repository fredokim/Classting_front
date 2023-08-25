import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import LessonStore from "./store";

const LessonSlice = createSlice({
  name: "Lesson",
  initialState: LessonStore,
  reducers: {
    getEmglishData(state: any, action: PayloadAction) {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getApiLessonData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getApiLessonData.rejected, (state, action) => {
      console.log(action);
    });
  },
});

const getApiLessonData = createAsyncThunk("/lesson/getLessonData", async () => {
  const rep = await axios.get(
    "https://assets.cdn.soomgo.com/data/exam/mock/input_lesson.json"
  );
  return rep.data;
});

export const { getEmglishData } = LessonSlice.actions;
export { getApiLessonData };
export default LessonSlice;
