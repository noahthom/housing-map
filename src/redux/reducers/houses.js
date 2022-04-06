const housesDefault = {
    lat: 0,
    lng: 0,
    houses: [],
    loading: false
}

const housesReducer = (state = housesDefault, action) => {
    switch(action.type){
        case 'ADD_HOUSES':
            return {
                ...state,
                houses: action.houses
            }
        case 'FLIP_SHOW':
            const flippedHouses = state.houses.map((house) => {
                if(house.id === action.id){
                    return {
                        ...house,
                        show: !house.show
                    }
                }else{
                    return house
                }
            })
            return {
                ...state,
                houses: flippedHouses
            }
        case 'SET_CENTER':
            return {
                ...state,
                lat: action.lat,
                lng: action.lng
            }
        case 'FLIP_LOADING':
            return {
                ...state,
                loading: !state.loading
            }
        default:
            return state
    }
}

export default housesReducer