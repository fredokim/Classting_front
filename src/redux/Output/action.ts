import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import OutputStore from "./store";
import { FormItemOption } from "../type";

const OutputSlice = createSlice({
  name: "Output",
  initialState: OutputStore,
  reducers: {
    reset(state) {
      Object.assign(state, OutputStore);
    },
    setDefaultForm(
      state: any,
      action: PayloadAction<{ id: number; length: number; page: number }>
    ) {
      const { id, length, page } = action.payload;
      state.id = id;
      state.length = length;
      state.page = page;
    },
    setItems(state: any, action: any) {
      state.items = action.payload;
    },
    setSlectedValue(state: any, action: PayloadAction<Array<any>>) {
      state.selectedValue = action.payload;
    },

    setPage(state: any, action: PayloadAction<number>) {
      state.page = state.page + action.payload;
    },

    setLastItem(state: any, action: PayloadAction<Array<FormItemOption>>) {
      state.lastItem = action.payload;
    },
  },
});

export const {
  setDefaultForm,
  reset,
  setItems,
  setSlectedValue,
  setPage,
  setLastItem,
} = OutputSlice.actions;
export default OutputSlice;
