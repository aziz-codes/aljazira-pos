import React from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar />

      <div className="flex flex-col md:flex-row  mt-14 w-full">
        <div className="md:w-1/2 w-full max-h-[500px] overflow-y-auto scrollbar border">
          <Table />
        </div>

        <div
          className="flex flex-wrap w-full md:w-1/2 bg-green  max-h-[500px] overflow-y-auto scrollbar
         border gap-4 justify-center pt-2"
        >
          <Items />
        </div>
      </div>
    </div>
  );
};

export default App;
