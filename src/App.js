import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import CountryInput from './components/CountryInput';
import CountryInfo from './components/CountryInfo';

function App() {
  const [countryInfo, setCountryInfo] = useState(null);

  const searchCountry = async (countryName) => {
    try {
      const response = await axios.get(`/api/country?name=${countryName}`);
      setCountryInfo(response.data);
    } catch (error) {
      console.error('Error fetching country data:', error);
      setCountryInfo(null);
    }
  };

  return (
    <div className="container mt-5"> {/* Apply Bootstrap container class and top margin */}
      <h1>Country Information App</h1>
      <CountryInput onSearch={searchCountry} />
      <CountryInfo country={countryInfo} />
    </div>
  );
}

export default App;
