// HeaderContext.js
import { createContext, useState } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    const [headerData, setHeaderData] = useState({});

    return (
        <HeaderContext.Provider value={{ headerData, setHeaderData }}>
            {children}
        </HeaderContext.Provider>
    );
};
