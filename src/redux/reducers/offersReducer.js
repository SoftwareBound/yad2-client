import { offersActions } from "../actions/actionType";
export function offersReducer(state = [], action) {
  switch (action.type) {
    case offersActions.LOAD_OFFERS:
      return action.offers;
    case offersActions.ADD_OFFER:
      return [...state, action.offer];
    default:
      return state;
  }
}
