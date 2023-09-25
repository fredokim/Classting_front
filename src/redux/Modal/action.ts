import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import ModalStore from "./store";

const ModalSlice = createSlice({
  name: "Modal",
  initialState: ModalStore,
  reducers: {
    setShowAnswerModal(
      state: any,
      action: PayloadAction<{ show: boolean; answer: string }>
    ) {
      state.showAnswerModal = action.payload;
    },
  },
});

export const { setShowAnswerModal } = ModalSlice.actions;
export default ModalSlice;
