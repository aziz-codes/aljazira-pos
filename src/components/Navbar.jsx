import React, { useState } from "react";
const Navbar = () => {
  const [isOnline, setOnline] = useState(navigator.onLine);
  return (
    <div
      className="fixed top-0 z-50 w-full h-10 overflow-hidden flex flex-row
     justify-between items-center shadow-lg bg-white"
    >
      <h1> you are {isOnline ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default Navbar;
