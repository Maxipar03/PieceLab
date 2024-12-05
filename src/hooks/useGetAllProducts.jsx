import { useState, useEffect } from "react";

import { getAllProducts } from "../service/productService.jsx";

export const useGetAllProducts = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false));
    }, []);

    return { loading, products };
};