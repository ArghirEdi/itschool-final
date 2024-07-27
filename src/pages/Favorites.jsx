import React from "react";
import { useFavoriteContext } from "../App";
import CountryCard from "../components/CountryCard";

const Favorites = () => {
  const { favorites } = useFavoriteContext();

  return (
    <div className="country-list">
      {favorites.map((country) => (
        <CountryCard country={country} />
      ))}
    </div>
  );
};

export default Favorites;
