import { useState, useContext, createContext } from "react";

const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const myname = "aziz";

  return (
    <ItemsContext.Provider value={{ list, setList, myname }}>
      {children}
    </ItemsContext.Provider>
  );
};
export const ItemContext = () => useContext(ItemsContext);
