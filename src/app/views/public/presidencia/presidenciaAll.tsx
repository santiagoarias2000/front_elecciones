import { Form, InputGroup } from "react-bootstrap";
import camara from "../../../../assets/image/SENADO.jpg";
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
                <div className="name_table">27 DE MAYO DEL 2018</div>
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
                    <b className="fst-italic">Iván Duque M.</b>
                  </td>
                  <td className="text-center">7'616.857</td>
                  <td className="text-center">987.744</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b className="fst-italic">Gustavo Petro U.</b>
                  </td>
                  <td className="text-center">4'855.069</td>
                  <td className="text-center">1'099.955</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Sergio Fajardo V.</b>
                  </td>
                  <td className="text-center">4'602.916</td>
                  <td className="text-center">1'244.477</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Germán Vargas LI</b>
                  </td>
                  <td className="text-center">1'412.392</td>
                  <td className="text-center">172.684</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Humberto De la Calle</b>
                  </td>
                  <td className="text-center">396.151</td>
                  <td className="text-center">93.401</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Demás candidatos:(3)</b>
                  </td>
                  <td className="text-center">132.033</td>
                  <td className="text-center">20.089</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Votos en Blanco</b>
                  </td>
                  <td className="text-center">338.581</td>
                  <td className="text-center">55.867</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Votos Nulos</b>
                  </td>
                  <td className="text-center">242.002</td>
                  <td className="text-center">27.858</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Votos No Marcados</b>
                  </td>
                  <td className="text-center">47.675</td>
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
                      onClick={() => regresar("/guiaelectoral/welcome")}
                    >
                      <i className="bi bi-arrow-left-circle"></i>
                      &nbsp;&nbsp;REGRESAR A ELEGIR VOTACIÓN
                    </button>
                  </div>
                  <div className="col-4">
                    <div>
                      <tr className="container_total">
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
                <div className="name_table">17 DE MAYO DE 2018</div>
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
                    <b className="fst-italic">Iván Duque M.</b>
                  </td>
                  <td className="text-center">10'395.689</td>
                  <td className="text-center">1'449.092</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Gustavo Petro U.</b>
                  </td>
                  <td className="text-center">8'040.449</td>
                  <td className="text-center">1'889.050</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Votos en Blanco</b>
                  </td>
                  <td className="text-center">807.924</td>
                  <td className="text-center">200.249</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Votos nulos</b>
                  </td>
                  <td className="text-center">263.373</td>
                  <td className="text-center">38.322</td>
                </tr>
                <tr>
                  <td className="text_left">
                    <b>Votos no Marcados</b>
                  </td>
                  <td className="text-center">25.969</td>
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
                      onClick={() => regresar("/guiaelectoral/welcome")}
                    >
                      <i className="bi bi-arrow-left-circle"></i>
                      &nbsp;&nbsp;REGRESAR A ELEGIR VOTACIÓN
                    </button>
                  </div>
                  <div className="col-4">
                    <div>
                      <tr className="container_total">
                        <td>
                          <b>VOTACIÓN TOTAL</b>
                        </td>
                        <td>19'536.404</td>
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
