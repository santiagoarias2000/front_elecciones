import { useEffect, useState } from "react";
import { Form, InputGroup, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import senado from "../../../../assets/image/HeaderTable/CRsenadoindigena.webp";
import VotosSenado from "../../../models/VotesCongreso";
import ApiBack from "../../../utilities/domains/ApiBack";
import ServicePrivate from "../../../services/ServicePrivate";
import Municipality from "../../../models/Municipality";
import Department from "../../../models/Department";
import ImageSpinner from "../../../../assets/image/LOGOAZUL.webp";

export const SenadoIndigenaDepartamento = () => {
  let { idDepartment } = useParams();
  const [search, setSearch] = useState("");
  const [searchMunicipio, setSearchMunicipio] = useState("");

  const [arrayMunicipios, setMunicipios] = useState<Municipality[]>([]);
  const [arrayDepartamento, setArrayDepartamento] = useState<Department[]>([]);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [arrayVotesSenadoDepartamental, setArrayVotesSenadoDepartamental] =
    useState<VotosSenado[]>([]);
  const getMunicipios = async () => {
    const resultado = await ServicePrivate.requestGET(
      ApiBack.COMBOBOX_MUNICIPIO + "/" + idDepartment
    );
    setMunicipios(resultado);
    return resultado;
  };

  const getDepartamento = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.NOMBRE_DEPARTAMENTO_INDIGENA_SENADO + "/" + idDepartment
    );
    setArrayDepartamento(result);
  };
  const getVotosSenadoDepartamental = async () => {
    const urlCargarDepartamento =
      ApiBack.SENADO_INDIGENA_DEPARTAMENTAL + "/" + idDepartment;
    const result = await ServicePrivate.requestGET(urlCargarDepartamento);
    setArrayVotesSenadoDepartamental(result);
    if (result) {
      setArrayVotesSenadoDepartamental(result);
      setShow(false);
    }
  };
  //Prevent enter in search box
  function submitHandler(e: any) {
    e.preventDefault();
  }
  //Format Number Votes
  const format = new Intl.NumberFormat();
  useEffect(() => {
    getVotosSenadoDepartamental();
    getMunicipios();
    getDepartamento();
  }, [idDepartment]);
  return (
    <main id="main" className="main">
      <img
        src={senado}
        style={{ width: "100%", maxHeight: "80%", marginTop: "3vw" }}
        alt="logo principal para la parte superior de la pagina web"
      />
      <div className="side_bar"></div>
      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
        <div
            className="container-fluid display-flex justify-content-center"
            style={{
              background: "#052851",
              color: "#FFFFFF",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="text-center">
              <b className="title_table">
                CIRCUNCRIPCIÓN DEPARTAMENTAL INDÍGENA
              </b>{" "}
              &nbsp;
            </div>
          </div>
          <div className="container responsive">
            <div className="row">
              <div className="col-sm ">
                <div className="dropdown text-center my-3">
                  <button
                    type="button"
                    className="buttonBack buttonBack-primary dropdown-toggle text-light"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Municipios
                  </button>
                  <ul
                    className="dropdown-menu selectpicker"
                    data-live-search="true"
                    style={{ maxHeight: "200px", overflowY: "auto" }}
                  >
                    <div className="sticky-top">
                      <input
                        type="text"
                        placeholder="Busqueda..."
                        className="mi-sticky"
                        onChange={(event) => {
                          setSearchMunicipio(event.target.value);
                        }}
                      />
                    </div>
                    <li>
                      {arrayMunicipios
                        .filter((val) => {
                          if (searchMunicipio === "") {
                            return val;
                          } else if (
                            val.name_municipality
                              .toLocaleLowerCase()
                              .includes(searchMunicipio.toLocaleLowerCase())
                          ) {
                            return val;
                          }
                        })
                        .map((miMunicipio, indice) => (
                          <a
                            className="dropdown-item"
                            href={
                              "/senado/indigena/departamento/" +
                              idDepartment +
                              "/municipio/" +
                              miMunicipio.id_municipality
                            }
                          >
                            <b className="name_text"> {miMunicipio.name_municipality}</b>
                          </a>
                        ))}
                    </li>
                  </ul>
                </div>
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
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Buscar un Partido Político"
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
                      <p className="name_text">
                        {myDepartment.name_department}
                      </p>
                    ))}
                  </h6>
                </div>
              </div>

              <div className="d-flex align-items-center mt-2 mb-2 justify-content-between">
                <div
                  className="dropdown text-left mb-1"
                  style={{ marginRight: "5%" }}
                >
                  <button
                    type="button"
                    className="buttonBack buttonBack-primary dropdown-toggle text-light"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Municipios
                  </button>
                  <ul
                    className="dropdown-menu selectpicker"
                    data-live-search="true"
                    style={{ maxHeight: "200px", overflowY: "auto" }}
                  >
                    <div className="sticky-top">
                      <input
                        type="text"
                        placeholder="Busqueda..."
                        className="mi-sticky"
                        onChange={(event) => {
                          setSearchMunicipio(event.target.value);
                        }}
                      />
                    </div>
                    <li>
                      {arrayMunicipios
                        .filter((val) => {
                          if (searchMunicipio === "") {
                            return val;
                          } else if (
                            val.name_municipality
                              .toLocaleLowerCase()
                              .includes(searchMunicipio.toLocaleLowerCase())
                          ) {
                            return val;
                          }
                        })
                        .map((miMunicipio, indice) => (
                          <a
                            className="dropdown-item"
                            href={
                              "/senado/indigena/departamento/" +
                              idDepartment +
                              "/municipio/" +
                              miMunicipio.id_municipality
                            }
                          >
                            <b className="name_text">
                              {miMunicipio.name_municipality}
                            </b>
                          </a>
                        ))}
                    </li>
                  </ul>
                </div>
                <div className="col-sm">
                  <Form id="form_conta" onSubmit={submitHandler}>
                    <InputGroup className="my-1 container_form">
                      <Form.Control
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Buscar un Partido Político"
                        style={{ textAlign: "right", marginRight: "5px" }}
                        className="form_co"
                      ></Form.Control>
                    </InputGroup>
                  </Form>
                </div>
              </div>
            </div>
          </div>

          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table
              className="colorTable table table-hover"
              style={{ background: "#05285190 !important" }}
            >
              <thead
                className="container_table primeraFila"
                style={{ backgroundColor: "#fff" }}
              >
                <tr>
                  <th
                    className="text-center"
                    style={{ width: "35%" }}
                    id="text_left_name"
                  >
                    PARTIDO POLÍTICO
                  </th>
                  <th
                    className="text-center"
                    style={{ width: "40%" }}
                    id="text_left_name"
                  >
                    NOMBRE CANDIDATO
                  </th>
                  <th className="text-center" style={{ width: "25%" }}>
                    VOTOS DEPARTAMENTALES
                  </th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotesSenadoDepartamental
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (
                      val.description_politicparty
                        .toLocaleLowerCase()
                        .includes(search.toLocaleLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text_left_name">
                        {myVotes.description_politicparty}
                      </td>
                      <td className="text_left_name">
                        {myVotes.candidate_name}
                      </td>
                      <td className="text-center">
                        {format.format(myVotes.votos)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="dropdown">
            <div
              className="container-fluid display-flex justify-content-center mt-4"
              style={{
                color: "#FFFFFF",
                height: "20px",
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
                  href="/senado"
                  type="button"
                  className="buttonBack buttonBack-primary"
                >
                  <i className="bi bi-arrow-left-circle"></i>
                  &nbsp;&nbsp;REGRESAR A ELEGIR DEPARTAMENTO
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
      <div className="position-absolute bottom-50 end-50"></div>
    </main>
  );
};
