import {useEffect, useState} from "react";
import {useParams} from "react-router";
import ItemDetail from "./ItemDetail";
import LoadingPage from "./LoadingPage";
import {firestore} from "./firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    // pagina de espera
    setLoading(true);
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
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return <>{loading ? <LoadingPage /> : <ItemDetail product={product} />}</>;
};

export default ItemDetailContainer;

