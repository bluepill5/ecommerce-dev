import Nav from "react-bootstrap/Nav";
import StyledLink from "./StyledLink";
import { useCart } from "../CartContext";
import Badge from "react-bootstrap/Badge";


const { Item } = Nav;

const CustomNav = () => {
  const {carrito} = useCart();

  return (
    <Nav>
      <StyledLink to="/categoria/1">Electronics</StyledLink>
      <StyledLink to="/categoria/2">
        <Item>Jewelery</Item>
      </StyledLink>
      <StyledLink to="/categoria/3">
        <Item>Women's Clothing</Item>
      </StyledLink>
      <StyledLink to="/categoria/4">
        <Item>Men's Clothing</Item>
      </StyledLink>
      <StyledLink to="/cart">
        <Item><i className="material-icons">shopping_cart</i>{carrito.length === 0 ? <Badge pill bg="dark">{carrito.length}</Badge> : <Badge pill bg="danger">{carrito.length}</Badge>}</Item>
      </StyledLink>
    </Nav>
  );
};

export default CustomNav;
