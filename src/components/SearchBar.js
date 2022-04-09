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
        <div className="container my-4">
            <div className="row">
                <div className="col">
                    City
                </div>
                <div className="col">
                    Max Price
                </div>
                <div className="col">
                    Min Price
                </div>
                <div className="col">
                    Number of Bedrooms
                </div>
                <div className="col">
                    Number of Bathrooms
                </div>
                <div className="col">

                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Select value={location} onChange={(value) => setLocation(value)} options={locationOptions}/>
                </div>
                <div className="col input-group-md">
                    <input className="form-control-lg" min="0" type="number" value={minPrice} onChange={(e) => setMinPrice(parseInt(e.target.value))} />
                    
                </div>
                <div className="col">
                    <input className="form-control-lg" min="0" type="number" value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value))} />
                </div>
                <div className="col">
                    <input className="form-control-lg" min="0" type="number" value={bedrooms} onChange={(e) => setBedrooms(parseInt(e.target.value))} />
                </div>
                <div className="col">
                    <input className="form-control-lg" min="0" type="number" value={bathrooms} onChange={(e) => setBathrooms(parseInt(e.target.value))} />
                </div>
                <div className="col">
                    <button className="btn-lg btn-primary" onClick={() => searchKijiji(location.label, location.value, minPrice, maxPrice, bedrooms, bathrooms)}>Search</button>
                </div>
            </div>     
        </div>
    )

}

export default SearchBar