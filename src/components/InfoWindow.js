import React from "react";

const InfoWindow = (props) => {

    const infoWindowStyle = {
        position: 'relative',
        bottom: 150,
        left: '-45px',
        width: 400,
        backgroundColor: 'white',
        boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
        padding: 10,
        fontSize: 14,
        zIndex: 100,
    }

    return (
    <div style={infoWindowStyle}>
        <a href={props.url} target="_blank" className="text-decoration-none text-black">
            <div >
                <img src={props.img} height="100" width="100" className="m-3"/>
            </div>
            <div className="m-3">
                {props.title}
            </div>
            <div className="dollar m-3">
                <i className="fa-solid fa-dollar-sign"></i>{props.price}
            </div>
            <div className="m-3">
                Unit Type: {props.unittype.trim().replace(/^\w/, (c) => c.toUpperCase())}
            </div>
            <div className="m-3">
                <i className="fa-solid fa-bed"></i> : {props.numberbedrooms} <i className="fa-solid fa-bath"></i> : {props.numberbathrooms}
            </div>
            <div className="m-3">
                <i className="fa-solid fa-map-pin"></i> : {props.location}
            </div>
        </a>
    </div>
    )
}

export default InfoWindow