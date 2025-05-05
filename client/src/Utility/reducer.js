import { ActionTypes } from "./action.type"

export const initialState = {
    basket: [],
    user : null
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
            } 
            else {
                return {
                    ...state,
                    basket: [...state.basket, { ...action.item, quantity: 1 }]
                };
            }
            case ActionTypes.REMOVE_FROM_BASKET:
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
                let newBasket = [...state.basket];

                if (index >= 0) {
                   if(newBasket[index].quantity > 1){
                        newBasket[index] = {...newBasket[index],quantity:newBasket[index].quantity-1}
                   }
                else{
                    newBasket.splice(index,1)
                   }
                }

                return {
                    ...state,
                    basket: newBasket
                };
                
            case ActionTypes.SET_USER:
                return{
                    ...state,
                    user : action.user
                }
            case ActionTypes.EMPTY_BASKET:
                return{
                    ...state,
                    basket : []
                }
                   
        default:
            return state;
    }
    
}