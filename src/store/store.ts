import { configureStore } from "@reduxjs/toolkit";
import unsplashImgsRuder from "../features/unsplashImgs/unsplashImgsSlice";

export const store = configureStore({
  reducer: {
    imgs: unsplashImgsRuder,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
