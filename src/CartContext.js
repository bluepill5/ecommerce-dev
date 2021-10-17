import React, { createContext, useState, useContext} from "react";

export const contexto = createContext(/* some value */);

const { Provider } = contexto;

export const useCart = () => {
    return useContext(contexto);
}

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (product, quantity) => {
        if (quantity == 0) {
            console.log("No se puede")
        } else {
            setCarrito([...carrito, product]);
        }        
    }

    const removeItem = (id) => {
        let carritoTemp = carrito;
        carritoTemp.splice(id, 1)
        setCarrito(carritoTemp);
    }

    const clearCart = () => {
        setCarrito([]);
    }

    const isInCart = (product) => {

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