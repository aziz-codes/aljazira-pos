import React from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-slate-100 max-h-screen">
      <Navbar />

      <main className="z-0 relative w-full flex flex-col md:flex-row gap-3 h-screen max-h-screen justify-between">
        <div>Table goes here</div>
        <div className="md:w-1/2 max-h-screen w-full min-h-full  flex flex-col">
          <h1 className="font-bold tracking-normal text-center">
            What We Have Today !
          </h1>
          <div
            className="flex flex-wrap w-full relative
           pt-4 gap-3 max-h-full overflow-y-auto scrollbar  scrollbar-track-gray-100"
          >
            <Items />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
