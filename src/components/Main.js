import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";

const Main = () => {
    return (
      <main>
        <Row>
          <Item
            srcImg="http://placehold.it/300x200"
            titleProd="Producto 1"
            priceProd="1000"
            descProd="Descripción del producto 1"
          />
          <Item
            srcImg="http://placehold.it/300x200"
            titleProd="Producto 2"
            priceProd="1000"
            descProd="Descripción del producto 2"
          />
          <Item
            srcImg="http://placehold.it/300x200"
            titleProd="Producto 3"
            priceProd="1000"
            descProd="Descripción del producto 3"
          />
          <Item
            srcImg="http://placehold.it/300x200"
            titleProd="Producto 4"
            priceProd="1000"
            descProd="Descripción del producto 4"
          />
        </Row>
      </main>
    );
}
 
export default Main;