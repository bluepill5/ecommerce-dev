import Header from "./Header";
import CarouselHeader from "./CarouselHeader";
import ItemListContainer from "./ItemListContainer"
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

const App = () => {
  return (
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
        </Switch>

        {/* <ItemListContainer /> */}
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
