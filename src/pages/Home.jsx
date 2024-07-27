import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CountryList from "../components/CountryList";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  const searchCountries = (query) => {
    fetch(`https://restcountries.com/v3.1/name/${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setCountries(data);
        } else {
          setCountries([]);
        }
      });
  };

  return (
    <div className="search-div">
      <h1>Search for a Country</h1>
      <SearchBar onSearch={searchCountries} />
      <CountryList countries={countries} />
    </div>
  );
};

export default HomePage;
