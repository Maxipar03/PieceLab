import { useState, useEffect } from "react";
import Carousel from '../components/Carusel/Carusel.jsx';
import Loader from "../components/Loader/Loader.jsx";
import ItemListContainer from "../components/ItemListContainer/itemListContainer.jsx";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            const myObjects = [
                {
                    id: 1,
                    name: "Zapatilla",
                    description: "Zapatilla marca adidas",
                },
                {
                    id: 2,
                    name: "Zapatilla",
                    description: "Zapatilla marca Puma",
                },
                {
                    id: 3,
                    name: "Zapatilla",
                    description: "Zapatilla marca Nike",
                },
                {
                    id: 4,
                    name: "Zapatilla",
                    description: "Zapatilla marca Jordan",
                },
            ];
            resolve(myObjects);
        });

        myPromise
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <Carousel />
            {loading ? <Loader/> : <ItemListContainer products={products} /> }
        </>
    )
};

export default Home;