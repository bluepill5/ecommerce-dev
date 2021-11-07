import { useCart } from "../CartContext";
import { useState, useEffect } from "react";
import NumberFormat from 'react-number-format';
import { Link } from "react-router-dom";

const Cart = () => {
    const {carrito, removeItem, clearCart} = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
      let tot = 0;
      carrito.map((item) => {
        tot = tot + item.price * item.quantity;
      });
      setTotal(tot.toFixed(2));
    }, [carrito]);

    const onRemove = (index) => {
      removeItem(index);
    };

    return (
        
      <div className="Container w-50 text-center mx-auto p-3 mt-2">
        {carrito.map((item, index) => {
          return (
              <ul className="list-group" key={index}>
                  <img className="rounded mx-auto d-block m-3" src={item.image} width="100px" alt="" />
                  <li className="list-group-item">{item.title}</li>
                  <li className="list-group-item"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'}/></li>
                  <li className="list-group-item">{item.quantity}</li>
                  <button className="btn btn-danger" onClick={() => {onRemove(index)}}><i className="material-icons">delete_outline</i></button>
              </ul>
          );
        })}
        <button className="btn btn-danger"  onClick={clearCart}>Vaciar Carrito</button>
        <Link to={`/checkout`} className="btn btn-success m-3">
          Terminar mi compra
        </Link>
        <h1>Total: <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1>
      </div>
    );
}

export default Cart;