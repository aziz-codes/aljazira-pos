import React, { useState, useEffect } from "react";
import { WifiIcon } from "@heroicons/react/24/outline";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { ItemContext } from "../context/ItemsContext";
const Navbar = () => {
  const [isOnline, setOnline] = useState(navigator.onLine);
  const [checked, setChecked] = useState(false);
  const { darkMode, setDarkMode } = ItemContext();
  console.log(darkMode);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnline(true);
    });
    window.addEventListener("offline", () => {
      setOnline(false);
    });
  }, []);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    // const themeMode = JSON.parse(localStorage.getItem("theme"));
    // if (themeMode) {
    //   localStorage.setItem(
    //     "theme",
    //     JSON.stringify({
    //       dark_mode: true,
    //     })
    //   );
    // }
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`fixed top-0 z-49 w-full h-10 overflow-hidden flex flex-row
      justify-between items-center shadow-lg ${
        darkMode ? "bg-slate-800 text-slate-400" : "bg-white text-black"
      }`}
    >
      <div className="mx-2 flex w-full flex-row gap-3 items-center">
        {isOnline ? (
          <WifiIcon className="h-5 w-5 text-green-500" title="connected" />
        ) : (
          <WifiIcon className="h-5 w-5 text-red-500" title="not connected" />
        )}
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Dark Mode"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Navbar;
