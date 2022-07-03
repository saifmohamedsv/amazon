export const initState = {
    basket: []
}

export const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "ADD_TO_BASKET" :
            return {...state, basket: [...state.basket, action.payload]}
        case "REMOVE_FROM_BASKET" :
            return {...state, basket: state.basket.filter(item => item.title !== action.payload)}
        default:
            return state
    }
}

export default reducer