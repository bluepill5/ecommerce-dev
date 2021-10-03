import Nav from "react-bootstrap/Nav";

const {Link, Item} = Nav;

const CustomNav = () => {
    return (
      <Nav>
        <Item>
          <Link to="/">Categoría 1</Link>
        </Item>
        <Item>
          <Link to="/">Categoría 2</Link>
        </Item>
        <Item>
          <Link to="/">Categoría 3</Link>
        </Item>
        <Item>
          <Link to="/">Categoría 4</Link>
        </Item>        
      </Nav>
    );
}
 
export default CustomNav;