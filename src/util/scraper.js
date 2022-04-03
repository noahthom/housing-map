const axios = require('axios')
import store from '../app'
import { addHouses, setCenter } from '../redux/actions/houses'


const searchKijiji = async (location, locationId, minPrice, maxPrice, bedrooms, bathrooms) => {

    

    const centerMapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=pk.eyJ1Ijoibm9haHRob20iLCJhIjoiY2t0bm1sMzV0MDRiMzJ4cG1rODBxeTFqNyJ9.2KOTXZtFViJvTomSge7HIQ&limit=1'
    const centerResponse = await axios.get(centerMapboxUrl)
    store.dispatch(setCenter(centerResponse.data.features[0].center[1], centerResponse.data.features[0].center[0]))
    
    const body = {
        locationId,
        minPrice,
        maxPrice,
        bedrooms,
        bathrooms
    }

    const url = 'https://kijiji-map-backend.herokuapp.com/'

    axios.post(url, body).then(async (response) => {

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
                show: false
            }
        })

        const coords = []

        houses.forEach(async house => {
            const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(house.location) + '.json?access_token=pk.eyJ1Ijoibm9haHRob20iLCJhIjoiY2t0bm1sMzV0MDRiMzJ4cG1rODBxeTFqNyJ9.2KOTXZtFViJvTomSge7HIQ&limit=1'
            const response = axios.get(mapboxUrl)
            coords.push(response)
            
        });
        
        const resolvedCoords = await Promise.all(coords)
        
        const finalHouses = houses.map((house, i) => {
            return {
                ...house,
                lat: resolvedCoords[i].data.features[0].center[1],
                lng: resolvedCoords[i].data.features[0].center[0]
            }
        })

        store.dispatch(addHouses(finalHouses))

        

        console.log('done')
    })
    
}

export default searchKijiji