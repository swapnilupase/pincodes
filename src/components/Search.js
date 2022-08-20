import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const Search = ({ onSubmit }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState({
    isError: false,
    errorMsg: "",
  });
  const handleChangle = (e) => {
    const val = e.target.value;
    setSearch(val);
    const errObj = {
      isError: false,
      errorMsg: "",
    };
    if (val === "") {
      errObj.isError = true;
      errObj.errorMsg = "Please enter pincode.";
    } else if (isNaN(val)) {
      errObj.isError = true;
      errObj.errorMsg = "Please enter numbers only.";
    } else if (val.length !== 6) {
      errObj.isError = true;
      errObj.errorMsg = "Pincode should be 6 character long.";
    }
    setError(errObj);
  };
  const handleSubmit = () => {
    if (error.isError) return null;
    onSubmit(search);
  };
  return (
    <div className="seach">
      <div className="search-wrapper">
        <label>INDIAN PINCODE SEARCH:</label>
        <input type="text" onChange={handleChangle} />
        <button onClick={handleSubmit}>Check</button>
      </div>
      {error.isError && <ErrorMessage message={error.errorMsg} />}
    </div>
  );
};

export default Search;
