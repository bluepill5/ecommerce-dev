import { useCart } from "../CartContext";
import { useState, useEffect } from "react";
import NumberFormat from 'react-number-format';

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
        
      <div className="Container">
        {carrito.map((item, index) => {
          return (
              <ul className="list-group" key={index}>
                  <img src={item.image} width="100px" alt="" />
                  <li className="list-group-item">{item.title}</li>
                  <li className="list-group-item"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'}/></li>
                  <li className="list-group-item">{item.quantity}</li>
                  <button className="icon-minus" onClick={() => {onRemove(index)}}>Eliminar</button>
              </ul>
          );
        })}
        <button className="icon-minus"  onClick={clearCart}>Vaciar Carrito</button>
        <h1>Total: <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1>
      </div>
     
    );
}

export default Cart;