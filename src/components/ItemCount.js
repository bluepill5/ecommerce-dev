import {useState} from 'react';
import StyledLink from './StyledLink';
import '../css/buttonStyle.css';
import Swal from 'sweetalert2';

const ItemCount = (props) => {
    const {stock, initial, onAdd} = props;
    const [quantity, setQuantity] = useState(initial);

    const addQuantity = () => {
        setQuantity(quantity + 1);
    }

    const minusQuantity = () => {
        setQuantity(quantity - 1);
    }

    const confirm = () => {
      onAdd(quantity);
      if (quantity > 0) {
        Swal.fire({
          icon: 'success',
          title: 'Se agregaron productos al carrito',
          text: `Continuar comprando`,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'No se seleccionaron productos',
          text: `Continuar comprando`,
        });
      }
    }

    return (
      <div>
        <div className="count">
          <button
            className="icon-minus"
            onClick={minusQuantity}
            disabled={quantity === 0}
          >
            <i className="material-icons">remove</i>
          </button>
          <p className="counter">{quantity}</p>
          <button
            className="icon-add"
            onClick={addQuantity}
            disabled={quantity >= stock}
          >
            <i className="material-icons">add</i>
          </button>
        </div>
        <div className="containerButton">
          <button className="buttonCarrito" onClick={confirm}>
            Agregar
          </button>
          <>
          <StyledLink to="/cart">
            <button className="buttonCarrito">Confirmar</button>
          </StyledLink>
          </>
        </div>
      </div>
    );
}

export default ItemCount;
