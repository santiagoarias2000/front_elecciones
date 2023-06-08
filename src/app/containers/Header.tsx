import logo from "../../assets/image/imgHeader.webp";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

export const Header = () => {
  const navegar = useNavigate();
  const [nombre, setNombre] = useState<any>("");

  const logout = () => {
    // // Realizar redireccionamiento o cualquier otra acción necesaria
    localStorage.removeItem("tokenHitData");
    // Redirect to home page
    navegar("/");
  };
  function isTokenExpired(token: any): boolean {
    const decodedToken: any = jwtDecode(token);
    const expirationDate = new Date(decodedToken.exp * 1000); 
  
    return expirationDate < new Date();
  }
  if (localStorage.getItem("tokenHitData")) {
    const userToken = localStorage.getItem("tokenHitData");
    
    if (isTokenExpired(userToken)) {
      localStorage.removeItem("tokenHitData");
      // Realizar otras acciones según sea necesario
    }
  }
  useEffect(() => {
    if (localStorage.getItem("tokenHitData")) {
      const miTokensito: any = localStorage.getItem("tokenHitData");
      const obj: any = jwtDecode(miTokensito);
      const nombre: string = obj.nombre;
      setNombre(nombre);
    }
  }, []);

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
                    {nombre}
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
