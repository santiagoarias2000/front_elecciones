import { useState, useEffect } from "react";
import VotesCongreso from "../../../models/VotesCongreso";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import Form from "react-bootstrap/Form";
import camara from "../../../../assets/image/camara.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import Municipality from "../../../models/Municipality";
import { Col, InputGroup, Pagination, Row, Table } from "react-bootstrap";
import Department from "../../../models/Department";

export const CamaraIndigenaDepartamentoMunicipio = () => {
  const [search, setSearch] = useState("");
  const regresar = useNavigate();

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
  let { idMunicipality } = useParams();
  const [arrayVotesCamaraIndiegena, setArrayVotosCamaraIndiegena] = useState<
    VotesCongreso[]
  >([]);
  const [arrayMunicipio, setArrayMunicipio] = useState<Municipality[]>([]);
  const [arrayNameMunicipality, setArrayNameMunicipality] = useState<
    Municipality[]
  >([]);

  const getVotosCamaraIndiegena = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.CAMARA_INDIGENA_DEPARTAMENTO_MUNICIPIO +
        "/" +
        idDepartment +
        "/municipio/" +
        idMunicipality
    );
    setArrayVotosCamaraIndiegena(result);
  };
  // get vehicle to be displayed in the combo
  const getMuniciaplity = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.COMBOBOX_MUNICIPIO + "/" + idDepartment
    );
    setArrayMunicipio(result);
  };
  const getNameMunicipality = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.NOMBRE_MUNICIPIO + "/" + idMunicipality
    );
    setArrayNameMunicipality(result);
  };
  useEffect(() => {
    getVotosCamaraIndiegena();
    getMuniciaplity();
    getNameMunicipality();
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
      {/* Navegaci??n estilo breadcrumb: Inicio */}

      {/* Navegaci??n estilo breadcrumb: Fin */}

      {/* Ejemplo de una tabla para presentaci??n de datos: Inicio */}
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
            <b className="title_table">TERRITORIAL INDIGENA</b>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm ">
              <div className="dropdown align-content-center my-3">
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
                  <li>
                    {arrayMunicipio.map((myMunicipality, indice) => (
                      <a
                        className="dropdown-item"
                        href={
                          "/guiaelectoral/camara/circuncripcion/indigena/departamento/" +
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
                {arrayNameMunicipality.map((myNameMunicipality) => (
                  <b>
                    {myNameMunicipality.name_municipality}
                    {" ("}
                    {myNameMunicipality.department}
                    {")"}
                  </b>
                ))}
              </h5>
            </div>
            <div className="col-sm">
              <Form id="form_conta">
                <InputGroup className="my-3 container_form">
                  <Form.Control
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar candidato pol??tico"
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
            <thead>
              <tr>
                <th className="text-center" style={{ width: "30%" }}>
                  NOMBRE CANDIDATO
                </th>
                <th className="text-center" style={{ width: "25%" }}>
                  PARTIDO POL??TICO
                </th>
                <th className="text-center" style={{ width: "25 %" }}>
                  VOTOS DEPARTAMENTO
                </th>
                <th className="text-center" style={{ width: "20 %" }}>
                  VOTOS MUNICIPIO
                </th>
              </tr>
            </thead>
            <tbody className="color">
              {arrayVotesCamaraIndiegena
                .filter((myVotes) => {
                  return search.toLowerCase() === ""
                    ? myVotes
                    : myVotes.candidate_name.toLowerCase().includes(search);
                })
                .map((myVotes, contador) => (
                  <tr key={contador}>
                    <td className="text-left">
                      <b>{myVotes.candidate_name}</b>
                    </td>
                    <td className="text-left">
                      {myVotes.description_politicparty}
                    </td>
                    <td className="text-center">{myVotes.votos}</td>

                    <td className="text-center">{myVotes.votos_muicipio}</td>
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
              <button type="button" className="buttonBack buttonBack-primary">
                <a
                  className="link_hitdata"
                  href={
                    "/guiaelectoral/camara/circuncripcion/indigena/departamento/" +
                    idDepartment
                  }
                >
                  <i className="bi bi-arrow-left-circle"></i>
                  &nbsp;&nbsp;REGRESAR A ELEGIR MUNICIPIO
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ejemplo de una tabla para presentaci??n de datos: Fin */}
    </main>
  );
};
