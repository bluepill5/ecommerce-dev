import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

const { Body, Img, Footer, Text, Title} = Card;

const Item = (props) => {
    const {srcImg, titleProd, priceProd, descProd} = props;
    return (
      <Col sm={6} md={4} lg={3} className="pt-3">
        <Card>
          <Img src={srcImg} />
          <Body>
            <Title>{titleProd}</Title>
            <Text>Precio: ${priceProd}</Text>
            <Text>{descProd}</Text>
            <Footer>
              <Button variant="dark">Ver detalle</Button>
            </Footer>
          </Body>
        </Card>
      </Col>
    );
}

export default Item;
