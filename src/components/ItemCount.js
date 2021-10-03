import {useState, useEffect} from 'react';
import '../css/buttonStyle.css';

const ItemCount = (props) => {
    const {stock, initial} = props;
    const [quantity, setQuantity] = useState(initial);

    const addQuantity = () => {
        setQuantity(quantity + 1);
    }

    const minusQuantity = () => {
        setQuantity(quantity - 1);
    }

    return (
      <div>
        <div className="Count">
          <button
            className="icon-minus"
            onClick={minusQuantity}
            disabled={quantity === 0}
          >
            <i className="material-icons">remove</i>
          </button>
          {" -   " + quantity + "  - "}
          <button
            className="icon-add"
            onClick={addQuantity}
            disabled={quantity >= stock}
          >
            <i className="material-icons">add</i>
          </button>
        </div>
        <div>
          <button className="buttonCarrito">Agregar al carrito</button>
        </div>
      </div>
    );
}

export default ItemCount;
