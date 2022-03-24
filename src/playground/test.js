const kijiji = require("kijiji-scraper");

const options = {
    maxResults: 20
};

const params = {
    locationId: 1700203,  
    categoryId: 30349001,  
    sortByName: "priceAsc"  // Show the cheapest listings first
};

// Scrape using returned promise
kijiji.search(params, options).then(ads => {
    // Use the ads array
    for (let i = 0; i < ads.length; ++i) {
        console.log(ads[i].description);
    }
}).catch(console.error);