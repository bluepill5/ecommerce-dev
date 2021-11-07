import ItemList from './ItemList';
import LoadingPage from './LoadingPage';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {firestore} from "./firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    // pagina de espera
    setLoading(true);
    // referencia a la db
    const db = firestore;
    // referencia a la coleccion
    const collection = db.collection("products");
    // se hace la consulta: get, where, doc, add
    const query = collection.get();

    query
      .then((res) => {
        const documents = res.docs;
        const products = [];
        documents.forEach((producto) => {
          const id = producto.id;
          const elements = producto.data();
          const c_product = { id, ...elements };
          products.push(c_product);
        });
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <main>
      {loading ? <LoadingPage />: <ItemList products={products}/>}
    </main>
  );
};

export default ItemListContainer;
