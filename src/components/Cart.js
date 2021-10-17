import { useCart } from "../CartContext";
import { useState, useEffect } from "react";

const Cart = () => {
    const {carrito, removeItem} = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
      let tot = 0;
      carrito.map((item) => {
        tot = tot + item.price;
      });
      setTotal(tot);
    }, []);

    console.log(carrito);
    return (
        
      <div className="Container">
        {carrito.map((item, index) => {
          return (
              <ul class="list-group" key={index}>
                  <img src={item.image} width="100px" alt="" />
                  <li class="list-group-item">{item.title}</li>
                  <li class="list-group-item">{item.price}</li>
                  <button onClick={removeItem(item.id)}>Eliminar</button>
              </ul>
          );
        })}
        <h1>Total: {total}</h1>
      </div>
     
    );
}

export default Cart;