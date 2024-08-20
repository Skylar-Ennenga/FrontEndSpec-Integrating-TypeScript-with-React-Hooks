import { ShoppingCartItem } from '../types/ShoppingCartItem';
import ShoppingCartAction  from '../types/ShoppingCartAction';










const shoppingCartReducer = (state: ShoppingCartItem[], action: ShoppingCartAction): ShoppingCartItem[] => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'REMOVE_ITEM':
            return state.filter((item) => item.id !== action.payload);
        default:
            return state
  };


};
export default shoppingCartReducer;