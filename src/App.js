import React from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import { ItemContext } from "./context/ItemsContext";

const App = () => {
  const { list } = ItemContext();
  console.log(list);
  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar />

      <div className="flex flex-col md:flex-row  mt-14 w-full">
        <div className="w-1/2 max-h-[500px] overflow-y-auto scrollbar border">
          <Table />
        </div>
        <div className="flex flex-wrap  w-1/2 bg-green  max-h-[500px] overflow-y-auto scrollbar border gap-4 justify-center pt-2">
          <Items />
        </div>
      </div>
    </div>
  );
};

export default App;
