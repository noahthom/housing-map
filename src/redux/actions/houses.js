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


