import Nav from "react-bootstrap/Nav";
import StyledLink from "./StyledLink";
const { Item } = Nav;

const CustomNav = () => {
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
    </Nav>
  );
};

export default CustomNav;
