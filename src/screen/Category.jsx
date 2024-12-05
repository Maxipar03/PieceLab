import React from "react";
import { useParams } from "react-router";
import useGetProductsByCategory from "../hooks/useGetProductByCategory";
import { ItemListContainer, Loader } from "../components";

export const Category = () => {
    const { id } = useParams();
    const { loading, products } = useGetProductsByCategory(id);

    return loading ? <Loader /> : <ItemListContainer products={products} />;
};

