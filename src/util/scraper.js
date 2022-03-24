const kijiji = require('kijiji-scraper')

const searchKijiji = (location, minPrice, maxPrice) => {
    const options = {
        maxResults: 100
    }

    const params = {
        locationId: location,
        categoryId: 30349001,
        minPrice,
        maxPrice
    }

    kijiji.search(params, options).then(ads => {
        console.log(ads)
    }).catch(console.error())
}

export default searchKijiji