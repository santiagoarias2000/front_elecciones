import { useState, useEffect } from "react";
import VotesCongreso from "../../../models/VotesCongreso";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import senado from "../../../../assets/image/SENADO.jpg";
import { Link } from "react-router-dom";
export const Senado = () => {
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
        style={{ width: "100%", maxHeight: "80%", marginTop: "10vw" }}
        alt="logo principal para la parte superior de la pagina web"
      />
      {/* Navegación estilo breadcrumb: Inicio */}

      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de una tabla para presentación de datos: Inicio */}
      <div className="side_bar"></div>
      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
          <div
            className="container-fluid display-flex justify-content-center container_title"
          >
            <a href="/guiaelectoral/senadoelegidos" className="bt_elegidos">
            <i className="bi bi-search"></i> &nbsp; Conozca los 108 Elegidos
            </a>
          </div>
          <div className="side_bar_white"></div>
          <div
            className="container-fluid display-flex justify-content-center container_title"
          >
            <div className="text-center">
              <b>TERRITORIAL NACIONAL</b>
            </div>
          </div>

          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table
              className="colorTable table table-hover"
              style={{ background: "#05285190 !important" }}
            >
              <thead className="container_table">
                <tr>
                  <th className="text-cente r" style={{ width: "35%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "25%" }}>
                    TOTAL VOTOS
                  </th>
                  <th className="text-center" style={{ width: "10%" }}></th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotesSenadoNacional.map((myVotes, contador) => (
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
              {arrayVotesSenadoIndigena.map((myVotes, contador) => (
                <tr key={contador}>
                  <td className="text-center">
                    <b>{myVotes.department.nameDepartment}</b>
                  </td>
                  <td className="text-center">{myVotes.description_role}</td>
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
      <div className="position-absolute bottom-50 end-50"></div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
