import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";

const Header = () => {
  return (
    <div className="card-flex">
      <Card>
        <Card.Header as="h1" className="text-align-left">
          Our Mission...
        </Card.Header>
        <Card.Body>
          <Carousel>
            <Carousel.Item className="constrain-height">
              <img className="d-block w-100" src={require("../assets/company.jpg")} alt="First slide" />
              <Carousel.Caption>
                <h4 className="grey-background">Provide Support</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="constrain-height">
              <img className="d-block w-100" src={require("../assets/carpentry.jpg")} alt="Second slide" />
              <Carousel.Caption>
                <h4 className="grey-background">Provide Resources</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="constrain-height">
              <img className="d-block w-100" src={require("../assets/sparks.jpg")} alt="Third slide" />
              <Carousel.Caption>
                <h4 className="grey-background">Provide Reliability</h4>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Header;
