import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export const useGetAllProducts = (collectionName) => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const collectionitmes = collection(db, collectionName)
        getDocs(collectionitmes)
        .then((snapshot) => {
            setItems(
                snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        ...doc.data()
                    }
                ))
            )
        })
        .catch((error) => console.log(error))
        .finally(() => { setLoading(false) })
    }, []);

    return { loading, items };
};