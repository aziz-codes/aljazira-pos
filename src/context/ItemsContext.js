import { useState, useContext, createContext } from "react";

const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <ItemsContext.Provider value={{ list, setList, darkMode, setDarkMode }}>
      {children}
    </ItemsContext.Provider>
  );
};
export const ItemContext = () => useContext(ItemsContext);
