import React from "react";
import { useParams } from "react-router";
import useGetProductsByCategory from "../hooks/useGetProductByCategory";
import ItemListContainer from "../components/ItemCard/ItemCard";

const Category = () => {
    const { id } = useParams();
    const { loading, products } = useGetProductsByCategory(id);

    return loading ? <Loader /> : <ItemListContainer products={products} />;
};

export default Category