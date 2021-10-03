import Header from "./Header";
import CarouselHeader from "./CarouselHeader";
import ItemCount from "./ItemCount";
import ItemListContainer from "./ItemListContainer"
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <>
      <Header />
      <CarouselHeader banner1="The Emanations" banner2="The Watchers" banner3="The Seraphim" banner4="The Zodiac"/>
      <Container fluid={true}>
        <ItemListContainer />
        <Footer />
      </Container>
    </>
  );
}

export default App;
