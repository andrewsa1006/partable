import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavComponent.css";
import { BsCartFill } from "react-icons/bs";

const NavComponent = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <img src="/logo.png" width="45" height="45" className="d-inline-block align-top" alt="partable-logo" />
        <Navbar.Brand>Partable</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="format-link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="format-link" to="/parts">
                Parts
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="format-link" to="/about">
                About
              </Link>
            </Nav.Link>
          </Nav>
          <BsCartFill className="format-icon" />
          <Nav className="justify-content-end">
            <Nav.Link>
              <Link className="format-link" to="/quote">
                My Quote
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
