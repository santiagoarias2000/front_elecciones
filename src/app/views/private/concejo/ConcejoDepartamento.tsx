import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiBack from "../../../utilities/domains/ApiBack";
import ServicePrivate from "../../../services/ServicePrivate";
import { Form, InputGroup, Modal } from "react-bootstrap";
import VotesConcejo from "../../../models/DataElection";
import concejo from "../../../../assets/image/HeaderTable/ELECONCEJO.webp";
import ImageSpinner from "../../../../assets/image/LOGOAZUL.webp";
import Department from "../../../models/Department";

export const ConcejoDepartamento = () => {
  let { idDepartment } = useParams();
  //Format Number Votes
  const format = new Intl.NumberFormat();
  //Prevent enter in search box
  function submitHandler(e: any) {
    e.preventDefault();
  }

  const [searchDepartamental, setsearchDepartamental] = useState("");
  const [arrayDepartamento, setArrayDepartamento] = useState<Department[]>([]);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [arrayVotesConcejoDepartamental, setarrayVotesConcejoDepartamental] =
    useState<VotesConcejo[]>([]);

  const getDepartamento = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.NOMBRE_DEPARTAMENTO_CONCEJO + "/" + idDepartment
    );
    setArrayDepartamento(result);
  };

  const getVotosConcejoDepartamental = async () => {
    const urlCargarDepartamento =
      ApiBack.CONCEJO_DEPARTAMENTO + "/" + idDepartment;
    const result = await ServicePrivate.requestGET(urlCargarDepartamento);
    setarrayVotesConcejoDepartamental(result);
    setShow(false);
  };

  useEffect(() => {
    getDepartamento();
    getVotosConcejoDepartamental();
  }, [idDepartment]);
  return (
    <main id="main" className="main">
      <div className="responsive_pr">
        <img
          src={concejo}
          alt="logo principal para la parte superior de la pagina web"
        />
      </div>
      <div className="side_bar"></div>

      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
      <div className="cardBorder card" style={{borderRadius:"0px 0px 5px 5px"}}>
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
                <Form id="form_conta">
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setsearchDepartamental(e.target.value)}
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
              <div className="col-sm ">
                <div className="col">
                  <h6 className="text-center my-2" style={{ color: "#052851" }}>
                    {arrayDepartamento.map((myDepartment) => (
                      <b className="name_text">
                        {myDepartment.name_department}
                      </b>
                    ))}
                  </h6>
                </div>
              </div>
              <div className="col-sm">
                <Form id="form_conta">
                  <InputGroup className="my-1 container_form">
                    <Form.Control
                      onChange={(e) => setsearchDepartamental(e.target.value)}
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
                className="container_table primeraFila"
                style={{ backgroundColor: "#fff" }}
              >
                <tr>
                  <th className="text-center" style={{ width: "35%" }}>
                    MUNICIPIO
                  </th>
                  <th className="text-center" style={{ width: "35%" }}>
                    TOTAL VOTOS
                  </th>
                  <th className="text-center" style={{ width: "30%" }}></th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotesConcejoDepartamental
                  .filter((myVotes) => {
                    return searchDepartamental === ""
                      ? myVotes
                      : myVotes.municipality.name_municipality
                          .toLowerCase()
                          .includes(searchDepartamental.toLowerCase());
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text_left left_alination">
                        <a
                          className="link_departamento"
                          href={
                            "/concejo/departamento/" +
                            idDepartment +
                            "/municipio/" +
                            myVotes.municipality.id_municipality
                          }
                        >
                          {myVotes.municipality.name_municipality}
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          className="link_departamento"
                          href={
                            "/concejo/departamento/" +
                            idDepartment +
                            "/municipio/" +
                            myVotes.municipality.id_municipality
                          }
                        >
                          {format.format(myVotes.votos)}
                        </a>
                      </td>
                      <td className="text-center align-middle">
                        <a
                          className="link_departamento"
                          href={
                            "/concejo/departamento/" +
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
            <div className="d-flex align-items-center mt-3">
              <div
                className="container-fluid"
                style={{
                  color: "#FFFFFF",
                  height: "40px",
                  alignItems: "right",
                }}
              >
                <h6 className="tituloVotosTotales my-2">
                  {arrayDepartamento.map((myDepartment) => (
                    <b style={{ color: "#D9224E" }}>
                      VOTACIÓN TOTAL: {format.format(myDepartment.votos)}
                    </b>
                  ))}
                </h6>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div
              className="container-fluid display-flex justify-content-center"
              style={{
                color: "#FFFFFF",
                height: "70px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="text-center">
                <a
                  type="button"
                  className="buttonBack buttonBack-primary"
                  href={"/concejo"}
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
