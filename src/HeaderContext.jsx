import { createContext, useState } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    // define state to be accessed via the useContext hook
    const [quantities, setQuantities] = useState({}); // Store quantities for each item by ID

    // console.log(quantities);

    // Sum up the quantities for all categories
    const totalQuantity = Object.values(quantities).reduce((acc, quantity) => acc + quantity, 0);

    // Handle quantity change for a specific category
    const handleQuantityBlur = (e, id) => {
        const value = parseInt(e.target.value) || 0;
        setQuantities((prevQuantities) => {
            return {
                ...prevQuantities,
                [id]: value, // Update quantity for the specific category ID
            };
        });
    };

    return (
        <HeaderContext.Provider value={{ quantities, totalQuantity, handleQuantityBlur }}>
            {children}
        </HeaderContext.Provider>
    );
};
