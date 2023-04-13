import { useEffect, useState } from "react";
import {
  Col,
  Form,
  InputGroup,
  Modal,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import senado from "../../../../assets/image/HeaderTable/ELEALCALDIA.webp";
import VotesCongreso from "../../../models/VotesCongreso";
import ApiBack from "../../../utilities/domains/ApiBack";
import ServicePrivate from "../../../services/ServicePrivate";
import Municipality from "../../../models/Municipality";
import Department from "../../../models/Department";
import ImageSpinner from "../../../../assets/image/LOGOAZUL.webp";
import VotesGober from "../../../models/VotesGober";

export const AlcaldiaRegional = () => {
  let { idDepartment } = useParams();
  const [search, setSearch] = useState("");
  const [searchMunicipio, setSearchMunicipio] = useState("");

  const [arrayMunicipios, setMunicipios] = useState<Municipality[]>([]);
  const [arrayDepartamento, setArrayDepartamento] = useState<Department[]>([]);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [arrayVotesAlacadiaDepartamental, setarrayVotesAlacadiaDepartamental] =
    useState<VotesGober[]>([]);
  const getMunicipios = async () => {
    const resultado = await ServicePrivate.requestGET(
      ApiBack.COMBOBOX_MUNICIPIO + "/" + idDepartment
    );
    setMunicipios(resultado);
    return resultado;
  };

  const getDepartamento = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.NOMBRE_DEPARTAMENTO_ALCADIA + "/" + idDepartment
    );
    setArrayDepartamento(result);
  };
  const getVotosAlcaldiaDepartamental = async () => {
    const urlCargarDepartamento =
      ApiBack.ALCALDIA_DEPARTAMENTO + "/" + idDepartment;
    const result = await ServicePrivate.requestGET(urlCargarDepartamento);
    setarrayVotesAlacadiaDepartamental(result);
    if (result) {
      setarrayVotesAlacadiaDepartamental(result);
      setShow(false);
    }
  };
  //Format Number Votes
  const format = new Intl.NumberFormat();
  useEffect(() => {
    getVotosAlcaldiaDepartamental();
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
      {/* Navegación estilo breadcrumb: Inicio */}

      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de una tabla para presentación de datos: Inicio */}
      <div className="side_bar"></div>
      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
          <div className="container-fluid display-flex justify-content-center container_title">
            <div className="text-center">
              <b className="title_table">
                VOTOS AlCALDIAS
              </b>{" "}
              &nbsp;
            </div>
          </div>
          <div className="container responsive">
            <div className="row">
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
              <div className="col">
                <h6 className="text-center my-2" style={{ color: "#052851" }}>
                  {arrayDepartamento.map((myDepartment) => (
                    <b>{myDepartment.name_department}</b>
                  ))}
                </h6>
              </div>
              <div className="col-sm">
                <Form id="form_conta">
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

          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table
              className="colorTable table table-hover"
              style={{ background: "#05285190 !important" }}
            >
              <thead
                className="container_table sticky"
                style={{ backgroundColor: "#fff" }}
              >
                <tr>
                  <th className="text-center" style={{ width: "40%" }}>
                    MUNICIPIO
                  </th>
                  <th className="text-center" style={{ width: "40%" }}>
                    TOTAL VOTOS NACIONAL
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    
                  </th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotesAlacadiaDepartamental
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
                      <td className="text_left_name" style={{paddingLeft:"17%"}}>
                        {myVotes.municipality.name_municipality}
                      </td>
                      <td className="text-center">
                        {format.format(myVotes.votos)}
                      </td>
                      <td className="text-center align-middle">
                        <a
                          className="link_departamento"
                          href={
                            "/alcaldia/regional/" +
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
                className="my-2"
                style={{
                  color: "#052851",
                  textAlign: "center",
                }}
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
                  href="/asamblea"
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
      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
