import { configureStore } from "@reduxjs/toolkit";
import { favoritesSilce } from "./favorites";

const store = configureStore({
  reducer: {
    favorites: favoritesSilce.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { RootState, AppDispatch };
