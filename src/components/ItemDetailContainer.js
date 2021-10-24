import {useEffect, useState} from "react";
import {useParams} from "react-router";
import ItemDetail from "./ItemDetail";
import {firestore} from "./firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // referencia a la db
    const db = firestore;
    // referencia a la coleccion
    const collection = db.collection("products");
    // se hace la consulta: get, where, doc, add
    let query = collection.doc(id);
    query = query.get();

    query
      .then((doc) => {
        setProduct(doc.data());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;

