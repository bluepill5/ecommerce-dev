import Header from "./components/Header";
import CarouselHeader from "./components/CarouselHeader";
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./CartContext";
import Cart from "./components/Cart";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <CarouselHeader
          banner1="The Emanations"
          banner2="The Watchers"
          banner3="The Seraphim"
          banner4="The Zodiac"
        />
        <Container fluid={true}>
          <Switch>
            {/* url : / */}
            <Route path="/" component={ItemListContainer} exact />
            {/* url : /categoria/id */}
            <Route path="/categoria/:id" component={ItemListContainer} />
            {/* url: /item/id */}
            <Route path="/item/:id" component={ItemDetailContainer} />
            {/* Cart */}
            <Route path="/cart" component={Cart} />
          </Switch>

          {/* <ItemListContainer /> */}
          <Footer />
        </Container>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
