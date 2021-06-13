import { filterActions } from "./actionType";

export const setFilter = (word) => {
  return {
    type: filterActions.SET_FILTER_WORD,
    word: word,
  };
};
