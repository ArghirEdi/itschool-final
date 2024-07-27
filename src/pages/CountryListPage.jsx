import React, { useState } from "react";
import CountryList from "../components/CountryList";

const CountryListPage = () => {
  const [countries, setCountries] = useState([]);

  fetch(`https://restcountries.com/v3.1/region/europe`)
    .then((response) => response.json())
    .then((json) => setCountries(json));

  return (
    <div>
      <h1>European Countries</h1>
      <CountryList countries={countries} />
    </div>
  );
};

export default CountryListPage;
