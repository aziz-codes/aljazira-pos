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
    <Backdrop open={open} onClick={handleCloseBackdrop}>
      <div className="flex flex-col items-center w-[400px] h-[600px] shadow-xl bg-white z-50 divide-y-2">
        <h1 className="font-medium tracking-tight text-lg pb-3 pt-3">
          Your Invoice Details
        </h1>

        <div className="w-full pl-3 pr-3 flex flex-col text-sm">
          <table className="mt-5">
            <thead>
              <tr className="font-bold text-center divide-x-2">
                <td>S.No</td>
                <td>Item</td>
                <td>Qty</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody className="mt-2">
              {list.map((item, index) => (
                <tr key={index} className="border-b-2 text-center">
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Backdrop>
  );
};

export default Invoice;
