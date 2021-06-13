import React from "react";
import "../style.css";
const OfferItem = ({ data }) => {
  return (
    <div className="offer_item">
      <div className="offer_title">{data.offerTitle}</div>
      <span>{`Offer Type: ${data.offerType}`}</span>
      <br />
      <br />
      <span>{data.offerDescription}</span>
      <br />
      <span>Phone Number: </span>
      <span>{data.phoneNumber}</span>
      <br />
      <span
        className="offer_email_url"
        onClick={() => {
          window.open("https://gmail.com", "_blank");
        }}
      >
        {`Email: ${data.email}`}
      </span>
    </div>
  );
};

export default OfferItem;
