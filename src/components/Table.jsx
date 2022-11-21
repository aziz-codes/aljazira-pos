import React, { useState } from "react";
import { ItemContext } from "../context/ItemsContext";
import {
  TrashIcon,
  PlusSmallIcon,
  MinusSmallIcon,
} from "@heroicons/react/24/outline";
import Invoice from "./Invoice";
const Table = ({
  handlePlusQuantity,
  handleMinusQuantity,
  handleRemoveItem,
}) => {
  const [open, setOpen] = useState(false);
  const { list } = ItemContext();

  let perItemTotal = 0;
  list.map((item) => {
    perItemTotal += item.price * item.quantity;
    return perItemTotal;
  });

  return (
    <div className="w-full m-2 border relative p-4 divide-y-4">
      <div
        className="max-h-[450px] overflow-y-auto scrollbar-track-slate-400 scrollbar-thin scrollbar-corner-rounded
       scrollbar-thumb-slate-100"
      >
        <table className="w-full">
          <thead className="sticky -top-1 bg-white z-49 h-10 w-full">
            <tr className="">
              <td>S#</td>
              <td>Name</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index} className="m-2">
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td className="flex flex-row gap-3 ">
                  <MinusSmallIcon
                    className="w-4 h-4 bg-slate-200 mt-1 cursor-pointer text-sky-500"
                    onClick={() => handleMinusQuantity(item.name)}
                  />
                  {item.quantity}
                  <PlusSmallIcon
                    className="w-4 h-4 bg-slate-200 mt-1 cursor-pointer text-sky-500"
                    onClick={() => handlePlusQuantity(item.name)}
                  />
                </td>
                <td>
                  <TrashIcon
                    className="h-4 w-4 hover:text-red-500 cursor-pointer"
                    onClick={() => {
                      handleRemoveItem(item.name);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row p-2 pt-2 w-full justify-between h-14 shadow-xl items-center">
        <h2 className="font-bold tracking-tight">Total : {perItemTotal}</h2>
        <h4>
          Discount
          <span className="text-sky-500 text-sm font-bold "> 0.00</span>
        </h4>
        {open ? <Invoice /> : null}
        <button
          className="w-48 h-8 bg-sky-500 font-bold tracking-tight p-1 rounded-sm"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Invoice
        </button>
      </div>
    </div>
  );
};

export default Table;
