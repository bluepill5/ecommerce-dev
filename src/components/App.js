import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import Main from "./Main";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import {useState, useEffect} from 'react';

const App = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Soy un efecto");
  }, []);

  const aumentar = () => {
    setContador(contador + 1);
    // console.log(contador);
  }

  return (
    <>
      <Header />
      <ItemListContainer banner1="The Emanations" banner2="The Watchers" banner3="The Seraphim" banner4="The Zodiac"/>
      <Container fluid={true}>
        <p>El contador va: {contador}</p>
        <button onClick={aumentar}>Sumar</button>
        <Main />
        <Footer />
      </Container>
    </>
  );
}

export default App;
