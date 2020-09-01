const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
}

const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

const addItem = (item: any) => ({
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

export { cartReducer, toggleCartHidden, addItem, CartActionTypes }
