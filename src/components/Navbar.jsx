import React, { useState, useEffect } from "react";
import { WifiIcon } from "@heroicons/react/24/outline";
const Navbar = () => {
  const [isOnline, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnline(true);
    });
    window.addEventListener("offline", () => {
      setOnline(false);
    });
  }, []);

  return (
    <div
      className="fixed top-0 z-50 w-full h-10 overflow-hidden flex flex-row
     justify-between items-center shadow-lg bg-white"
    >
      <div className="mx-2">
        {isOnline ? (
          <WifiIcon className="h-5 w-5 text-green-500" title="connected" />
        ) : (
          <WifiIcon className="h-5 w-5 text-red-500" title="not connected" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
