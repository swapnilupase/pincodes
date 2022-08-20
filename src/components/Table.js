import React from "react";

const Table = ({ data }) => {
  const renderBody = () => {
    if (!data || data.length === 0) {
      return (
        <tr>
          <td colSpan={"5"}>No data available</td>
        </tr>
      );
    }
    return data.map((res) => {
      return (
        <tr>
          <td>{res.Pincode}</td>
          <td>Not available</td>
          <td>{res.Name}</td>
          <td>{res.State}</td>
          <td>{res.Region}</td>
          <td>{res.DeliveryStatus === "Delivery" ? "YES" : "NO"}</td>
        </tr>
      );
    });
  };
  return (
    <div className="table">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>PINCODE</th>
              <th>COURIER COMPANY</th>
              <th>CITY NAME</th>
              <th>STATE NAME</th>
              <th>Region</th>
              <th>COD</th>
            </tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
