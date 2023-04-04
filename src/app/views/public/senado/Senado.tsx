import { useState, useEffect } from "react";
import VotesCongreso from "../../../models/VotesCongreso";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import senado from "../../../../assets/image/HeaderTable/SENADO.webp";
import { Link, useNavigate } from "react-router-dom";
import { Form, InputGroup, Modal } from "react-bootstrap";
import ImageSpinner from "../../../../assets/image/LOGOAZUL.webp";

export const Senado = () => {
  const [searchNacional, setSearchNacional] = useState("");
  const [searchIndigena, setSearchIndigena] = useState("");

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [arrayVotesSenadoNacional, setArrayVotesSenadoNacional] = useState<
    VotesCongreso[]
  >([]);
  const [arrayVotesSenadoIndigena, setArrayVotesSenadoIndigena] = useState<
    VotesCongreso[]
  >([]);

  const getVotosSenadoTerritorial = async () => {
    const result = await ServicePrivate.requestGET(ApiBack.SENADO_NACIONAL);
    setArrayVotesSenadoNacional(result);
    setShow(false);
  };
  const getVotosSenadoIndigena = async () => {
    const result = await ServicePrivate.requestGET(ApiBack.SENADO_INDIGENA);
    setArrayVotesSenadoIndigena(result);
  };

  useEffect(() => {
    getVotosSenadoTerritorial();
    getVotosSenadoIndigena();
  }, []);

  return (
    <main id="main" className="main">
      <img
        src={senado}
        style={{ width: "100%", maxHeight: "80%", marginTop: "3vw" }}
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
              <b className="title_table">TERRITORIAL NACIONAL</b> &nbsp;
            </div>
          </div>
          <div className="container responsive_pe">
            <div className="row">
              <div className="col-12">
                <Form id="form_conta">
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchNacional(e.target.value)}
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
                <Form id="form_conta">
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchNacional(e.target.value)}
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
                className="container_table sticky"
                style={{ backgroundColor: "#fff" }}
              >
                <tr>
                  <th className="text-center" style={{ width: "35%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "25%" }}>
                    TOTAL VOTOS
                  </th>
                  <th className="text-center" style={{ width: "10%" }}></th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotesSenadoNacional
                  .filter((myVotes) => {
                    return searchNacional === ""
                      ? myVotes
                      : myVotes.department.name_department
                          .toLowerCase()
                          .includes(searchNacional.toLocaleLowerCase());
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text_left left_alination">
                        <a
                          className="link_departamento"
                          href={
                            "/senado/nacional/" +
                            myVotes.department.idDepartment
                          }
                        >
                          {myVotes.department.name_department}
                        </a>
                      </td>
                      <td className="text-center">{myVotes.votos}</td>
                      <td className="text-left align-middle">
                        <a
                          className="link_departamento"
                          href={
                            "/senado/nacional/" +
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
          <div
            className="container-fluid display-flex justify-content-center"
            style={{
              color: "#FFFFFF",
              height: "80px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="text-center responsive">
              <a
                type="button"
                className="buttonBack buttonBack-primary"
                href="/#resultados"
              >
                <i className="bi bi-arrow-left-circle"></i>
                &nbsp;&nbsp;REGRESAR A ELEGIR ELECCIÓN
              </a>
              &nbsp;&nbsp;
              <a
                href="/senadoelegidos"
                className="buttonBack buttonBack-primary"
              >
                <i className="bi bi-search "></i> &nbsp; CONOZCA LOS 108
                ELEGIDOS
              </a>
            </div>
            <div className="text-center no_responsive">
              <a
                type="button"
                className="buttonBack buttonBack-primary"
                href="/#resultados"
              >
                <i className="bi bi-arrow-left-circle"></i>
                &nbsp;REGRESAR A ELEGIR ELECCIÓN
              </a>

              <a
                href="/senadoelegidos"
                className="buttonBack buttonBack-primary my-1"
              >
                <i className="bi bi-search "></i>&nbsp;&nbsp;&nbsp;CONOZCA LOS
                108 ELEGIDOS
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
          <div className="container-fluid display-flex justify-content-center container_title">
            <div className="text-center">
              <b className="title_table">TERRITORIAL INDÍGENA</b>
            </div>
          </div>

          <div className="container responsive_pe">
            <div className="row">
              <div className="col-12">
                <Form id="form_conta">
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchIndigena(e.target.value)}
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
                <Form id="form_conta">
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchIndigena(e.target.value)}
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
                className="container_table sticky"
                style={{ backgroundColor: "#fff" }}
              >
                <tr>
                  <th className="text-center" style={{ width: "35%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "25%" }}>
                    TOTAL VOTOS
                  </th>
                  <th className="text-center" style={{ width: "10%" }}></th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotesSenadoIndigena
                  .filter((myVotes) => {
                    return searchIndigena === ""
                      ? myVotes
                      : myVotes.department.name_department
                          .toLowerCase()
                          .includes(searchIndigena.toLocaleLowerCase());
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text_left">
                        <a
                          className="link_departamento"
                          href={
                            "/senado/indigena/departamento/" +
                            myVotes.department.idDepartment
                          }
                        >
                          {myVotes.department.name_department}
                        </a>
                      </td>
                      <td className="text-center">{myVotes.votos}</td>
                      <td className="text-center align-middle">
                        <a
                          className="text-left"
                          href={
                            "/senado/indigena/departamento/" +
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

          <div
            className="container-fluid display-flex justify-content-center"
            style={{
              color: "#FFFFFF",
              height: "80px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="text-center responsive">
              <a
                type="button"
                className="buttonBack buttonBack-primary"
                href="/#resultados"
              >
                <i className="bi bi-arrow-left-circle"></i>
                &nbsp;&nbsp;REGRESAR A ELEGIR ELECCIÓN
              </a>
              &nbsp;&nbsp;
              <a
                href="/senadoelegidos"
                className="buttonBack buttonBack-primary link_hitdata"
              >
                <i className="bi bi-search "></i> &nbsp; CONOZCA LOS 108
                ELEGIDOS
              </a>
            </div>

            <div className="text-center no_responsive">
              <a
                type="button"
                className="buttonBack buttonBack-primary"
                href="/"
              >
                <i className="bi bi-arrow-left-circle"></i>
                &nbsp;REGRESAR A ELEGIR ELECCIÓN
              </a>

              <a
                href="/senadoelegidos"
                className="buttonBack buttonBack-primary my-1"
              >
                <i className="bi bi-search "></i>&nbsp;&nbsp;&nbsp;CONOZCA LOS
                108 ELEGIDOS
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
            <img src={ImageSpinner} style={{height:"100px", width:"200px"}}/>
            <div className="mt-4">
              <div className="spinner-border text-danger" role="status">
                <span className=" visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="position-absolute bottom-50 end-50"></div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
