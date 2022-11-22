import React, { useState } from "react";
import { Items, Navbar, Table } from "./components/index";
import { items } from "./data/dummy";
import { ItemContext } from "./context/ItemsContext";
const App = () => {
  const { list, setList, darkMode } = ItemContext();
  const [products, setProducts] = useState(items);

  const handleChange = (e) => {
    const filtered = items.filter((item) =>
      item.name.includes(e.toLowerCase())
    );
    setProducts(filtered);
  };

  const handleClickItem = (item) => {
    if (list.includes(item)) {
      let index = list.findIndex((index) => index.name === item.name);
      if (index !== -1) {
        list[index].quantity = list[index].quantity += 1;
        setList([...list]);
      }
    } else {
      setList([...list, item]);
    }
  };

  //function to increment quantity

  const handlePlusQuantity = (name) => {
    let index = list.findIndex((item) => item.name === name);

    if (index !== -1) {
      list[index].quantity = list[index].quantity + 1;
      setList([...list]);
    }
  };
  //handler to decrement quantity

  const handleMinusQuantity = (name) => {
    let index = list.findIndex((item) => item.name === name);

    if (index !== -1) {
      list[index].quantity = list[index].quantity - 1;
      if (list[index].quantity <= 0) {
        list[index].quantity = list[index].quantity = 1;
      }
      setList([...list]);
    }
  };
  //handler for removing item from table

  const handleRemoveItem = (name) => {
    setList(
      list.filter((item) => {
        return item.name !== name;
      })
    );
  };
  return (
    <div
      className={`flex flex-col h-screen  ${
        darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />

      <div className="flex flex-col md:flex-row  mt-14 w-full">
        <div className="md:w-1/2 w-full max-h-screen overflow-y-auto scrollbar">
          <Table
            handlePlusQuantity={handlePlusQuantity}
            handleMinusQuantity={handleMinusQuantity}
            handleRemoveItem={handleRemoveItem}
          />
        </div>

        <div className="flex flex-wrap w-full md:w-1/2 bg-green  max-h-[500px] ">
          <div
            className={`h-10 w-full  ${
              darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
            } shadow-md flex items-center justify-center p-3 border border-white rounded-md`}
          >
            <input
              type="text"
              placeholder="Search for Items"
              className="h-8 rounded-lg w-1/2 p-2 outline-none border border-sky-400 transition-shadow text-black"
              onKeyUp={(e) => {
                handleChange(e.target.value);
              }}
            />
          </div>
          <div
            className="flex flex-wrap overflow-auto 
          gap-4 justify-center pt-2 scrollbar h-full"
          >
            <Items products={products} handleClickItem={handleClickItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
