import { useState, useEffect } from "react";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import jal from "../../../../assets/image/HeaderTable/ELEJAL.webp";
import {useParams } from "react-router-dom";
import {Form, InputGroup, Modal } from "react-bootstrap";
import ImageSpinner from "../../../../assets/image/LOGOAZUL.webp";
import VotosJal from "../../../models/DataElection";
import Department from "../../../models/Department";

export const JalDepartamento = () => {
  let { idDepartment } = useParams();
  //Format Number Votes
  const format = new Intl.NumberFormat();
  //Prevent enter in search box
  function submitHandler(e:any) {
    e.preventDefault();
  }

  const [searchDepartamental, setSearchDepartamental] = useState("");
  const [arrayDepartamento, setArrayDepartamento] = useState<Department[]>([]);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [arrayVotesjalTerritorial, setArrayVotesjalTerritorial] = useState<VotosJal[]>([]);

  const getVotosJalDepartamental = async () => {
    const urlCargarDepartamento = ApiBack.JAL_DEPARTAMENTO + "/" + idDepartment;
    const result = await ServicePrivate.requestGET(urlCargarDepartamento);
    setArrayVotesjalTerritorial(result);
    setShow(false);
  };
  const getDepartamento = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.NOMBRE_DEPARTAMENTO_JAL + "/" + idDepartment
    );
    setArrayDepartamento(result);
  };

  useEffect(() => {
    getVotosJalDepartamental();
    getDepartamento()
  }, [idDepartment]);

  return (
    <main id="main" className="main">
      <img
        src={jal}
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

      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
          <div className="container-fluid display-flex justify-content-center container_title">
            <div className="text-center">
              <b className="title_table">JAL DEPARTAMENTAL</b>
            </div>
          </div>

          <div className="container responsive">
            <div className="row">
              <div className="col-sm">
                <div className="dropdown text-center my-3"></div>
              </div>
              <div className="col">
                <h6 className="text-center my-4" style={{ color: "#052851" }}>
                  {arrayDepartamento.map((myDepartment) => (
                    <b>{myDepartment.name_department}</b>
                  ))}
                </h6>
              </div>
              <div className="col-sm">
                <Form id="form_conta" onSubmit={submitHandler}>
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchDepartamental(e.target.value)}
                      placeholder="Buscar un Municipio"
                      style={{ textAlign: "right", marginRight: "5px" }}
                      className="form_co"
                    ></Form.Control>
                  </InputGroup>
                </Form>
              </div>
            </div>
          </div>

          <div className="container no_responsive">
            <div className="row">
              <div className="col-sm">
              <div className="dropdown text-center my-3"></div>

              </div>
              <div className="col">
                <h6 className="text-center my-2" style={{ color: "#052851" }}>
                  {arrayDepartamento.map((myDepartment) => (
                    <b>{myDepartment.name_department}</b>
                  ))}
                </h6>
              </div>
              <div className="col-sm">
                <Form id="form_conta" onSubmit={submitHandler}>
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchDepartamental(e.target.value)}
                      placeholder="Buscar un Municipio"
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
                  <th className="text-center" style={{ width: "30%" }}>
                    TOTAL VOTOS
                  </th>
                  <th className="text-center" style={{ width: "35%" }}></th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotesjalTerritorial
                  .filter((myVotes) => {
                    return searchDepartamental === ""
                      ? myVotes
                      : myVotes.municipality.name_municipality
                          .toLowerCase()
                          .includes(searchDepartamental.toLowerCase());
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text_left">
                        <a
                          className="link_departamento"
                          href={
                            "/jal/departamento/" +
                            idDepartment +
                            "/municipio/" +
                            myVotes.municipality.id_municipality
                          }
                        >
                          {myVotes.municipality.name_municipality}
                        </a>
                      </td>
                      <td className="text-center">
                        {format.format(myVotes.votos)}
                      </td>
                      <td className="text-center align-middle">
                        <a
                          className="link_departamento"
                          href={
                            "/jal/departamento/" +
                            idDepartment +
                            "/municipio/" +
                            myVotes.municipality.id_municipality
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
              height: "40px",
              alignItems: "right",
            }}
          >
            <h6
                className="tituloVotosTotales my-2"
              >
                {arrayDepartamento.map((myDepartment) => (
                  <b style={{ color: "#D9224E" }}>
                    VOTACIÓN TOTAL: {format.format(myDepartment.votos)}
                  </b>
                ))}
              </h6>
          </div>
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
                  href={"/jal"}
                >
                  <i className="bi bi-arrow-left-circle"></i>
                  &nbsp;&nbsp;REGRESAR A ELEGIR UN DEPARTAMENTO
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
    </main>
  );
};
