import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { flipShow} from '../redux/actions/houses'
import { connect } from 'react-redux'
import Marker from './Marker'
import store from '../app'
import MainPage from './MainPage'
import SpinningLoader from './SpinningLoader'


const HouseMap = (props) => {

    const [houses, setHouses] = useState([])
    
    

    useEffect(() => {
        setHouses(props.houses)
    })


    const onMouseHoverCallBack = (key) => {
        store.dispatch(flipShow(key))
        setHouses(props.houses)
        
    }



    return (
        
        <div style={{height: '90vh', width: '100%'}}>
            {props.loading === true && <SpinningLoader />}
            {props.houses.length !== 0 ? (
            <GoogleMapReact
            bootstrapURLKeys={{key: "AIzaSyBmdWIAJ1F4Iv8vaJoqH-qznJkO_2omCog"}}
            center={{
                lat: props.lat,
                lng: props.lng
            }}
            defaultZoom={12}
            onChildMouseEnter={onMouseHoverCallBack}
            onChildMouseLeave={onMouseHoverCallBack}>
                {houses.map((house) => ( <Marker key={house.id} show={house.show} lat={house.lat} lng={house.lng} house={house}/>))}
            </GoogleMapReact> ) : (<MainPage />)}
        </div>
    )
}


const mapStatetoProps = (state) => {
    return {
        houses: state.houses,
        lat: state.lat,
        lng: state.lng,
        loading: state.loading
    }
}

export default connect(mapStatetoProps)(HouseMap)