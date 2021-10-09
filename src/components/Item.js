import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import '../css/itemStyle.css';
import { Link } from 'react-router-dom';

const { Body, Img, Footer, Text, Title} = Card;

const Item = (props) => {
    const {idProd, srcImg, titleProd, priceProd, descProd} = props;
    return (
      <Col sm={6} md={4} lg={3} className="pt-3">
        <Card>
          <Img src={srcImg} />
          <Body>
            <Title>{titleProd}</Title>
            <Text>Precio: ${priceProd}</Text>
            <Text className="overFlowText">{descProd}</Text>
            <ItemCount stock={7} initial={0}/>
            <Footer>
              <Link to={`/item/${idProd}`}>
                <Button variant="dark">Ver detalle</Button>
              </Link>
            </Footer>
          </Body>
        </Card>
      </Col>
    );
}

export default Item;
