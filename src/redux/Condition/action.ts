import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import ConditionStore from "./store";

const ConditionSlice = createSlice({
  name: "Condition",
  initialState: ConditionStore,
  reducers: {
    setConditionList(state: any, action: PayloadAction<Array<any>>) {
      state.conditionList = action.payload;
    },
    setStartTime(state: any, action: PayloadAction<{ startTime: string }>) {
      state.start_time = action.payload.startTime;
    },
    setEndTime(state: any, action: PayloadAction<{ endTime: string }>) {
      state.end_time = action.payload.endTime;
    },
  },
});

export const { setConditionList, setStartTime, setEndTime } =
  ConditionSlice.actions;
export default ConditionSlice;
