import { ActionTypes } from "./action.type"

export const initialState = {
    basket: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_BASKET:
            // check if item is exists
            const itemExists = state.basket.find(item => item.id === action.item.id);
            if (itemExists) {
                return {
                    ...state,
                    basket: state.basket.map(item => item.id === action.item.id ? { ...item, quantity: item.quantity + 1 } : item)
                };
            } else {
                return {
                    ...state,
                    basket: [...state.basket, { ...action.item, quantity: 1 }]
                };
                
            }
        default:
            return state;
    }
    
}