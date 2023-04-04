import { useState, useEffect } from "react";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import camara from "../../../../assets/image/HeaderTable/camara.webp";
import { Link, useNavigate } from "react-router-dom";
import {
  Col,
  Form,
  InputGroup,
  Modal,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import ImageSpinner from "../../../../assets/image/LOGOAZUL.webp";
import VotesGober from "../../../models/VotesGober";

export const Gobernacion = () => {
    //Format Number Votes 
  const format = new Intl.NumberFormat('es');

  const [searchTerritorial, setSearchTerritorial] = useState("");

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [arrayVotesGobernacionTerritorial, setArrayVotesGobernacionTerritorial] =
    useState<VotesGober[]>([]);

  const getVotosGobernacionTerritorial = async () => {
    //const parametrosPaginador= {paginaActual: activo, cantidadMostrar:numeroElemPag};
    const result = await ServicePrivate.requestGET(ApiBack.CAMARA_TERRITORIAL);
    setArrayVotesGobernacionTerritorial(result);
    setShow(false);
  };

  useEffect(() => {
    getVotosGobernacionTerritorial();
  }, []);

  return (
    <main id="main" className="main">
      <img
        src={camara}
        style={{
          width: "100%",
          maxHeight: "80%",
          marginTop: "3vw",
          borderRadius: "5px 5px 0 0",
          boxShadow: "0px 0 20px #052851",
        }}
        alt="logo principal para la parte superior de la pagina web"
      />
      <div className="side_bar"></div>
      {/* Navegación estilo breadcrumb: Inicio */}

      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de una tabla para presentación de datos: Inicio */}
      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
          <div className="container-fluid display-flex justify-content-center container_title">
            <div className="text-center">
              <b className="title_table">TERRITORIAL DEPARTAMENTAL</b>
            </div>
          </div>

          <div className="container responsive_pe">
            <div className="row">
              <div className="col-sm"></div>
              <div className="col-12">
                <Form id="form_conta">
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchTerritorial(e.target.value)}
                      placeholder="Buscar departamento"
                      style={{ textAlign: "right", marginRight: "5px" }}
                      className="form_co"
                    ></Form.Control>
                  </InputGroup>
                </Form>
              </div>
            </div>
          </div>
          <div className="container responsive_gra">
            <div className="row">
              <div className="col-sm"></div>
              <div className="col-3">
                <Form id="form_conta">
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchTerritorial(e.target.value)}
                      placeholder="Buscar departamento"
                      style={{ textAlign: "right", marginRight: "5px" }}
                    ></Form.Control>
                  </InputGroup>
                </Form>
              </div>
            </div>
          </div>

          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table
              className="colorTableCamara table table-hover"
              style={{ background: "#05285190 !important" }}
            >
              <thead
                className="container_table sticky"
                style={{ backgroundColor: "#fff" }}
              >
                <tr>
                  <th className="text-center" style={{ width: "50%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "35%" }}>
                    TOTAL VOTOS
                  </th>
                  <th className="text-center" style={{ width: "15%" }}></th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotesGobernacionTerritorial
                  .filter((myVotes) => {
                    return searchTerritorial === ""
                      ? myVotes
                      : myVotes.department.name_department
                          .toLowerCase()
                          .includes(searchTerritorial.toLowerCase());
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text_left">
                        <a
                          className="link_departamento"
                          href={
                            "/camara/circuncripcion/territorial/departamento/" +
                            myVotes.department.idDepartment
                          }
                        >
                          {myVotes.department.name_department}
                        </a>
                      </td>
                      <td className="text-center">{format.format(myVotes.votos)}</td>
                      <td className="text-center align-middle">
                        <a
                          className="link_departamento"
                          href={
                            "/camara/circuncripcion/territorial/departamento/" +
                            myVotes.department.idDepartment
                          }
                        >
                          <i className="fa-solid fa-magnifying-glass fa-sm text-danger"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="dropdown">
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
                <a
                  type="button"
                  className="buttonBack buttonBack-primary"
                  href={"/#resultados"}
                >
                  <i className="bi bi-arrow-left-circle"></i>
                  &nbsp;&nbsp;REGRESAR A ELEGIR ELECCIÓN
                </a>
              </div>
            </div>
          </div>
        </div>
        <Modal
          show={show}
          backdrop="static"
          keyboard={false}
          onHide={handleClose}
          centered
          style={{ background: "#FFFFFFBF !important" }}
        >
          <Modal.Body className="text-center">
            <div className="text-center">
              <img
                src={ImageSpinner}
                style={{ height: "100px", width: "200px" }}
              />
              <div className="mt-4">
                <div className="spinner-border text-danger" role="status">
                  <span className=" visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
