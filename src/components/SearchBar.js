import React, { useState } from "react";
import Select from "react-select";
import locationOptions from "../util/locationOptions";
import searchKijiji from "../util/scraper";

const SearchBar = () => {

    const [location, setLocation] = useState(locationOptions[2])
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(2000)
    const [bedrooms, setBedrooms] = useState(1)
    const [bathrooms, setBathrooms] = useState(1)

    return (
        <div>
            <Select value={location} onChange={(value) => setLocation(value)} options={locationOptions}/>
            <input type="number" value={minPrice} onChange={(e) => setMinPrice(parseInt(e.target.value))} />
            <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value))} />
            <input type="number" value={bedrooms} onChange={(e) => setBedrooms(parseInt(e.target.value))} />
            <input type="number" value={bathrooms} onChange={(e) => setBathrooms(parseInt(e.target.value))} />
            <button onClick={() => searchKijiji(location.label, location.value, minPrice, maxPrice, bedrooms, bathrooms)}>Search</button>
        </div>
    )

}

export default SearchBar