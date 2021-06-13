import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions/filterActions";
import { useHistory } from "react-router-dom";
const SearchBarMain = () => {
  const [offerTypeFilter, setOfferTypeFilter] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const setFilteredOffers = (e) => {
    e.preventDefault();
    dispatch(setFilter(offerTypeFilter));
    history.push("/home");
  };
  const clearFilteredOffers = (e) => {
    e.preventDefault();
    setOfferTypeFilter("");
    dispatch(setFilter(""));

    history.push("/home");
  };
  return (
    <div className="search_bar">
      <form className="form-inline my-2  my-lg-0" target="_self">
        <input
          className="form-control mr-sm-2 mb-2"
          type="search"
          placeholder="Search type offer"
          required="required"
          aria-label="Search"
          value={offerTypeFilter}
          onChange={(e) => {
            setOfferTypeFilter(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-warning my-2 mx-2 my-sm-0"
          type="submit"
          onClick={setFilteredOffers}
        >
          Search
        </button>
        <button
          className="btn btn-outline-warning my-2 my-sm-0"
          type="submit"
          onClick={clearFilteredOffers}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default SearchBarMain;
