import { User } from "../../interfaces";

const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const setCurrentUser = (user: User | null) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state: object = INITIAL_STATE, action: any) => {
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

export { userReducer, setCurrentUser, UserActionTypes }
