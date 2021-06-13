import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SubmissionContainer from "./SubmissionContainer";
import OffersContainer from "./OffersContainer";
import { SearchBarMain } from "../SearchBar";

const HomePage = () => {
  const isLogin = useSelector((state) => state.loginReducer);

  const history = useHistory();
  useEffect(() => {
    if (!isLogin) {
      history.push("/login");
    }
  }, [isLogin]);
  return (
    <div className="container">
      <SearchBarMain />

      <div className="row">
        <div className="col-4">
          <span>
            <h3 className="mb-2">Submit an Offer</h3>
          </span>
          <SubmissionContainer />
        </div>
        <div className="col-8">
          <span>
            <h3 className="mb-2">Offers List</h3>
          </span>
          <OffersContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
