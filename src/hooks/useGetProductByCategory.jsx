import { useEffect, useState } from "react";
import  {getProductsByCategory} from "../service/productService.jsx";

const useGetProductsByCategory = (id) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductsByCategory(id)
            .then((res) => setProducts(res))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [id]);

    return { products };
};

export default useGetProductsByCategory