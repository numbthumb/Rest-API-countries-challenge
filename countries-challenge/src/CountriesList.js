import React from 'react';


const CountriesList = ({ country }) => {
    return (
        <div className = 'card'>
            <img className = 'flag' src= {country.flag} alt= 'country-flag'></img>
            <h2 className = 'countryName'>{country.name}</h2>
            <h2 className = 'population'>Population: {country.population}</h2>
            <h2 className = 'region'>Region: {country.region}</h2>
            <h2 className = 'capital'>Capital: {country.capital}</h2>
        </div>
    )
};

export default CountriesList;