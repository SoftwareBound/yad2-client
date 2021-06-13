import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OfferItem from "./OfferItem";
import "../style.css";
const OffersContainer = () => {
  const offers = useSelector((state) => state.offersReducer);
  const filterWord = useSelector((state) => state.filterReducer);
  const [offersState, setOfferState] = useState([]);
  useEffect(() => {
    setOfferState(offers);
  }, [offers]);
  useEffect(() => {
    if (!filterWord) {
      setOfferState(offers);

      return;
    }
    setOfferState(
      offers.filter((offer) => offer.offerType.toLowerCase() === filterWord)
    );
  }, [filterWord]);

  if (!offers.length) {
    return <h1>Offers are loading</h1>;
  }
  return (
    <div className="col offers_container">
      {offersState.map((offer, i) => (
        <OfferItem key={i} data={offer} />
      ))}
    </div>
  );
};

export default OffersContainer;
