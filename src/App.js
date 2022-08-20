import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
  const [result, setResult] = useState(null);
  const [apiError, setApiError] = useState({ isError: false, errorMsg: "" });
  const handleSubmit = async (searchString) => {
    console.log(searchString);
    const err = { isError: false, errorMsg: "" };
    const res = await axios.get(
      `https://api.postalpincode.in/pincode/${searchString}`
    );
    if (res.status === 200 && res.data[0].Status === "Error") {
      err.isError = true;
      err.errorMsg = res.data[0].Message;
      setResult(null);
    } else if (res.status !== 200) {
      err.isError = true;
      err.errorMsg = "Something went wrong, please try again later.";
      setResult(null);
    } else {
      setResult(res.data[0].PostOffice);
    }
    setApiError(err);
  };
  return (
    <div className="App">
      <Search onSubmit={handleSubmit} />
      {apiError.isError && <ErrorMessage message={apiError.errorMsg} />}
      {!apiError.isError && result && <Table data={result} />}
    </div>
  );
}

export default App;
