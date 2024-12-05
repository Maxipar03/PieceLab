import { useGetAllProducts } from "../hooks/useGetAllProducts.jsx";

import ItemListContainer from "../components/ItemCard/ItemCard.jsx";

const Home = () => {
  const { products } = useGetAllProducts();

  return <ItemListContainer products={products} />;
};

export default Home