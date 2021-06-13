import { filterActions } from "../actions/actionType";

export function filterReducer(state = "", action) {
  switch (action.type) {
    case filterActions.SET_FILTER_WORD:
      return action.word;
    default:
      return state;
  }
}
