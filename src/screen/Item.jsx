import { useParams } from "react-router";
import { ItemDetailContainer , Loader} from "../components"
import { useGetProductById  } from "../hooks/useGetProductByid.jsx";

export const Item = () => {
    const { id } = useParams();

    const { product, loading } = useGetProductById (id);
    return loading ? <Loader/> : <ItemDetailContainer product={product} />;
};