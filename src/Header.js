import CustomNav from "./CustomNav";
import NavBar from "react-bootstrap/Navbar";

// Brand Toggle Collapse
const {Brand, Toggle, Collapse} = NavBar;

const Header = () => {
    return (
      <NavBar expand="md" bg="dark" variant="dark">
        <Brand>
          <h1>E-Commerce</h1>
        </Brand>
        <Toggle />

        <Collapse>
          <CustomNav />
        </Collapse>
        <i className="material-icons">shopping_cart</i>
      </NavBar>
    );
};

export default Header;