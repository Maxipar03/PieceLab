import { useState, useEffect } from "react";

import { getAllCategories } from "../service/productService";

export const useGetAllCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories()
            .then((res) => {setCategories(res)})
            .catch((err) => {console.log(err)});
    }, []);

    return { categories };
};