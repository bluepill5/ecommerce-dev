import Row from "react-bootstrap/Row";
import Item from "./Item";
import { useParams } from "react-router-dom";

// Categories
const categories = {
  1: "electronics",
  2: "jewelery",
  3: "women's clothing",
  4: "men's clothing",
};

const ItemList = ({ products }) => {
  // Incializamos los estados
  const { id } = useParams();

  const filterCategory = (obj, id) => {
    if (!id) {
      return true;
    } else {
      return obj.category === categories[id];
    }
  };

  return (
    <Row>
      {products !== null &&
        products
          .filter((product) => filterCategory(product, id))
          .map((product, index) => <Item product={product} />)}
    </Row>
  );
};

export default ItemList;
