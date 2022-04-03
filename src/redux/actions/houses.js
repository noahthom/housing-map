export const addHouses = (houses = []) => {
    return {
        type: 'ADD_HOUSES',
        houses
    }
}

export const flipShow = (id) => {
    return {
        type: 'FLIP_SHOW',
        id
    }
}

export const setCenter = (lat = 0, lng = 0) => {
    return {
        type: 'SET_CENTER',
        lat,
        lng
    }
}
