import React from "react";
import { useState, createContext } from "react";

export const ItemList = createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <ItemList.Provider value={[items, setItems]}>
      {props.children}
    </ItemList.Provider>
  );
};
