const axios = require('axios')


const geocode = (address) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoibm9haHRob20iLCJhIjoiY2t0bm1sMzV0MDRiMzJ4cG1rODBxeTFqNyJ9.2KOTXZtFViJvTomSge7HIQ&limit=1'

    axios.get(url).then((response) => {
        result = {
            lat: response.data.features[0].center[1],
            long: response.data.features[0].center[0]
        }
        console.log(result)
    })

    

}


geocode('edmonton')