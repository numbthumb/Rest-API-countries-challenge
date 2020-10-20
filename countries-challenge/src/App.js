import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CountriesList from './CountriesList';
import countriesAll from './countriesAll';
import SearchBar from './SearchBar';
import RegionSelect from './RegionSelect';

function App() {
  const [countriesArray, setCountriesArray] = useState(countriesAll);
  function updateSearch(result) {
    setCountriesArray(result)
  }
  const [regionsOption, setRegionsOption] = useState(countriesAll);
  function selectRegion(result) {
    setRegionsOption(result)
  }
  return (
    <div className="App">
      <Header />
      <SearchBar updateSearch = {updateSearch}/>
      <RegionSelect selectRegion = {handleRegionSelect}/>
      <div className = 'cards-container'>
      {countriesArray.map((country) =>
        <CountriesList country = {country} key = {country.alpha2Code}/>
      )}
      </div>
    </div>
  );
}

export default App;
