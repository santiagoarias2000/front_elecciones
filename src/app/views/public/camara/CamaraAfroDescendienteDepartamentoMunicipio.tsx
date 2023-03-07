import { useState, useEffect } from "react";
import VotesCongreso from "../../../models/VotesCongreso";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import Form from "react-bootstrap/Form";
import camara from "../../../../assets/image/camara.jpg";
import { Link, useParams } from "react-router-dom";
import Municipality from "../../../models/Municipality";
import { Col, InputGroup, Pagination, Row, Table } from "react-bootstrap";

export const CamaraAfroDescendienteDepartamentoMunicipio = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  const setOption = ["nameDepartment", "descriptionRole", "votos"];
  const [sort, setSort] = useState("");

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
  const [arrayVotesCamaraAfroDescendiente, setArrayVotosCamaraAfroDescendiente] =
    useState<VotesCongreso[]>([]);
  const [arrayMunicipio, setArrayMunicipio] = useState<Municipality[]>([]);

  const getVotosCamaraAfroDescendiente = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.CAMARA_AFRODESCENDIENTE_DEPARTAMENTO_MUNICIPIO +
        "/" +
        idDepartment +
        "/municipio/" +
        idMunicipality
    );
    setArrayVotosCamaraAfroDescendiente(result);
  };
  // get vehicle to be displayed in the combo
  const getMuniciaplity = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.COMBOBOX_MUNICIPIO + "/" + idDepartment
    );
    setArrayMunicipio(result);
  };
  useEffect(() => {
    getVotosCamaraAfroDescendiente();
    getMuniciaplity();
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
              <b>TERRITORIAL AFRO-DESCENDIENTE</b>
            </div>
          </div>
          <div className="d-flex">
            <Form style={{ padding: "0 2% 0 72%" }}>
              <InputGroup className="my-3">
                <Form.Control
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search Keeper"
                  style={{ textAlign: "right", marginRight: "5px" }}
                ></Form.Control>
              </InputGroup>
            </Form>
            <div className="dropdown">
              <a
                className="btn btn-secondary dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Municipios
              </a>
              <ul className="dropdown-menu">
                {arrayMunicipio.map((myMunicipality) => (
                  <a
                    href={
                      "/guiaelectoral/camara/circuncripcion/afrodescendiente/departamento/" +
                      myMunicipality.id_department +
                      "/municipio/" +
                      myMunicipality.id_municipality
                    }
                  >
                    <li>
                      <a className="dropdown-item">
                        {myMunicipality.name_municipality}
                      </a>
                    </li>
                  </a>
                ))}
              </ul>
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
                  <th className="text-center" style={{ width: "40%" }}>
                    PARTIDO POLÍTICO
                  </th>
                  <th className="text-center" style={{ width: "5 %" }}>
                    VOTOS DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "25 %" }}>
                    MUNICIPIO
                  </th>
                  <th className="text-center" style={{ width: "5 %" }}>
                    VOTOS MUNICIPIO
                  </th>
                </tr>
              </thead>
              <tbody className="color">
                {arrayVotesCamaraAfroDescendiente
                  .filter((myVotes) => {
                    return search.toLowerCase() === ""
                      ? myVotes
                      : myVotes.description_politicparty
                          .toLowerCase()
                          .includes(search);
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text-center">
                        <b>{myVotes.candidate_name}</b>
                      </td>
                      <td className="text-center">
                        {myVotes.description_politicparty}
                      </td>
                      <td className="text-center">{myVotes.votos}</td>
                      <td className="text-center">
                        {myVotes.municipality.name_municipality}
                      </td>
                      <td className="text-center">{myVotes.votos_muicipio}</td>
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
            <div className="text-center">
              <Pagination className="prueba">{items}</Pagination>
            </div>
          </div>
        </div>
      </div>

      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
