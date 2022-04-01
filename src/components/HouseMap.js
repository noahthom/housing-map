import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'



const HouseMap = () => {

    const [mapCenter, setMapCenter] = useState({lat: 0, lng: 0})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setMapCenter({lat: position.coords.latitude, lng: position.coords.longitude})
        })
    })

    return (
        
        <div style={{height: '90vh', width: '100%'}}>
            <GoogleMapReact
            bootstrapURLKeys={{key: "AIzaSyBmdWIAJ1F4Iv8vaJoqH-qznJkO_2omCog"}}
            center={mapCenter}
            defaultZoom={12}
            >

            </GoogleMapReact>
        </div>
    )
}

export default HouseMap