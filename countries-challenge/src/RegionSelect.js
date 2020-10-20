import React from 'react';
import countriesAll from './countriesAll';

const RegionSelect = ({selectRegion}) => {
function handleRegionSelect(event) {
    event.target.option( => country.region);
    selectRegion(regionObject);
}
    return (
        <div>
            <label for = 'region'>Choose a Region  </label>
            <select name = 'region' id = 'region'>
                <option onClick = {handleRegionSelect}/>
            </select>
        </div>
    )
}

export default RegionSelect;