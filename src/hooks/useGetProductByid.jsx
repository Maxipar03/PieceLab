import { useEffect, useState } from "react";
import { getProductById } from "../service/productService.jsx";

export const useGetProductById = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id)
            .then((res) => setProduct(res))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return {loading , product};
};