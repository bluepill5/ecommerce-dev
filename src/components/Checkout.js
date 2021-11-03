import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useCart } from '../CartContext';
import firebase from 'firebase';
import { firestore } from "./firebase";
import LoadingPage from './LoadingPage';
import Swal from 'sweetalert2';

const Checkout = () => {
    const {carrito, calcTotal, clearCart} = useCart();
    const [loading, setLoading] = useState(false);
    
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '', 
        tel: ''
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if (values.nombre.length < 3) {
        alert("Nombre inválido");
        return;
      }

      if (values.nombre.length < 3) {
        alert("Apellido inválido");
        return;
      }

      if (values.nombre.length < 3) {
        alert("Email inválido");
        return;
      }

      if (values.tel.length < 7) {
        alert("Teléfono inválido");
        return;
      }

      const orden = {
        buyer: {
          ...values,
        },
        // items: carrito,
        items: carrito.map((ele) => ({
          id: ele.id,
          price: ele.price,
          quantity: ele.quantity,
        })),
        total: calcTotal(),
        date: firebase.firestore.Timestamp.fromDate(new Date()),
      };

      // referencia a la db
      const db = firestore;
      // referencia a la coleccion
      const collection = db.collection("orders");
      // pagina de espera
      setLoading(true);

      collection
        .add(orden)
        .then((res) => {
          console.log(res.id);
          Swal.fire({
            icon: 'success',
            title: 'Su compra fue registrada',
            text: `Guarde su número de orden: ${res.id}`,
            willClose: () => {
                clearCart();
            }
          });
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Error inesperado',
                text: `${err}`,
                willClose: () => {
                    clearCart();
                }
              });            
        })
        .finally(() => {
          setLoading(false);
        });
    }

    return (
        <>
        {carrito.length === 0 && <Redirect to="/" />}
        {loading && <LoadingPage />}
        <div>
            <h2>Complete sus datos</h2>
            <hr/>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h2>Formulario</h2>
                    <input 
                      className="form-control"
                      type="text"
                      placeholder="Nombre"
                      name="nombre"
                      value={values.nombre}
                      onChange={handleInputChange}
                    />
                    {values.nombre === 0 && <small>Este campor es obligatorios</small>}
                    <input 
                      className="form-control"
                      type="text"
                      placeholder="Apellido"
                      name="apellido"
                      value={values.apellido}
                      onChange={handleInputChange}
                    />
                    {values.apellido === 0 && <small>Este campor es obligatorios</small>}
                    <input 
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleInputChange}
                    />
                    {values.email === 0 && <small>Este campor es obligatorios</small>}
                    <input 
                      className="form-control"
                      type="tel"
                      placeholder="Teléfono"
                      name="tel"
                      value={values.tel}
                      onChange={handleInputChange}
                    />
                    {values.tel === 0 && <small>Este campor es obligatorios</small>}

                    <button className="btn btn-primary m-3" type="submit" disabled={loading}>Finalizar</button>
                </form>
            </div>
        </div>
        </>
    );
};

export default Checkout;

