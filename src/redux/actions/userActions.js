import { userActions } from "./actionType";

export function setCurrentUser(user) {
  return {
    type: userActions.SET_CURRENT_USER,
    userDetails: {
      userToken: `${user.token}`,
      userDetails: user.result,
    },
  };
}

//if dont work,the problem is in Bearer word
