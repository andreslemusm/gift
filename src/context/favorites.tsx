import { createContext, useContext, useState } from "react";

type Favorite = {
  name: string;
  gender: string;
  birthYear: string;
  planetId: number;
};

const FavoritesContext = createContext<{
  favorites: Array<Favorite>;
  setFavorites: React.Dispatch<React.SetStateAction<Array<Favorite>>>;
} | null>(null);
if (import.meta.env.DEV) {
  FavoritesContext.displayName = "FavoritesContext";
}

const FavoritesProvider = ({
  children,
}: React.PropsWithChildren): React.ReactElement => {
  const [favorites, setFavorites] = useState<Array<Favorite>>([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
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

const addFavorite = (
  setFavorites: React.Dispatch<React.SetStateAction<Array<Favorite>>>,
  newFavorite: Favorite
) => setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);

const deleteFavorite = (
  setFavorites: React.Dispatch<React.SetStateAction<Array<Favorite>>>,
  favoriteName: Favorite["name"]
) =>
  setFavorites((prevFavorites) =>
    prevFavorites.filter((favorite) => favorite.name !== favoriteName)
  );

export { FavoritesProvider, useFavorites, addFavorite, deleteFavorite };
