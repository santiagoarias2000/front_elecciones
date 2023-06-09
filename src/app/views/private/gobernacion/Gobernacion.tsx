import { useState, useEffect } from "react";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import gobernacion from "../../../../assets/image/HeaderTable/ELEGOBERNACION.webp";
import { Form, InputGroup, Modal } from "react-bootstrap";
import ImageSpinner from "../../../../assets/image/LOGOAZUL.webp";
import VotesGobernacion from "../../../models/DataElection";

export const Gobernacion = () => {
  //Format Number Votes
  const format = new Intl.NumberFormat();
  const [show, setShow] = useState(true);
  const [searchDepartamento, setSearchDepartamento] = useState("");

  const handleClose = () => setShow(false);

  const [arrayVotosGobernacion, setArrayVotosGobernacion] = useState<
    VotesGobernacion[]
  >([]);

  const getVotosGobernacion = async () => {
    const result = await ServicePrivate.requestGET(ApiBack.GOBERNACION);
    setArrayVotosGobernacion(result);
    setShow(false);
  };
  //Prevent enter in search box
  function submitHandler(e: any) {
    e.preventDefault();
  }

  useEffect(() => {
    getVotosGobernacion();
  }, []);

  return (
    <main id="main" className="main">
      <div className="responsive_pr">
        <img
          src={gobernacion}
          alt="logo principal para la parte superior de la pagina web"
        />
      </div>
      <div className="side_bar"></div>
      {/* Navegación estilo breadcrumb: Inicio */}

      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de una tabla para presentación de datos: Inicio */}
      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
          <div className="container responsive_pe">
            <div className="row">
              <div className="col-sm"></div>
              <div className="col-12">
                <Form id="form_conta" onSubmit={submitHandler}>
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchDepartamento(e.target.value)}
                      placeholder="Buscar nombre departamento"
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
                <Form id="form_conta" onSubmit={submitHandler}>
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchDepartamento(e.target.value)}
                      placeholder="Buscar nombre departamento"
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
              className="colorTableCamara table table-hover"
              style={{ background: "#05285190 !important" }}
            >
              <thead
                className="container_table primeraFila"
                style={{ backgroundColor: "#fff" }}
              >
                <tr>
                  <th className="text-center" style={{ width: "35%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    TOTAL VOTOS
                  </th>
                  <th className="text-center" style={{ width: "35%" }}></th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotosGobernacion
                  .filter((myVotes) => {
                    return searchDepartamento === ""
                      ? myVotes
                      : myVotes.department.name_department
                          .toLowerCase()
                          .includes(searchDepartamento.toLowerCase());
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text_left">
                        <a
                          className="link_departamento"
                          href={
                            "/gobernacion/departamento/" +
                            myVotes.department.idDepartment
                          }
                        >
                          {myVotes.department.name_department}
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          className="link_departamento"
                          href={
                            "/gobernacion/departamento/" +
                            myVotes.department.idDepartment
                          }
                        >
                          {format.format(myVotes.votos)}
                        </a>
                      </td>
                      <td className="text-center align-middle">
                        <a
                          className="link_departamento"
                          href={
                            "/gobernacion/departamento/" +
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
                  href={"/resultados"}
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
