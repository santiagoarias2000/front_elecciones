import { MouseEvent, useEffect } from "react";
import logo from "../../assets/image/imgHeader.webp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, redirect, useNavigate } from "react-router-dom";
import { NavDropdown, NavItem } from "react-bootstrap";

export const Header = () => {
  const navegar = useNavigate();

  useEffect(() => {
    // Simulando inicio de sesión exitoso y recepción del token
    const token = "tokenHitData";
    const expirationTime = 3600;

    // Almacenar el token en el almacenamiento local o en una cookie segura
    const nameProfile = localStorage.setItem("tokenName", token);
    const emailProfile = localStorage.setItem("tokenEmail", token);

    // Programar la función de cierre de sesión después del tiempo de expiración
    const logoutTimer = setTimeout(() => {
      logout();
    }, expirationTime * 1000);

    // Limpiar el temporizador cuando el componente se desmonte o se actualice
    return () => clearTimeout(logoutTimer);
  }, []);

  const logout = () => {
    // // Realizar redireccionamiento o cualquier otra acción necesaria
    localStorage.removeItem("tokenHitData");
    localStorage.removeItem("tokenName");
    localStorage.removeItem("tokenEmail");
    // Redirect to home page
    navegar("/");
  };

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
                style={{ width: "100%", height: "100%" }}
              />
            </Link>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav navbarCollapse" />
          <Navbar.Collapse
            id="responsive-navbar-nav navbarCollapse"
            aria-hidden="true"
          >
            <Nav className="me-auto">
              <a href="/#about" style={{ textDecoration: "none" }}>
                Inicio
              </a>
              <a href={"/blog"} style={{ textDecoration: "none" }}>
                Nuestro Blog
              </a>
              <a href={"/nosotros"} style={{ textDecoration: "none" }}>
                Nosotros
              </a>
              <a href={"/resultados"} style={{ textDecoration: "none" }}>
                Resultados
              </a>
              {localStorage.getItem("tokenHitData") ? (
                <NavDropdown
                  title="Cerrar Sesión"
                  id="nav-dropdown"
                  className="getstarted2 scrollto pruebita"
                  style={{ color: "#052851 !important" }}
                >
                  <NavDropdown.Item
                    eventKey="4.1"
                    style={{ color: "#052851" }}
                    className="dropdown-item d-flex justify-content-center"
                  >
                    <i className="bi bi-person-square"></i>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    eventKey="4.2"
                    style={{ color: "#052851" }}
                    className="dropdown-item d-flex justify-content-center"
                  >
                    {localStorage.getItem("tokenName")}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.4">
                    <a
                      className="pruebita cambiandoColor dropdown-item d-flex align-items-center"
                      href="/"
                      onClick={logout}
                    >
                      <i className="fa-solid fa-right-from-bracket"></i>
                      <span>Cerrar Sesión</span>
                    </a>
                  </NavDropdown.Item>
                  
                </NavDropdown>
                
              ) : (
                <a
                  href="/login"
                  className="getstarted scrollto pruebita"
                  style={{ textDecoration: "none" }}
                >
                  Iniciar Sesión&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
              )}

              {/* <Nav.Link className="getstarted scrollto pruebita">
                &nbsp;Iniciar Sesión&nbsp;
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="color-yellow" />
    </div>
  );
};
