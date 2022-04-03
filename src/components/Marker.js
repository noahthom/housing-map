import React from "react";
import InfoWindow from "./InfoWindow";

const Marker = (props) => {


    return (
        <div>
            <i className="fa-solid fa-house fa-lg"></i>
            {props.show && <InfoWindow
            className="m-3"
            title={props.house.title} 
            img={props.house.image} 
            price={props.house.price} 
            unittype={props.house.unittype} 
            numberbedrooms={props.house.numberbedrooms}
            numberbathrooms={props.house.numberbathrooms}
            location={props.house.location}
            url={props.house.url}/>}
        </div>
    )

}

export default Marker