import {useState} from 'react';
import '../css/buttonStyle.css';

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
          <button className="buttonCarrito" onClick={confirm}>Agregar</button>
          <button className="buttonCarrito">Confirmar</button>
        </div>
      </div>
    );
}

export default ItemCount;
