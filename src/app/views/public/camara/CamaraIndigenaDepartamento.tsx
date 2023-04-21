import { useState, useEffect } from "react";
import VotesCongreso from "../../../models/VotesCongreso";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import camara from "../../../../assets/image/HeaderTable/CRindigena.webp";
import { useParams } from "react-router-dom";
import Municipality from "../../../models/Municipality";
import ImageSpinner from "../../../../assets/image/LOGOAZUL.webp";
import { Form, InputGroup, Modal } from "react-bootstrap";
import Department from "../../../models/Department";
import { ARREGLO_CANDIDATOS_ELEGIDOS } from "../../../mocks/candidatos-mocks";
import CandidatosCamara from "../../../mocks/models/CandidatosCamara";

export const CamaraIndigenaDepartamento = () => {
  let { idDepartment } = useParams();
  //Format Number Votes 
  const format = new Intl.NumberFormat();
  const [arrayCandidatosElegidos, setArrayCandidatosElegidos] = useState< CandidatosCamara[] >(ARREGLO_CANDIDATOS_ELEGIDOS);
  const [search, setSearch] = useState("");
  const [searchMunicipio, setSearchMunicipio] = useState("");
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [arrayVotesCamaraIndigena, setArrayVotosCamaraIndigena] = useState< VotesCongreso[] >([]);

  const [arrayMunicipio, setArrayMunicipio] = useState<Municipality[]>([]);
  const [arrayDepartamento, setArrayDepartamento] = useState<Department[]>([]);

  const getVotosCamaraIndigena = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.CAMARA_INDIGENA_DEPARTAMENTO + "/" + idDepartment
    );
    setArrayVotosCamaraIndigena(result);
    setShow(false);
  };
  const getComboBoxMunicipio = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.COMBOBOX_MUNICIPIO + "/" + idDepartment
    );
    setArrayMunicipio(result);
  };
  const getDepartamento = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.NOMBRE_DEPARTAMENTO_INDIGENA + "/" + idDepartment
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
  //Prevent enter in search box
  function submitHandler(e:any) {
    e.preventDefault();
  }
  useEffect(() => {
    getDepartamento();
    getComboBoxMunicipio();
    getVotosCamaraIndigena();
  }, [idDepartment]);

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
      <div className="col-lg-12" style={{ color: "#052851 !important" }}></div>
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
            <b>TERRITORIAL INDIGENA</b>
          </div>
        </div>
        <div className="container responsive">
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
                    className="sticky-top"
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
                            "/camara/circuncripcion/indigena/departamento/" +
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
              <div className="dropdown text-center my-1">
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
                    className="sticky-top"
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
                            "/camara/circuncripcion/indigena/departamento/" +
                            myMunicipality.id_department +
                            "/municipio/" +
                            myMunicipality.id_municipality
                          }
                        >
                          <b className="name_text">
                            
                          {myMunicipality.name_municipality}
                          </b>
                        </a>
                      ))}
                  </li>
                </ul>
              </div>
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
            <thead className="container_table sticky" style={{backgroundColor:"#fff"}}>
              <tr>
                <th className="text-center" style={{ width: "35%" }} id="text_left_name">
                  PARTIDO POLÍTICO
                </th>
                <th className="text-center" style={{ width: "40%" }} id="text_left_name">
                  NOMBRE CANDIDATO
                </th>
                <th className="text-center" style={{ width: "25 %" }}>
                  VOTOS DEPARTAMENTO
                </th>
              </tr>
            </thead>
            <tbody className="color container_table">
              {arrayVotesCamaraIndigena
                .filter((myVotes) => {
                  return search.toLowerCase() === ""
                    ? myVotes
                    : myVotes.description_politicparty
                        .toLowerCase()
                        .includes(search);
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
                      id="text_left_name"
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
                      id="text_left_name"
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
            <h6
              className="tituloVotosTotales my-2"
            >
              {arrayDepartamento.map((myDepartment) => (
                <b style={{ color: "#D9224E" }} className="vota_respo">
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
                href="/camara"
              >
                <i className="bi bi-arrow-left-circle"></i>
                &nbsp;&nbsp;REGRESAR A ELEGIR DEPARTAMENTO &nbsp;
              </a>
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
      </div>
    </main>
  );
};
