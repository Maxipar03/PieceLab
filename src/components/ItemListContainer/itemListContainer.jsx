import { Flex } from "@chakra-ui/react";
import { ItemCard } from "../index";

export const ItemListContainer = ({ products }) => {
  return (
    <Flex justifyContent="space-between" flexWrap="wrap" gap="4" p="4">
      {products.map((product) => {
        return <ItemCard key={product.id} products={product} />;
      })}
    </Flex>
  );
};

