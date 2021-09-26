import CartWidget from "./CartWidget";
import CustomNav from "./CustomNav";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

// Brand Toggle Collapse
const {Brand, Toggle, Collapse} = NavBar;

const Header = () => {
    return (
      <NavBar expand="md" bg="dark" variant="dark">
        <Container fluid={true}>
          <CartWidget />
          <Brand>
            <h1>E-Commerce</h1>
          </Brand>
          <Toggle />

          <Collapse>
            <CustomNav />
          </Collapse>
          <i className="material-icons">shopping_cart</i>
        </Container>
      </NavBar>
    );
}

export default Header;