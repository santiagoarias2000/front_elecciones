import { useState, useEffect } from "react";
import VotesCongreso from "../../../models/VotesCongreso";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import camara from "../../../../assets/image/camara.jpg";
import { Link } from "react-router-dom";
import { Col, Form, InputGroup, Pagination, Row, Table } from "react-bootstrap";

export const Camara = () => {
  const [searchTerritorial, setSearchTerritorial] = useState("");
  const [searchIndigena, setSearchIndigena] = useState("");
  const [searchAfro, setSearchAfro] = useState("");
  const setOption = ["name_department", "descriptionRole", "votos"];
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

  const [arrayVotesCamaraTerritorial, setArrayVotosCamaraTerritorial] =
    useState<VotesCongreso[]>([]);
  const [arrayVotesCamaraIndigena, setArrayVotosCamaraIndigena] = useState<
    VotesCongreso[]
  >([]);

  const [
    arrayVotesCamaraAfroDescendiente,
    setArrayVotosCamaraAfroDescendiente,
  ] = useState<VotesCongreso[]>([]);

  const getVotosCamaraTerritorial = async () => {
    const result = await ServicePrivate.requestGET(ApiBack.CAMARA_TERRITORIAL);
    setArrayVotosCamaraTerritorial(result);
  };
  const getVotosCamaraIndigena = async () => {
    const result = await ServicePrivate.requestGET(ApiBack.CAMARA_INDIGENA);
    setArrayVotosCamaraIndigena(result);
  };
  const getVotosCamaraAfroDescendiente = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.CAMARA_AFRODESCENDIENTE
    );
    setArrayVotosCamaraAfroDescendiente(result);
  };

  useEffect(() => {
    getVotosCamaraTerritorial();
    getVotosCamaraIndigena();
    getVotosCamaraAfroDescendiente();
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
              <b>TERRITORIAL DEPARTAMENTAL</b>
            </div>
          </div>
          <Form style={{ padding: "0 2% 0 72%" }}>
            <InputGroup className="my-3">
              <Form.Control
                onChange={(e) => setSearchTerritorial(e.target.value)}
                placeholder="Buscar departamento"
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
                  <th className="text-center" style={{ width: "35%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    ROLE
                  </th>
                  <th className="text-center" style={{ width: "25%" }}>
                    TOTAL VOTOS
                  </th>
                  <th className="text-center" style={{ width: "10%" }}></th>
                </tr>
              </thead>
              <tbody className="color">
                {arrayVotesCamaraTerritorial
                  .filter((myVotes) => {
                    return searchTerritorial.toLowerCase() === ""
                      ? myVotes
                      : myVotes.department.name_department
                          .toLowerCase()
                          .includes(searchTerritorial);
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text-center">
                        <b>{myVotes.department.name_department}</b>
                      </td>
                      <td className="text-center">
                        {myVotes.description_role}
                      </td>
                      <td className="text-center">{myVotes.votos}</td>
                      <td className="text-center align-middle">
                        <Link
                          className="text-center"
                          to={
                            "/guiaelectoral/camara/circuncripcion/territorial/departamento/" +
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
                onChange={(e) => setSearchIndigena(e.target.value)}
                placeholder="Buscar departamento"
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
                  <th className="text-center" style={{ width: "35%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    ROLE
                  </th>
                  <th className="text-center" style={{ width: "25%" }}>
                    TOTAL VOTOS
                  </th>
                  <th className="text-center" style={{ width: "10%" }}></th>
                </tr>
              </thead>
              <tbody className="color">
                {arrayVotesCamaraIndigena
                  .filter((myVotes) => {
                    return searchIndigena.toLowerCase() === ""
                      ? myVotes
                      : myVotes.department.name_department
                          .toLowerCase()
                          .includes(searchIndigena);
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text-center">
                        <b>{myVotes.department.name_department}</b>
                      </td>
                      <td className="text-center">
                        {myVotes.description_role}
                      </td>
                      <td className="text-center">{myVotes.votos}</td>
                      <td className="text-center align-middle">
                        <Link
                          className="text-center"
                          to={
                            "/guiaelectoral/camara/circuncripcion/indigena/departamento/" +
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
              <b>TERRITORIAL AFRO-DESCENDIENTES</b>
            </div>
          </div>
          <Form style={{ padding: "0 2% 0 72%" }}>
            <InputGroup className="my-3">
              <Form.Control
                onChange={(e) => setSearchAfro(e.target.value)}
                placeholder="Buscar departamento"
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
                  <th className="text-center" style={{ width: "35%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    ROLE
                  </th>
                  <th className="text-center" style={{ width: "25%" }}>
                    TOTAL VOTOS
                  </th>
                  <th className="text-center" style={{ width: "10%" }}></th>
                </tr>
              </thead>
              <tbody className="color">
                {arrayVotesCamaraAfroDescendiente
                  .filter((myVotes) => {
                    return searchAfro.toLowerCase() === ""
                      ? myVotes
                      : myVotes.department.name_department
                          .toLowerCase()
                          .includes(searchAfro);
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text-center">
                        <b>{myVotes.department.name_department}</b>
                      </td>
                      <td className="text-center">
                        {myVotes.description_role}
                      </td>
                      <td className="text-center">{myVotes.votos}</td>
                      <td className="text-center align-middle">
                        <Link
                          className="text-center"
                          to={
                            "/guiaelectoral/camara/circuncripcion/afrodescendiente/departamento/" +
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
