import React from 'react';

function CountryInfo({ country }) {
  if (!country) return null;

  return (
    <div>
      <h2>Country Information</h2>
      <p>Name: {country.name}</p>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Area: {country.area} square kilometers</p>
      <p>Languages: {country.languages.join(', ')}</p>
      <p>Currencies: {country.currencies.join(', ')}</p>
      <p>Region: {country.region}</p>
      {/* Add more fields as needed */}
      <img src={country.flag} alt={`${country.name} flag`} />
    </div>
  );
}

export default CountryInfo;
