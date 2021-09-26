import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const { Body, Img, Footer, Text, Title } = Card;

const Main = () => {
    return (
      <main>
        <Row>
          <Col sm={6} md={4} lg={3} className="pt-3">
            <Card>
              <Img src="http://placehold.it/300x200" />
              <Body>
                <Title>Producto 1</Title>
                <Text>Descripción del producto 1</Text>
                <Footer>
                  <Button variant="dark">Ver detalle</Button>
                </Footer>
              </Body>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3} className="pt-3">
            <Card>
              <Img src="http://placehold.it/300x200" />
              <Body>
                <Title>Producto 2</Title>
                <Text>Descripción del producto 2</Text>
                <Footer>
                  <Button variant="dark">Ver detalle</Button>
                </Footer>
              </Body>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3} className="pt-3">
            <Card>
              <Img src="http://placehold.it/300x200" />
              <Body>
                <Title>Producto 3</Title>
                <Text>Descripción del producto 3</Text>
                <Footer>
                  <Button variant="dark">Ver detalle</Button>
                </Footer>
              </Body>
            </Card>
          </Col>
          <Col sm={6} md={4} lg={3} className="pt-3">
            <Card>
              <Img src="http://placehold.it/300x200" />
              <Body>
                <Title>Producto 4</Title>
                <Text>Descripción del producto 4</Text>
                <Footer>
                  <Button variant="dark">Ver detalle</Button>
                </Footer>
              </Body>
            </Card>
          </Col>
        </Row>
      </main>
    );
}
 
export default Main;