import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import ItemCount from "./ItemCount";

const { Body, Img, Text, Title} = Card;

const ItemDetail = ({product}) => {
    // console.log(product);
    return (
      <main>
        <Col sm={{span:6, offset:4}} md={{span:8, offset:2}} lg={{span:4, offset:4}} className="pt-3">
          <Card className="p-4">
            <Title className="text-center">{product.title}</Title>
            <Img src={product.image} />
            <Body>
              <Text>Precio: ${product.price}</Text>
              <Text>{product.description}</Text>
              <ItemCount stock={7} initial={0} />
            </Body>
          </Card>
        </Col>
      </main>
    );
}

export default ItemDetail;