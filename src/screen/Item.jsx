import { useParams } from "react-router";
import { ItemDetailContainer} from "../components/ItemDetailContainer/ItemDetailContainer.jsx";
import { useGetProductById  } from "../hooks/useGetProductByid.jsx";

export const Item = () => {
    const { id } = useParams();

    const { product, loading } = useGetProductById (id);
    return <ItemDetailContainer product={product} />;
};