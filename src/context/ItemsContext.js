import { useState, useContext, createContext } from "react";

const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
  const [list, setList] = useState([]);

  // let themeMode = localStorage.setItem(
  //   "theme",
  //   JSON.stringify({
  //     dark_mode: false,
  //   })
  // );
  // let mode = undefined;

  // const currentThemeMode = JSON.parse(localStorage.getItem("theme"));
  // if (currentThemeMode) {
  //   mode = currentThemeMode.dark_mode;
  // }
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ItemsContext.Provider value={{ list, setList, darkMode, setDarkMode }}>
      {children}
    </ItemsContext.Provider>
  );
};
export const ItemContext = () => useContext(ItemsContext);
