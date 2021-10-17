import { useCart } from "../CartContext";
import { useState, useEffect } from "react";

const Cart = () => {
    const {carrito, removeItem} = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
      let tot = 0;
      carrito.map((item) => {
        tot = tot + item.price * item.quantity;
      });
      setTotal(tot);
    }, []);

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
                  <li className="list-group-item">{item.price}</li>
                  <li className="list-group-item">{item.quantity}</li>
                  <button onClick={() => {onRemove(index)}}>Eliminar</button>
              </ul>
          );
        })}
        <h1>Total: {total}</h1>
      </div>
     
    );
}

export default Cart;