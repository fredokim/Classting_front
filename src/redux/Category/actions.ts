import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import CategoryStore from "./store";

const CategorySlice = createSlice({
  name: "Category",
  initialState: CategoryStore,
  reducers: {
    getCategoryData(state: any, action: PayloadAction) {
      state.trivia_categories = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getApiCategoryData.fulfilled, (state, action) => {
      state.trivia_categories = action.payload;
    });
    builder.addCase(getApiCategoryData.rejected, (state, action) => {
      console.log(action);
    });
  },
});

const getApiCategoryData = createAsyncThunk(
  "/lesson/getLessonData",
  async () => {
    const rep = await axios.get("https://opentdb.com/api_category.php");
    return rep.data;
  }
);

export const { getCategoryData } = CategorySlice.actions;
export { getApiCategoryData };
export default CategorySlice;
