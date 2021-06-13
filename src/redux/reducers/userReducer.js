import { userActions } from "../actions/actionType";

export function userReducer(state = {}, action) {
  switch (action.type) {
    case userActions.SET_CURRENT_USER:
      return action.userDetails;
    default:
      return state;
  }
}
