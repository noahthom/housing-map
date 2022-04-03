const housesDefault = []

const housesReducer = (state = housesDefault, action) => {
    switch(action.type){
        case 'ADD_HOUSES':
            return action.houses
        case 'FLIP_SHOW':
            return state.map((house) => {
                if(house.id === action.id){
                    return {
                        ...house,
                        show: !house.show
                    }
                }else{
                    return house
                }
            })
        default:
            return state
    }
}

export default housesReducer