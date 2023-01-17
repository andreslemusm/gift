import { configureStore } from "@reduxjs/toolkit";
import { favoritesSilce } from "./favorites";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { swapiApi } from "./swapi.service";

const store = configureStore({
  reducer: {
    favorites: favoritesSilce.reducer,
    [swapiApi.reducerPath]: swapiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swapiApi.middleware),
});
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export { store };
export type { RootState, AppDispatch };
