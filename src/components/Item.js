import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const { Body, Img, Footer, Text, Title} = Card;

const Item = (props) => {
    const {srcImg, titleProd, priceProd, descProd} = props;
    return (
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
    );
}

export default Item;
