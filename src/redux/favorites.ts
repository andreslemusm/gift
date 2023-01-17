import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type Favorite = {
  name: string;
  gender: string;
  birthYear: string;
  planetId: number;
};

export const favoritesSilce = createSlice({
  name: "favorites",
  initialState: [] as Array<Favorite>,
  reducers: {
    addFavorite: (prevFavorites, action: PayloadAction<Favorite>) => [
      ...prevFavorites,
      action.payload,
    ],
    deleteFavorite: (prevFavorites, action: PayloadAction<Favorite["name"]>) =>
      prevFavorites.filter((favorite) => favorite.name !== action.payload),
  },
});
