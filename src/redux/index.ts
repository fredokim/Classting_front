import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import CategorySlice, { getApiCategoryData } from "./Category/actions";
import QuestionSlice, { getApiQuestionData, setPage } from "./Question/action";
import ConditionSlice, {
  setConditionList,
  setStartTime,
  setEndTime,
} from "./Condition/action";
import ModalSlice, { setShowAnswerModal } from "./Modal/action";
import ReviewSlice, { setReviewData } from "./Review/action";
const indexStore = configureStore({
  reducer: {
    Category: CategorySlice.reducer,
    Question: QuestionSlice.reducer,
    Condition: ConditionSlice.reducer,
    Modal: ModalSlice.reducer,
    Review: ReviewSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// 리듀서들을 하나의 객체로 묶어서 내보내기
export const indexAction = {
  getApiCategoryData,
  getApiQuestionData,
  setPage,
  setConditionList,
  setShowAnswerModal,
  setStartTime,
  setEndTime,
  setReviewData,
};

// state 타입을 export
export type RootStateType = ReturnType<typeof indexStore.getState>;
export default indexStore;
