import React from "react";
import { items } from "../data/dummy";

const Items = ({ handleClickItem }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col shadow-lg bg-white hover:scale-95 transition-all 
     duration-100 ease-in-out w-44 h-44  rounded-xl cursor-pointer p-2"
          onClick={() => handleClickItem(item)}
        >
          <img
            src={item.image}
            className="h-28 max-h-24 rounded-lg"
            alt={item.name}
          />
          <div className="text-center pt-2">
            <h4 className="font-medium text-lg overflow-hidden whitespace-nowrap text-ellipsis">
              {item.name}
            </h4>
            <span className="text-sm font-bold tracking-tight">
              {item.price} PKR
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Items;
