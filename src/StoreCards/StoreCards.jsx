import StoreApi from "../StoreApi/StoreApi";
import styles from './StoreCards.module.css';
import { useContext, useState, useEffect } from "react";
import { HeaderContext } from "../HeaderContext"; // Import HeaderContext

const StoreCards = () => {
    const { setHeaderData } = useContext(HeaderContext); // Access the context
    const { categories, error, loading } = StoreApi();
    const [quantities, setQuantities] = useState({}); // Store quantities for each item by ID

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
    // Sum up the quantities for all categories
    const totalQuantity = Object.values(quantities).reduce((acc, quantity) => acc + quantity, 0);

    // Update header data dynamically based on totalQuantity
    useEffect(() => {
        setHeaderData({ totalQuantity });
    }, [totalQuantity, setHeaderData]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <div className={styles.cardsContainer}>
            <ul>
                {categories.map((category) => (
                    <li key={category.id} className={styles.card}>
                        <img src={category.image} alt="" />
                        <p>{category.description}</p>
                        <div className={styles.quantity}>
                            <p className={styles.price}>£{category.price}</p>
                            <div>
                                <label htmlFor={`quantity-${category.id}`}>Qty: </label>
                                <input 
                                    min="0"
                                    id={`quantity-${category.id}`} 
                                    type="number" 
                                    onChange={(e) => handleQuantityBlur(e, category.id)} // Pass category id
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StoreCards;
