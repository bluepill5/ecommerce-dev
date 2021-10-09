import ItemList from './ItemList';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    console.log('Aca hago el pedido')
  }, [id]);

  return (
    <main>
      <ItemList />
    </main>
  );
};

export default ItemListContainer;
