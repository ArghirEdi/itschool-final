import React, { createContext, useContext, useState } from "react";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Favorites from "./pages/Favorites";
import CountryPage from "./pages/CountryPage";
import CountryListPage from "./pages/CountryListPage";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
      </>
    ),
  },
  {
    path: "/countries",
    element: (
      <>
        <Header />
        <CountryListPage />
      </>
    ),
  },
  {
    path: "/country/:name",
    element: (
      <>
        <Header />
        <CountryPage />
      </>
    ),
  },
  {
    path: "/favorites",
    element: (
      <>
        <Header />
        <Favorites />
      </>
    ),
  },
]);

const FavoriteContext = createContext(null);

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (country) => {
    if (
      !favorites.map((val) => val.name.common).includes(country.name.common)
    ) {
      setFavorites([...favorites, country]);
    }
  };

  const removeFromFavorite = (country) => {
    if (favorites.map((val) => val.name.common).includes(country.name.common)) {
      const favoritesCopy = favorites;
      const index = favorites.findIndex(
        (val) => val.name.common === country.name.common
      );
      favoritesCopy.splice(index, 1);
      setFavorites(favoritesCopy);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFromFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error(
      "FavoriteContent must be called from within the FavoriteContextProvider"
    );
  }

  return context;
};

function App() {
  return (
    <FavoriteContextProvider>
      <RouterProvider router={router} />
    </FavoriteContextProvider>
  );
}

export default App;
