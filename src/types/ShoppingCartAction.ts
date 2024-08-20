import {ShoppingCartItem} from './ShoppingCartItem';




type ShoppingCartAction =
  | { type: 'ADD_ITEM'; payload: ShoppingCartItem }
  | { type: 'REMOVE_ITEM'; payload: number };
    

  
  
  
  export default ShoppingCartAction;