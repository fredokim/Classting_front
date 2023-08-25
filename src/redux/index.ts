import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import CleanSlice, { getApiCleanData } from "./Clean/actions";
import LessonSlice, { getApiLessonData } from "./Lesson/actions";
import OutputSlice, {
  reset,
  setDefaultForm,
  setItems,
  setLastItem,
  setPage,
  setSlectedValue,
} from "./Output/action";

const indexStore = configureStore({
  reducer: {
    Clean: CleanSlice.reducer,
    Lesson: LessonSlice.reducer,
    Output: OutputSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// 리듀서들을 하나의 객체로 묶어서 내보내기
export const indexAction = {
  getApiCleanData,
  getApiLessonData,
  setDefaultForm,
  reset,
  setItems,
  setSlectedValue,
  setPage,
  setLastItem,
};

// state 타입을 export
export type RootStateType = ReturnType<typeof indexStore.getState>;
export default indexStore;
