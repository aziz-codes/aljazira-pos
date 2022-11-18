import React from "react";
import { ItemContext } from "../context/ItemsContext";

const Table = () => {
  const { list } = ItemContext();

  let perItemTotal = 0;
  list.map((item) => {
    perItemTotal += item.price * item.quantity;
    return perItemTotal;
  });

  return (
    <div className="w-full m-2 border relative p-4 divide-y-4">
      <table className="w-full">
        <thead>
          <tr className="border">
            <td>S.No</td>
            <td>Name</td>
            <td>Price</td>
            <td>Qty</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index} className="m-2">
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Total : {perItemTotal}</h2>
    </div>
  );
};

export default Table;
