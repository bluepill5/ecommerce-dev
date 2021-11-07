import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

const CarouselHeader = (props) => {
    const {banner1, banner2, banner3, banner4} = props;
    return (
      <Container fluid={true} className="p-0 mt-5">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 h-10 mt-5 pt-4"
              src="https://images.squarespace-cdn.com/content/v1/54243095e4b07ee637a9f812/1539120988923-DVW2LFWY79BESDLWW5TW/Site-Collection-Banner-Emanations.jpg?format=750w"
              alt="First slide"
              height="180em"
            />
            <Carousel.Caption>
              <h3>{banner1}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-10 mt-5 pt-4"
              src="https://images.squarespace-cdn.com/content/v1/54243095e4b07ee637a9f812/1539121040456-PC37C061M5JLYPJMX4XN/Site-Collection-Banner-Watchers.jpg?format=750w"
              alt="Second slide"
              height="180em"
            />
            <Carousel.Caption>
              <h3>{banner2}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mt-5 pt-4"
              src="https://images.squarespace-cdn.com/content/v1/54243095e4b07ee637a9f812/1539121063930-VZ76ZKA0LKEBO4Q04QML/Site-Collection-Banner-Zodiac.jpg"
              alt="Third slide"
              height="180em"
            />

            <Carousel.Caption>
              <h3>{banner3}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mt-5 pt-4"
              src="https://images.squarespace-cdn.com/content/v1/54243095e4b07ee637a9f812/1539121052528-Q1NA9AL4WNBFLGIDBNCM/Site-Collection-Banner-Seraphim.jpg"
              alt="Fourth slide"
              height="180em"
            />

            <Carousel.Caption>
              <h3>{banner4}</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );   
}

export default CarouselHeader;
