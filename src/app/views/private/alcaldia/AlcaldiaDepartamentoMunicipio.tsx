import { useEffect, useState } from "react";
import { Form, InputGroup, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import alcaldia from "../../../../assets/image/HeaderTable/ELEALCALDIA.webp";
import ApiBack from "../../../utilities/domains/ApiBack";
import ServicePrivate from "../../../services/ServicePrivate";
import Municipality from "../../../models/Municipality";
import ImageSpinner from "../../../../assets/image/LOGOAZUL.webp";
import VotesAlcaldia from "../../../models/DataElection";

export const AlcaldiaDepartamentoMunicipio = () => {
  let { idDepartment } = useParams();
  let { idMunicipality } = useParams();
  const [searchMunicipio, setSearchMunicipio] = useState("");
  //Format Number Votes
  const format = new Intl.NumberFormat();
  const [search, setSearch] = useState("");
  const [arrayNameMunicipality, setArrayNameMunicipality] = useState<
    Municipality[]
  >([]);
  const [Localidad, setLocalidad] = useState<Municipality[]>([]);
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [showComboBox, setShowComboBox] = useState(false);

  const [arrayVotosAlcaldiaMunicipio, setArrayVotosAlcaldiaMunicipio] =
    useState<VotesAlcaldia[]>([]);

  const getNameMunicipality = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.NOMBRE_MUNICIPIO + "/" + idMunicipality
    );
    setArrayNameMunicipality(result);
  };
  const getComboBoxLocalidad = async () => {
    const resultado = await ServicePrivate.requestGET(
      ApiBack.COMBOBOX_LOCATION
    );
    setLocalidad(resultado);
    return resultado;
  };
  const getVotosAlcalidaMunicipio = async () => {
    const urlCargarVotosMunicipio =
      ApiBack.ALCALDIA_DEPARTAMENTO_MUNICIPIO + "/" + idMunicipality;
    const result = await ServicePrivate.requestGET(urlCargarVotosMunicipio);
    setArrayVotosAlcaldiaMunicipio(result);
    if (result) {
      setArrayVotosAlcaldiaMunicipio(result);
      setShow(false);
    }
  };
  //Prevent enter in search box
  function submitHandler(e: any) {
    e.preventDefault();
  }
  const myNavigate = useNavigate();
  const viewComboBox = () => {
    if (idDepartment === "11") {
      getComboBoxLocalidad();
      setShowComboBox(true);
    } else {
      setShowComboBox(false);
    }
  };
  const boton = () => {
    if (idDepartment === "11") {
      myNavigate("/alcaldia");
    } else {
      myNavigate("/alcaldia/departamento/" + idDepartment);
    }
  };

  useEffect(() => {
    getVotosAlcalidaMunicipio();
    getNameMunicipality();
    viewComboBox();
  }, [idDepartment, idMunicipality]);
  return (
    <main id="main" className="main">
      <img
        src={alcaldia}
        style={{ width: "100%", maxHeight: "80%", marginTop: "3vw" }}
        alt="logo principal para la parte superior de la pagina web"
      />
      <div className="side_bar"></div>
      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
          <div className="container responsive">
            <div className="row">
              <div className="col-sm ">
                {showComboBox && (
                  <div className="dropdown text-center my-3">
                    <button
                      type="button"
                      className="buttonBack buttonBack-primary dropdown-toggle text-light"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Localidades
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
                        {Localidad.filter((val) => {
                          if (searchMunicipio === "") {
                            return val;
                          } else if (
                            val.name_municipality
                              .toLocaleLowerCase()
                              .includes(searchMunicipio.toLocaleLowerCase())
                          ) {
                            return val;
                          }
                        }).map((miMunicipio, indice) => (
                          <a
                            className="dropdown-item"
                            href={
                              "/alcaldia/departamento/" +
                              idDepartment +
                              "/localidad/" +
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
                )}
              </div>
              <div className="col">
                <h6 className="text-center my-4" style={{ color: "#052851" }}>
                  {arrayNameMunicipality.map((myNameMunicipality) => (
                    <b>
                      {myNameMunicipality.name_municipality}
                      {" ("}
                      {myNameMunicipality.department}
                      {")"}
                    </b>
                  ))}
                </h6>
              </div>
              <div className="col-sm">
                <Form id="form_conta" onSubmit={submitHandler}>
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Buscar nombre candidato"
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
                    {arrayNameMunicipality.map((myNameMunicipality) => (
                      <b className="name_text">
                        {myNameMunicipality.name_municipality}
                        {" ("}
                        {myNameMunicipality.department}
                        {")"}
                      </b>
                    ))}
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center mt-2 mb-2 justify-content-between">
                {showComboBox && (
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
                      Localidades
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
                        {Localidad.filter((val) => {
                          if (searchMunicipio == "") {
                            return val;
                          } else if (
                            val.name_municipality
                              .toLocaleLowerCase()
                              .includes(searchMunicipio.toLocaleLowerCase())
                          ) {
                            return val;
                          }
                        }).map((miMunicipio, indice) => (
                          <a
                            className="dropdown-item"
                            href={
                              "/alcaldia/departamento/" +
                              idDepartment +
                              "/localidad/" +
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
                )}

                {idDepartment === "11" ? (
                  <div className="col-sm">
                    <Form id="form_conta" onSubmit={submitHandler}>
                      <InputGroup className="my-1 container_form">
                        <Form.Control
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Buscar nombre Candidato"
                          style={{ textAlign: "right", marginRight: "5px" }}
                          className="form_co"
                        ></Form.Control>
                      </InputGroup>
                    </Form>
                  </div>
                ) : (
                  <div className="col-12">
                <Form id="form_conta" onSubmit={submitHandler}>
                  <InputGroup className="my-1 container_form">
                    <Form.Control
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Buscar nombre departamento"
                      style={{ textAlign: "right", marginRight: "5px" }}
                      className="form_co"
                    ></Form.Control>
                  </InputGroup>
                </Form>
              </div>
                )}
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
                    style={{ width: "30%" }}
                    id="text_left_name"
                  >
                    NOMBRE CANDIDATO
                  </th>
                  <th className="text-center" style={{ width: "35%" }}>
                    VOTOS MUNICIPALES
                  </th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotosAlcaldiaMunicipio
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (
                      val.candidate_name
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
                      <td className="text-center align-middle">
                        {format.format(myVotes.votos)}
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
                  onClick={() => {
                    boton();
                  }}
                  type="button"
                  className="buttonBack buttonBack-primary"
                >
                  <i className="bi bi-arrow-left-circle"></i>
                  &nbsp;&nbsp;REGRESAR A ELEGIR MUNICIPIO
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
