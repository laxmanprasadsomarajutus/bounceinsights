import React, { useState } from 'react';

function CountryInput({ onSearch }) {
  const [countryName, setCountryName] = useState('');

  const handleSearch = () => {
    onSearch(countryName);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a country name"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default CountryInput;
