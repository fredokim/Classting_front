import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import ReviewStore from "./store";

const ReviewSlice = createSlice({
  name: "Review",
  initialState: ReviewStore,
  reducers: {
    setReviewData(state: any, action: PayloadAction<Array<any>>) {
      state.data = action.payload;
    },
  },
});

export const { setReviewData } = ReviewSlice.actions;

export default ReviewSlice;
