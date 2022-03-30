const axios = require('axios')
import store from '../app'
import { addHouses } from '../redux/actions/houses'


const searchKijiji = (location, minPrice, maxPrice, bedrooms, bathrooms) => {
    
    const body = {
        locationId: location,
        minPrice,
        maxPrice,
        bedrooms,
        bathrooms
    }

    const url = 'https://kijiji-map-backend.herokuapp.com/'

    axios.post(url, body).then((response) => {

        const houses = response.data.map((house) => {
            return {
                title: house.title,
                image: house.image,
                price: house.attributes.price,
                unittype: house.attributes.unittype || 'N/A',
                numberbedrooms: house.attributes.numberbedrooms || 'N/A',
                numberbathrooms: house.attributes.numberbathrooms || 'N/A',
                location: house.attributes.location,
                url: house.url,
                id: house.id,
            }
        })


        store.dispatch(addHouses(houses))
        console.log('done')
    })
    
}

export default searchKijiji