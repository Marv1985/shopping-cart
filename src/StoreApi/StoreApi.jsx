import { useState, useEffect } from "react";

const StoreApi = () => {

    const [categories, setCategory] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setCategory(json))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [])

    return {categories, error, loading};
}

export default StoreApi