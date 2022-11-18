import React from "react";

const Table = ({ items }) => {
  console.log(items);
  return (
    <div className="relative flex flex-col w-full">
      <div className="flex w-full flex-row justify-between gap-2 p-2 h-10 shadow-xl">
        <label>Sno</label>
        <label>Name</label>
        <label>Price</label>
        <label>Qty</label>
      </div>
      <div className="flex flex-row w-full justify-between gap-2 p-2 h-10 divide-x-2">
        {/* {items &&
          items.map((item, index) => (
            <div>
              <h1>1</h1>
              <label>{item.name}</label>
              <label>{item.price}</label>
              <label>1</label>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default Table;
