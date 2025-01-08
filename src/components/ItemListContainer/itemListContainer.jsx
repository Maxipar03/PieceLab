import { Flex } from "@chakra-ui/react";
import { ItemCard } from "../index";

export const ItemListContainer = ({ products }) => {
  return (
    <Flex flexWrap="wrap" gap="10" p="4">
      {products.map((product) => {
        return <ItemCard key={product.id} products={product} />;
      })}
    </Flex>
  );
};

