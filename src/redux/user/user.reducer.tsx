import { UserActionTypes } from "./index";

const INITIAL_STATE = {
  currentUser: null
}

export const userReducer = (state:object = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}
