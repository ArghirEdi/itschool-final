import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CountryPage = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((json) => setCountry(json));
  }, [name]);

  if (!country && !error) return <div>Loading...</div>;

  const [singleCountry] = country;

  return (
    <div className="country-details">
      {error && <p>{error}</p>}
      {singleCountry && (
        <div>
          <h1>{singleCountry.name.common}</h1>
          <img src={singleCountry.flags.png} alt={singleCountry.name.common} />
          <p>Capital: {singleCountry.capital[0]}</p>
          <p>Population: {singleCountry.population}</p>
        </div>
      )}
    </div>
  );
};

export default CountryPage;
