import { useGetAllProducts } from "../hooks/useGetAllProducts.jsx";

import { ItemListContainer, Loader } from "../components/index.js";

export const Home = () => {
  const { products, loading } = useGetAllProducts();

  return loading ? <Loader/> : <ItemListContainer products={products} />;
};

export default Home