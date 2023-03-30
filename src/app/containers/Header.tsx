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
            <Link to={"/"}>
              <img
                src={logo}
                alt="Imagen de logo para header de guia electoral"
                className="img-fluid"
              />
            </Link>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                Inicio
              </Link>
              <Link to={"/blog"} style={{ textDecoration: "none" }}>
                Nuestro Blog
              </Link>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                Preguntas Frecuentes
              </Link>
              <Link to={"/#votos"} style={{ textDecoration: "none" }}>
                Ver resultados
              </Link>
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
