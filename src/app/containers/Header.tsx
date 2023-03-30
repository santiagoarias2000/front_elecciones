import logoHeader from "../../assets/image/logoHeader.png";
import logo from "../../assets/image/imgHeader.webp";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, redirect } from "react-router-dom";

export const Header = () => {
  return (
    <div className="sticky-top">
      <Navbar id="header" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <div className="logo">
            <img src={logo} alt="" className="img-fluid" />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <a href="/#about" style={{textDecoration:"none"}}>Inicio</a>
                <a href="/#resultados" style={{textDecoration:"none"}}>Resultados</a>
                <Link to={"/blog"} style={{textDecoration:"none"}}>Nuestro Blog</Link>
                <Nav.Link className="getstarted scrollto pruebita">
                &nbsp;Iniciar Sesión&nbsp;
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="color-yellow" />
    </div>
  );
};
