const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
}

const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

const INITIAL_STATE = {
  hidden: true
}

const cartReducer = (state: object = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        // @ts-ignore-next-line
        hidden: (state.hidden ? false : true),
      }
    default:
      return state
  }
}

export { cartReducer, toggleCartHidden, CartActionTypes }
