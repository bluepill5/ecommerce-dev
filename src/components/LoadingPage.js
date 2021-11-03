import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LoadingPage = () => {
  return (
    <Container className="p-3">
      <Row>
        <Col className="text-center">
          <h2>Cargando ...</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default LoadingPage;

