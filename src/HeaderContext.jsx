import { createContext, useState } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    // define state to be accessed via the useContext hook
    const [quantities, setQuantities] = useState({}); // Store quantities for each item by ID

    // Extracts the values of the quantities object into an array
    // Object.values returns an array of values from the quantities object
    // reduce() iterates over the array of values to accumulate a result
    // (acc, quantity) are the parameters of the callback function:
    // - acc is the accumulator (stores the running total)
    // - quantity is the current value being processed
    // acc + quantity adds the current value to the accumulator
    // 0 is the initial value of the accumulator (start sum at 0)
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
    
  function add(){
    const sum = 2+2
    function addup() {
        return sum + 5
    }
  }

    return (
        <HeaderContext.Provider value={{ quantities, totalQuantity, handleQuantityBlur }}>
            {children}
        </HeaderContext.Provider>
    );
};
