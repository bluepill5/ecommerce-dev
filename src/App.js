import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import Main from "./Main";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer banner1="The Emanations" banner2="The Watchers" banner3="The Seraphim" banner4="The Zodiac"/>
      <Container fluid={true}>
        <Main />
        <Footer />
      </Container>
    </>
  );
}

export default App;
