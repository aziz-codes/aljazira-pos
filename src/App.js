import React, { useState } from "react";
import { Items, Navbar, Table } from "./components/index";
import { items } from "./data/dummy";
import { ItemContext } from "./context/ItemsContext";
const App = () => {
  const { list, setList } = ItemContext();
  const [products, setProducts] = useState(items);
  const [value, setvalue] = useState("");

  const handleChange = (e) => {
    setvalue(e);
    const filtered = items.filter((item) =>
      item.name.includes(value.toLowerCase())
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
  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar />

      <div className="flex flex-col md:flex-row  mt-14 w-full">
        <div className="md:w-1/2 w-full max-h-screen overflow-y-auto scrollbar border">
          <Table />
        </div>

        <div className="flex flex-wrap w-full md:w-1/2 bg-green  max-h-[500px] ">
          <div className="h-10 w-full bg-white shadow-md flex items-center justify-center p-3">
            <input
              type="text"
              placeholder="Search for Items"
              className="h-8 rounded-sm w-1/2 p-2 outline-none border border-sky-400 transition-shadow"
              onKeyUp={(e) => {
                handleChange(e.target.value);
              }}
            />
          </div>
          <div
            className="flex flex-wrap overflow-auto 
         border gap-4 justify-center pt-2 scrollbar h-full"
          >
            <Items products={products} handleClickItem={handleClickItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
