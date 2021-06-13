import { loginActions } from "./actionType";

export function setLoginStatus(status) {
  return { type: loginActions.SET_LOGIN_STATUS, status: status };
}
