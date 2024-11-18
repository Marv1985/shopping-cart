import StoreApi from "../StoreApi/StoreApi";
import styles from './StoreCards.module.css';
import { useContext } from "react";
import { HeaderContext } from "../HeaderContext"; // Import HeaderContext

const StoreCards = () => {
    const { quantities, handleQuantityBlur } = useContext(HeaderContext); // Get quantities from context
    const { categories, error, loading } = StoreApi();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <div className={styles.cardsContainer}>
            <ul>
                {categories.map((category) => (
                    <li key={category.id} className={styles.card}>
                        <img src={category.image} alt={category.description} />
                        <p>{category.description}</p>
                        <div className={styles.quantity}>
                            <p className={styles.price}>£{category.price}</p>
                            <div>
                                <label htmlFor={`quantity-${category.id}`}>Qty: </label>
                                <input 
                                    min="0"
                                    id={`quantity-${category.id}`} 
                                    type="number" 
                                    value={quantities[category.id] || 0} // Access quantity from context
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
