import { createSelector } from "reselect";
import { CartItem, Item } from "../../interfaces";

const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
}

const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

const addItem = (item: Item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state: object = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        // @ts-ignore-next-line
        hidden: (state.hidden ? false : true),
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // @ts-ignore-next-line
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

const addItemToCart = (cartItems: any, cartItemToAdd: any) => {
  const existingCartItem = cartItems.find((cartItem: any) => {
    return cartItem.id === cartItemToAdd.id
  });

  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    )
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

const selectCart = (state: any) => state.cart;

const selectCartItems = createSelector([selectCart], cart => cart.cartItems)

const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce((accumulatedQuantity: number, cartItem: CartItem) => {
  return accumulatedQuantity + cartItem.quantity
}, 0))


export { cartReducer, toggleCartHidden, addItem, CartActionTypes, selectCartItems, selectCartItemsCount }
