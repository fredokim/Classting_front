import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import CleanStore from "./store";

const CleanSlice = createSlice({
  name: "Clean",
  initialState: CleanStore,
  reducers: {
    getCleanData(state: any, action: PayloadAction) {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getApiCleanData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getApiCleanData.rejected, (state, action) => {
      console.log(action);
    });
  },
});

const getApiCleanData = createAsyncThunk("/clean/getCleanData", async () => {
  const rep = await axios.get(
    "https://assets.cdn.soomgo.com/data/exam/mock/input_clean.json"
  );
  return rep.data;
});

export const { getCleanData } = CleanSlice.actions;
export { getApiCleanData };
export default CleanSlice;
