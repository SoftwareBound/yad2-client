import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addOffer } from "../redux/actions/offersActions";
import Axios from "axios";
const SubmissionContainer = () => {
  const userDetails = useSelector((state) => state.userReducer);
  const offers = useSelector((state) => state.offersReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const [offerDetails, setOfferDetails] = useState({
    offerTitle: "",
    offerType: "",
    offerDescrption: "",
    phoneNumber: "",
    email: "",
  });
  useEffect(() => {
    return setOfferDetails({
      offerTitle: "",
      offerType: "",
      offerDescrption: "",
      phoneNumber: "",
      email: "",
    });
  }, [offers]);
  const submitOfferForm = async (e) => {
    e.preventDefault();

    try {
      const sendOfferToServer = await Axios.post(
        "http://localhost:4000/offers",
        offerDetails,
        { headers: { "x-access-token": userDetails.userToken } }
      );
      if (sendOfferToServer.data.isAdded) {
        dispatch(addOffer(sendOfferToServer.data.addedOffer));
      } else {
        throw new Error(sendOfferToServer.data.msg);
      }
    } catch (e) {
      alert(e);
    }

    history.push("/home");
  };
  const setOfferData = (e) => {
    setOfferDetails((preValue) => {
      return { ...preValue, [e.target.id]: e.target.value };
    });
  };
  return (
    <div className="submit_container">
      <form onSubmit={submitOfferForm}>
        <div className="mb-2">
          <label htmlFor="offerTitle" className="form-label">
            Offer Title
          </label>
          <input
            type="text"
            className="form-control"
            id="offerTitle"
            aria-describedby="emailHelp"
            required="required"
            value={offerDetails.offerTitle}
            onChange={setOfferData}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="offerType" className="form-label">
            Offer Type
          </label>
          <input
            type="text"
            className="form-control"
            id="offerType"
            aria-describedby="emailHelp"
            required="required"
            value={offerDetails.offerType}
            onChange={setOfferData}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="offerDescrption" className="form-label">
            Offer Description
          </label>
          <input
            type="text"
            className="form-control"
            id="offerDescrption"
            aria-describedby="emailHelp"
            required="required"
            maxLength="200"
            value={offerDetails.offerDescrption}
            onChange={setOfferData}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            aria-describedby="emailHelp"
            required="required"
            value={offerDetails.phoneNumber}
            onChange={setOfferData}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required="required"
            value={offerDetails.email}
            onChange={setOfferData}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmissionContainer;
