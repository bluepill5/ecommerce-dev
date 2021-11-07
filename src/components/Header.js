import CartWidget from "./CartWidget";
import CustomNav from "./CustomNav";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import StyledLink from "./StyledLink";

// Brand Toggle Collapse
const {Brand, Toggle, Collapse} = NavBar;

const Header = ({children}) => {
    return (
      <NavBar fixed="top" expand="md" bg="dark" variant="dark">
        <Container fluid={true}>
          <CartWidget />
          <Brand>
            <StyledLink to="/">
              <h1>E-Commerce</h1>
              {children}
            </StyledLink>
          </Brand>
          <Toggle />

          <Collapse className="text-center">
            <CustomNav />
          </Collapse>
          <i className="material-icons">shopping_cart</i>
        </Container>
      </NavBar>
    );
}

export default Header;