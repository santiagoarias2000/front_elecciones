import { useState, useEffect } from "react";
import VotesCongreso from "../../../models/VotesCongreso";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import camara from "../../../../assets/image/camara.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import Municipality from "../../../models/Municipality";
import {
  Col,
  Form,
  InputGroup,
  Modal,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import Department from "../../../models/Department";
import CandidatosCamara from "../../../mocks/models/CandidatosCamara";
import { ARREGLO_CANDIDATOS_ELEGIDOS } from "../../../mocks/candidatos-mocks";
import ImageSpinner from "../../../../assets/image/errorlogo.png";

export const CamaraAfroDescendienteDepartamento = () => {
  const [arrayCandidatosElegidos, setArrayCandidatosElegidos] = useState<
    CandidatosCamara[]
  >(ARREGLO_CANDIDATOS_ELEGIDOS);
  const [search, setSearch] = useState("");
  const [searchMunicipio, setSearchMunicipio] = useState("");
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  let { idDepartment } = useParams();
  const [
    arrayVotesCamaraAfroDescendiente,
    setArrayVotosCamaraAfroDescendiente,
  ] = useState<VotesCongreso[]>([]);

  const [arrayMunicipio, setArrayMunicipio] = useState<Municipality[]>([]);
  const [arrayDepartamento, setArrayDepartamento] = useState<Department[]>([]);

  const getMuniciaplity = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.COMBOBOX_MUNICIPIO + "/" + idDepartment
    );
    setArrayMunicipio(result);
    setShow(false);
  };

  const getVotosCamaraAfroDescendiente = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.CAMARA_AFRODESCENDIENTE_DEPARTAMENTO + "/" + idDepartment
    );
    setArrayVotosCamaraAfroDescendiente(result);
  };
  const getDepartamento = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.NOMBRE_DEPARTAMENTO_AFRODESCENDIENTE + "/" + idDepartment
    );
    setArrayDepartamento(result);
  };
  const CandidatosElegidosCamara = (miCandidato: any) => {
    var elegidosi: any;
    var elegidono: any;
    arrayCandidatosElegidos.map((item) => {
      if (item.candidate_name === miCandidato) {
        elegidosi = "True";
      } else {
        elegidono = "False";
      }
    });
    return elegidosi;
  };
  useEffect(() => {
    getVotosCamaraAfroDescendiente();
    getMuniciaplity();
    getDepartamento();
  }, []);

  return (
    <main id="main" className="main">
      <img
        src={camara}
        style={{
          width: "100%",
          maxHeight: "80%",
          marginTop: "10vw",
          borderRadius: "5px 5px 0 0",
          boxShadow: "0px 0 20px #052851",
        }}
        alt="logo principal para la parte superior de la pagina web"
      />
      <div className="side_bar"></div>
      {/* Navegación estilo breadcrumb: Inicio */}

      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de una tabla para presentación de datos: Inicio */}
      <div className="col-lg-12" style={{ color: "#052851 !important" }}></div>
      <div className="cardBorder card">
        <div className="container-fluid display-flex justify-content-center container_title">
          <div className="text-center">
            <b className="title_table">TERRITORIAL AFRO-DESCENDIENTE</b>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm ">
              <div className="dropdown text-center my-3">
                <button
                  type="button"
                  className="buttonBack buttonBack-primary dropdown-toggle"
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
                  <input
                    type="text"
                    placeholder="Busqueda..."
                    onChange={(event) => {
                      setSearchMunicipio(event.target.value);
                    }}
                  />
                  <li>
                    {arrayMunicipio
                      .filter((val) => {
                        if (searchMunicipio == "") {
                          return val;
                        } else if (
                          val.name_municipality
                            .toLocaleLowerCase()
                            .includes(searchMunicipio.toLocaleLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((myMunicipality, indice) => (
                        <a
                          className="dropdown-item"
                          href={
                            "/guiaelectoral/camara/circuncripcion/afrodescendiente/departamento/" +
                            myMunicipality.id_department +
                            "/municipio/" +
                            myMunicipality.id_municipality
                          }
                        >
                          {myMunicipality.name_municipality}
                        </a>
                      ))}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h5 className="text-center my-4" style={{ color: "#052851" }}>
                {arrayDepartamento.map((myDepartment) => (
                  <b>{myDepartment.name_department}</b>
                ))}
              </h5>
            </div>
            <div className="col-sm">
              <Form id="form_conta">
                <InputGroup className="my-3 container_form">
                  <Form.Control
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar un Partido Político"
                    style={{ textAlign: "right", marginRight: "5px" }}
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
                <th className="text-center" style={{ width: "35%" }}>
                  PARTIDO POLÍTICO
                </th>
                <th className="text-center" style={{ width: "40%" }}>
                  NOMBRE CANDIDATO
                </th>
                <th className="text-center" style={{ width: "25 %" }}>
                  VOTOS DEPARTAMENTO
                </th>
              </tr>
            </thead>
            <tbody className="color container_table">
              {arrayVotesCamaraAfroDescendiente
                .filter((val) => {
                  if (search == "") {
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
                    <td
                      className={
                        CandidatosElegidosCamara(myVotes.candidate_name) ===
                        "True"
                          ? "text-center text-danger fst-italic font-weight-bold"
                          : "text-center"
                      }
                    >
                      {myVotes.description_politicparty}
                    </td>
                    <td
                      className={
                        CandidatosElegidosCamara(myVotes.candidate_name) ===
                        "True"
                          ? "text-center align-middle text-danger fst-italic"
                          : "text-center"
                      }
                    >
                      {myVotes.candidate_name}
                    </td>
                    <td
                      className={
                        CandidatosElegidosCamara(myVotes.candidate_name) ===
                        "True"
                          ? "text-center align-middle text-danger fst-italic"
                          : "text-center"
                      }
                    >
                      {myVotes.votos}
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
              className="my-4"
              style={{
                color: "#052851",
                textAlign: "right",
                paddingRight: "100px",
              }}
            >
              {arrayDepartamento.map((myDepartment) => (
                <b style={{ color: "#D9224E" }}>
                  VOTACIÓN TOTAL: {myDepartment.votos}
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
              <button type="button" className="buttonBack buttonBack-primary">
                <a className="link_hitdata" href={"/guiaelectoral/camara/"}>
                  <i className="bi bi-arrow-left-circle"></i>
                  &nbsp;&nbsp;REGRESAR A ELEGIR DEPARTAMENTO
                </a>
              </button>
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
              <img src={ImageSpinner} />
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
