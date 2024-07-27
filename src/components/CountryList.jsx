import React from "react";
import CountryCard from "./CountryCard";

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryCard country={country} />
      ))}
    </div>
  );
};

export default CountryList;
