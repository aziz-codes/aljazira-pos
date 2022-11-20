import React, { useState } from "react";
import { Backdrop } from "@mui/material";
import { ItemContext } from "../context/ItemsContext";
const Invoice = () => {
  const { list } = ItemContext();
  const [open, setOpen] = useState(true);
  const handleCloseBackdrop = () => {
    setOpen(!open);
  };
  return (
    <Backdrop open={open}>
      <div className="flex flex-col items-center w-[500px] h-[600px] shadow-xl bg-white z-50 divide-y-2">
        <h1 className="font-medium tracking-tight text-lg">
          Your Invoice Details
        </h1>
        <div className="flex flex-row justify-between w-full pl-1 pr-1">
          <label>S.no</label>
          <label>Item</label>
          <label>Quantity</label>
          <label>Total</label>
        </div>
        <div className="w-full mx-3 flex flex-col">
          {list.map((item, index) => (
            <div
              key={index}
              className="mx-2 flex justify-between text-center m-2"
            >
              <span>{index}</span>
              <label className="shrink">{item.name}</label>
              <label>{item.quantity}</label>
              <label>{item.price}</label>
            </div>
          ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default Invoice;
