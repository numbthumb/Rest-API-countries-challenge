import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CountriesList from './CountriesList';
import countriesAll from './countriesAll';
import SearchBar from './SearchBar';
import RegionSelect from './RegionSelect';

function App() {
  const [searchInput, setSearchInput] = useState("");
  // const [countriesArray, setCountriesArray] = useState(countriesAll);
  // function updateSearch(result) {
  //   setCountriesArray(result)
  // }

  function handleSearchInput(event) {
    setSearchInput(event.target.value); 
    // updateSearch(countryObject);
}

  const [regionsOption, setRegionsOption] = useState("");
  function handleRegionEvent(event) {
    setRegionsOption(event.target.value)
  }

  let countryObject = countriesAll.filter(country => country.name.toLowerCase().includes(    searchInput.toLowerCase()  )
  || country.capital.toLowerCase().includes(    searchInput.toLowerCase()  ));
  let regionObject = countryObject.filter(country => country.region.toLowerCase().includes(regionsOption.toLowerCase()))
  return (
    <div className="App">
      <Header />
      <SearchBar handleSearchInput = {handleSearchInput} searchInput = {searchInput}/>
      <RegionSelect handleRegionEvent = {handleRegionEvent} />
      <div className = 'cards-container'>
      {regionObject.map((country) =>
        <CountriesList country = {country} key = {country.alpha2Code}/>
      )}
      </div>
    </div>
  );
}

export default App;
