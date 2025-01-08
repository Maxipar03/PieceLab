import { useGetAllProducts } from "../hooks/useGetAllProducts.jsx";
import { Text } from "@chakra-ui/react";

import { Carusel, ItemListContainer, Loader } from "../components/index.js";

export const Home = () => {
  const { items, loading } = useGetAllProducts("products");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Carusel />
          <Text fontSize={30} fontWeight={"bold"} margin={5}>Todos Los Productos</Text>
          <ItemListContainer products={items} />
        </>
      )}
    </>
  );
}
