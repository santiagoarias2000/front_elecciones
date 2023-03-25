import { Form, InputGroup } from "react-bootstrap";
import camara from "../../../../assets/image/SENADO.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PresidenciaAll = () => {
  const [searchNacional, setSearchNacional] = useState("");

  const regresar = useNavigate();

  return (
    <main id="main" className="main">
      <img
        src={camara}
        style={{ width: "100%", maxHeight: "80%", marginTop: "10vw" }}
        alt="logo principal para la parte superior de la pagina web"
      />
      {/* Navegación estilo breadcrumb: Inicio */}

      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de una tabla para presentación de datos: Inicio */}

      <div className="side_bar"></div>
      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
          <div className="container-fluid display-flex justify-content-center container_title">
            <div className="text-center">
              <b className="title_table">PRIMERA VUELTA</b> &nbsp;
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="name_table">29 DE JUNIO DEL 2022</div>
              </div>
              <div className="col-sm">
                <Form id="form_conta">
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchNacional(e.target.value)}
                      placeholder="Buscar Nombre Candidato"
                      style={{ textAlign: "right", marginRight: "5px" }}
                      className="form_co"
                    ></Form.Control>
                  </InputGroup>
                </Form>
              </div>
            </div>
          </div>

          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table
              className="colorTable table table-hover"
              style={{ background: "#05285190 !important" }}
            >
              <thead className="container_table">
                <tr>
                  <th className="text-center" style={{ width: "20%" }}>
                    NOMBRE CANDIDATO
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    TOTAL NACIONAL
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    BOGOTA D.C
                  </th>
                </tr>
              </thead>
              <tbody className="color container_table">
                <tr>
                  <td className="text_left">
                    <b className="fst-italic text-danger">Gustavo Petro U.</b>
                  </td>
                  <td className="text-center">8.527.768</td>
                  <td className="text-center">987.744</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b className="fst-italic text-danger">Rodolfo Hernández</b>
                  </td>
                  <td className="text-center">5.953.209</td>
                  <td className="text-center">1'099.955</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Federico Guitiérrez Z.</b>
                  </td>
                  <td className="text-center">5.058.010</td>
                  <td className="text-center">1'244.477</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Segio Fajardo V.</b>
                  </td>
                  <td className="text-center">888.585</td>
                  <td className="text-center">172.684</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Jhon Milton Rodríguez G.</b>
                  </td>
                  <td className="text-center">274.250</td>
                  <td className="text-center">93.401</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Enrique Gómez M.</b>
                  </td>
                  <td className="text-center">50.539</td>
                  <td className="text-center">20.089</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Ingrit Betancurt</b>
                  </td>
                  <td className="text-center">14,878</td>
                  <td className="text-center">20.089</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Luis Pérez</b>
                  </td>
                  <td className="text-center">12,425</td>
                  <td className="text-center">20.089</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Votos en Blanco</b>
                  </td>
                  <td className="text-center">366,623</td>
                  <td className="text-center">55.867</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Votos Nulos</b>
                  </td>
                  <td className="text-center">242,629</td>
                  <td className="text-center">27.858</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Votos No Marcados</b>
                  </td>
                  <td className="text-center">29,715</td>
                  <td className="text-center">1.885</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="container-fluid display-flex justify-content-center"
            style={{
              color: "#FFFFFF",
              height: "80px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="text-center">
              <div className="container text-center">
                <div className="row">
                  <div className="col-8">
                    <button
                      type="button"
                      className="buttonBack buttonBack-primary"
                      onClick={() => regresar("/")}
                    >
                      <i className="bi bi-arrow-left-circle"></i>
                      &nbsp;&nbsp;REGRESAR A ELEGIR VOTACIÓN
                    </button>
                  </div>
                  <div className="col-4">
                    <div>
                      <tr className="container_total text-danger">
                        <td>
                          <b>VOTACIÓN TOTAL</b>
                        </td>
                        <td>19'643.676</td>
                      </tr>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
          <div className="container-fluid display-flex justify-content-center container_title">
            <div className="text-center">
              <b className="title_table">SEGUNDA VUELTA</b> &nbsp;
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="name_table">19 DE JUNIO DE 2022</div>
              </div>
              <div className="col-sm">
                <Form id="form_conta">
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchNacional(e.target.value)}
                      placeholder="Buscar Nombre Candidato"
                      style={{ textAlign: "right", marginRight: "5px" }}
                      className="form_co"
                    ></Form.Control>
                  </InputGroup>
                </Form>
              </div>
            </div>
          </div>
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table
              className="colorTable table table-hover"
              style={{ background: "#05285190 !important" }}
            >
              <thead className="container_table">
                <tr>
                  <th className="text-center" style={{ width: "30%" }}>
                    NOMBRE CANDIDATO
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    TOTAL NACIONAL
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    BOGOTA D.C
                  </th>
                </tr>
              </thead>
              <tbody className="color container_table">
                <tr>
                  <td className="text_left">
                    <b className="fst-italic text-danger">Gustavo Petro U.</b>
                  </td>
                  <td className="text-center">11.281.013</td>
                  <td className="text-center">1'449.092</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Rodolfo Hernández</b>
                  </td>
                  <td className="text-center">10.580.412</td>
                  <td className="text-center">1'889.050</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Votos en Blanco</b>
                  </td>
                  <td className="text-center">501.987</td>
                  <td className="text-center">200.249</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Votos nulos</b>
                  </td>
                  <td className="text-center">271.667</td>
                  <td className="text-center">38.322</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Votos no Marcados</b>
                  </td>
                  <td className="text-center">21 459</td>
                  <td className="text-center">1.417</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="container-fluid display-flex justify-content-center"
            style={{
              color: "#FFFFFF",
              height: "80px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="text-center">
              <div className="container text-center">
                <div className="row">
                  <div className="col-8">
                    <button
                      type="button"
                      className="buttonBack buttonBack-primary"
                      onClick={() => regresar("/")}
                    >
                      <i className="bi bi-arrow-left-circle"></i>
                      &nbsp;&nbsp;REGRESAR A ELEGIR VOTACIÓN
                    </button>
                  </div>
                  <div className="col-4">
                    <div>
                      <tr className="container_total text-danger">
                        <td>
                          <b>VOTACIÓN TOTAL</b>
                        </td>
                        <td>22.658.694</td>
                      </tr>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom-50 end-50"></div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
