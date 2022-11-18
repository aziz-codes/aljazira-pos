import React from "react";
import { ItemContext } from "../context/ItemsContext";
const Table = () => {
  const { list } = ItemContext();
  return (
    <table className="w-full m-2 border relative p-2">
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
            <td>1</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
