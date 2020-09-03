import { createSelector } from "reselect";
import { CartItem, Item } from "../../interfaces";

const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEM: 'CLEAR_ITEM',
}

const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

const addItem = (item: Item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

const removeItem = (item: Item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

const clearItem = (item: Item) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item,
})

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
        hidden: (!state.hidden),
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // @ts-ignore-next-line
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        // @ts-ignore-next-line
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        // @ts-ignore-next-line
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    default:
      return state
  }
}

const addItemToCart = (cartItems: CartItem[], cartItemToAdd: Item) => {
  const existingCartItem = cartItems.find((cartItem: Item) => {
    return cartItem.id === cartItemToAdd.id
  });

  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    )
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: Item) => {
  const existingCartItem = cartItems.find((cartItem: Item) => {
    return cartItem.id === cartItemToRemove.id
  });

  // @ts-ignore-next-line
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem: CartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem: any) =>
    cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
  )
}

const selectCart = (state: any) => state.cart;

const selectCartItems = createSelector([selectCart], cart => cart.cartItems)

const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuantity: number, cartItem: CartItem) => {
      return accumulatedQuantity + cartItem.quantity
    }, 0
  )
)

const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuantity: number, cartItem: CartItem) => {
      return accumulatedQuantity + (cartItem.quantity * cartItem.price)
    }, 0
  )
)

export {
  cartReducer,
  toggleCartHidden,
  addItem,
  removeItem,
  clearItem,
  CartActionTypes,
  selectCartHidden,
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal
}
