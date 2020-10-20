import React from 'react';
import countriesAll from './countriesAll';

const SearchBar = ({updateSearch}) => {
    function handleSearchInput(event) {
        let keyword = event.target.value;
        let countryObject = countriesAll.filter(country => country.name.toLowerCase().includes(    keyword.toLowerCase()   ));
        updateSearch(countryObject);
    }
    
    return (
        <div className = 'SearchBar'>
            <input 
                type = 'text'
                // value = {searchInput}
                id="CountryName"
                className="form-control"
                placeholder="Search Country"
                onChange={handleSearchInput}
            />
        </div>
    )
}

export default SearchBar;