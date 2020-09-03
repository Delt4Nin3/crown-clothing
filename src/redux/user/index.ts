import { User } from "../../interfaces";
import { createSelector } from "reselect";

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

const selectUser = (state: any) => state.user;

const selectCurrentUser = createSelector(
  [selectUser],
  (user: any) => user.currentUser
);

export { userReducer, setCurrentUser, selectCurrentUser, UserActionTypes }
