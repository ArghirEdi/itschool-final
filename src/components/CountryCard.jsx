import React from "react";
import { Link } from "react-router-dom";
import { useFavoriteContext } from "../App";

const CountryCard = ({ country }) => {
  const { addFavorite, removeFromFavorite } = useFavoriteContext();
  const isFavoriteUrl = window.location.pathname.includes("favorites");

  return (
    <div className="country-card">
      <Link key={country.name.common} to={`/country/${country.name.common}`}>
        <h3>{country.name.common}</h3>
      </Link>
      <img src={country.flags.png} alt={country.name.common} />
      {isFavoriteUrl && (
        <button
          onClick={() => {
            removeFromFavorite(country);
          }}
        >
          Sterge din favorite
        </button>
      )}
      {!isFavoriteUrl && (
        <button
          onClick={() => {
            addFavorite(country);
          }}
        >
          Adauga la favorite
        </button>
      )}
    </div>
  );
};

export default CountryCard;
