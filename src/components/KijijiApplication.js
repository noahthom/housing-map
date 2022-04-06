import React from "react";
import HouseMap from "./HouseMap";
import SearchBar from "./SearchBar";

const KijijiApplication = () => {


    return (
        <div>
            <SearchBar />
            <HouseMap />
            <footer className="footer m-5">
                <div className="container">
                    <span className="text-muted">
                        Created by Noah <a href="https://github.com/noahthom/housing-map" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </span>
                    
                    
                </div>
            </footer>
        </div>
    )

}

export default KijijiApplication