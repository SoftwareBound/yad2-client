import { loginActions } from "../actions/actionType";

export function loginReducer(state = false, action) {
  switch (action.type) {
    case loginActions.SET_LOGIN_STATUS:
      return action.status;
    default:
      return state;
  }
}
