import { createContext, useState } from "react";

export const contexto = createContext({nombre:"Test"});

const {Provider} = contexto;

const CustomProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    // const valor_del_contexto = {
    //     nombre,
    //     cambiarNombre
    // };

    return (
        <>
        <Provider>
            {children}
        </Provider>
        </>
    );
}

export default CustomProvider;