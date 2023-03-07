import { useState, useEffect } from "react";
import VotesCongreso from "../../../models/VotesCongreso";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import senado from "../../../../assets/image/SENADO.jpg";
import { Link } from "react-router-dom";
import { Col, Form, InputGroup, Pagination, Row, Table } from "react-bootstrap";
export const Senado = () => {
  const [searchNacional, setSearchNacional] = useState("");
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  const [arrayVotesSenadoNacional, setArrayVotesSenadoNacional] = useState<
    VotesCongreso[]
  >([]);
  const [arrayVotesSenadoIndigena, setArrayVotesSenadoIndigena] = useState<
    VotesCongreso[]
  >([]);

  const getVotosSenadoTerritorial = async () => {
    const result = await ServicePrivate.requestGET(ApiBack.SENADO_NACIONAL);
    setArrayVotesSenadoNacional(result);
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
        style={{
          width: "100%",
          maxHeight: "80%",
          marginTop: "10vw",
          borderRadius: "5px 5px 0 0",
          boxShadow: "0px 0 20px #052851",
        }}
        alt="logo principal para la parte superior de la pagina web"
      />
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
              <b>TERRITORIAL NACIONAL</b>
            </div>
          </div>
          <Form style={{ padding: "0 2% 0 72%" }}>
            <InputGroup className="my-3">
              <Form.Control
               type="search"
                onChange={(e) => setSearchNacional(e.target.value)}
                placeholder="Busca un Departamento"
                style={{ textAlign: "right", marginRight: "5px" }}
              ></Form.Control>
            </InputGroup>
          </Form>

          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table
              className="colorTable table table-hover"
              style={{ background: "#05285190 !important" }}
            >
              <thead>
                <tr>
                  <th className="text-center" style={{ width: "50%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "40%" }}>
                    TOTAL VOTOS
                  </th>
                  <th className="text-center" style={{ width: "10%" }}></th>
                </tr>
              </thead>
              <tbody className="color">
                {arrayVotesSenadoNacional
                .filter((myVotes) => {
                  return searchNacional.toLowerCase() === ""
                    ? myVotes
                    : myVotes.department.nameDepartment
                        .toLowerCase()
                        .includes(searchNacional);
                })
                .map((myVotes, contador) => (
                  <tr key={contador}>
                    <td className="text-center">
                      <b>{myVotes.department.nameDepartment}</b>
                    </td>
                    <td className="text-center">{myVotes.votos}</td>
                    <td className="text-center align-middle">
                      <Link
                        className="text-center"
                        to={
                          "/guiaelectoral/senado/senadoDetails/" +
                          myVotes.department.idDepartment
                        }
                      >
                        <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

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
              <b>TERRITORIAL INDIGENA</b>
            </div>
          </div>
          <Form style={{ padding: "0 2% 0 72%" }}>
            <InputGroup className="my-3">
              <Form.Control
                onChange={(e) => setSearchNacional(e.target.value)}
                placeholder="Busca un Departamento"
                style={{ textAlign: "right", marginRight: "5px" }}
              ></Form.Control>
            </InputGroup>
          </Form>
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table
              className="colorTable table table-hover"
              style={{ background: "#05285190 !important" }}
            >
              <thead>
                <tr>
                  <th className="text-center" style={{ width: "50%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "40%" }}>
                    TOTAL VOTOS
                  </th>
                  <th className="text-center" style={{ width: "10%" }}></th>
                </tr>
              </thead>
              <tbody className="color">
                {arrayVotesSenadoIndigena
                .filter((myVotes) => {
                  return searchNacional.toLowerCase() === ""
                    ? myVotes
                    : myVotes.department.nameDepartment
                        .toLowerCase()
                        .includes(searchNacional);
                })
                .map((myVotes, contador) => (
                  <tr key={contador}>
                    <td className="text-center">
                      <b>{myVotes.department.nameDepartment}</b>
                    </td>
                    <td className="text-center">{myVotes.votos}</td>
                    <td className="text-center align-middle">
                      <Link className="text-center" to={""}>
                        <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
