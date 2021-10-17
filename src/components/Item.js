import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ItemCount from "./ItemCount";
import "../css/itemStyle.css";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const { Body, Img, Footer, Text, Title } = Card;

const Item = ({product}) => {
  const { carrito, addItem } = useCart();

  const onAdd = (quantity) => {
    addItem(product, quantity);
    console.log("Carrito:");
    console.log(carrito);
  };

  return (
    <Col sm={6} md={4} lg={3} className="pt-3">
      <Card>
        <Img src={product.image} />
        <Body>
          <Title>{product.title}</Title>
          <Text>Precio: ${product.price}</Text>
          <Text className="overFlowText">{product.description}</Text>
          <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />
          <Footer>
            <Link to={`/item/${product.id}`}>
              <Button variant="dark">Ver detalle</Button>
            </Link>
          </Footer>
        </Body>
      </Card>
    </Col>
  );
};

export default Item;
