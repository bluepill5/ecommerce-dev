import React, { createContext, useState, useContext} from "react";

export const contexto = createContext(/* some value */);

const { Provider } = contexto;

export const useCart = () => {
    return useContext(contexto);
}

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (product, quantity) => {
      if (quantity == 0 || quantity > product.stock) {
        console.log("No se procesa");
      } else {
        if (isInCart(product)) {
          console.log("Esta");
          let item = { ...product };
          item.quantity = quantity;
          carrito.map((elem) => {
            if (product.id == elem.id) elem.quantity = elem.quantity + quantity;
          });
          setCarrito([...carrito]);
        } else {
          let item = { ...product };
          item.quantity = quantity;
          setCarrito([...carrito, item]);
          console.log(carrito);
        }
      }
    };

    const removeItem = (id) => {
        carrito.splice(id, 1);
        setCarrito([...carrito]);
    }

    const clearCart = () => {
        setCarrito([]);
    }

    const isInCart = (product) => {
        return carrito.some((elem) => product.id == elem.id);
    }

    const value_context = {
        carrito,
        addItem,
        removeItem,
        clearCart
    }

    return(
        <Provider value={value_context}>
            {children}
        </Provider>
    );
}

export default CartProvider;