import { offersActions } from "./actionType";
import Axios from "axios";
export function getOffersFromServer() {
  return async function (dispatch) {
    try {
      const dataFromServer = await Axios.get("http://localhost:4000/offers");
      dispatch(loadOffers(dataFromServer.data));
    } catch (e) {
      alert(`trouble getting data from server: ${e}`);
    }
  };
}

function loadOffers(offers) {
  return { type: offersActions.LOAD_OFFERS, offers: offers };
}

export function addOffer(offer) {
  return { type: offersActions.ADD_OFFER, offer: offer };
}
