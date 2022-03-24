import { Button } from "bootstrap";
import React, { useState } from "react";
import Select from "react-select";
import locationOptions from "../util/locationOptions";
import searchKijiji from "../util/scraper";

const SearchBar = () => {

    const [location, setLocation] = useState(locationOptions[2])
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(2000)

    return (
        <div>
            <Select value={location} onChange={(value) => setLocation(value)} options={locationOptions}/>
            <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            <button onClick={searchKijiji(location.value, minPrice, maxPrice)}>Search</button>
        </div>
    )

}

export default SearchBar