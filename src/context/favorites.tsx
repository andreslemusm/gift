import { createContext, useContext, useReducer } from "react";

type Favorite = {
  name: string;
  gender: string;
  birthYear: string;
  planetId: number;
};

const FavoritesContext = createContext<{
  favorites: Array<Favorite>;
  dispatch: React.Dispatch<
    | {
        type: "add";
        favorite: Favorite;
      }
    | {
        type: "delete";
        favoriteName: Favorite["name"];
      }
  >;
} | null>(null);
if (import.meta.env.DEV) {
  FavoritesContext.displayName = "FavoritesContext";
}

const favoritesReducer = (
  prevFavorites: Array<Favorite>,
  action:
    | { type: "add"; favorite: Favorite }
    | { type: "delete"; favoriteName: Favorite["name"] }
) => {
  switch (action.type) {
    case "add": {
      return [...prevFavorites, action.favorite];
    }
    case "delete": {
      return prevFavorites.filter(
        (favorite) => favorite.name !== action.favoriteName
      );
    }
    default: {
      throw new Error(`Unhandled action: ${JSON.stringify(action)}`);
    }
  }
};

const FavoritesProvider = ({
  children,
}: React.PropsWithChildren): React.ReactElement => {
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    [] as Array<Favorite>
  );

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === null) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
};

export { FavoritesProvider, useFavorites };
