import { ActionTypes } from "./action.type"

export const initialState = {
    basket: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        default:
            return state;
    }
}