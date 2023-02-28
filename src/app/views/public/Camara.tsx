import { useState, useEffect } from "react";
import VotesCongreso from "../../models/VotesCongreso";
import ServicePrivate from "../../services/ServicePrivate";
import ApiBack from "../../utilities/domains/ApiBack";
import camara from "../../../assets/image/camara.jpg";

export const Camara = () => {
  const [arrayVotesCamaraTerritorial, setArrayVotosCamaraTerritorial] =
    useState<VotesCongreso[]>([]);
  const [arrayVotesCamaraIndigena, setArrayVotosCamaraIndigena] = useState<
    VotesCongreso[]
  >([]);

  const getVotosCamaraTerritorialCareBackend = async () => {
    const result = await ServicePrivate.requestGET(ApiBack.CAMARA_TERRITORIAL);
    setArrayVotosCamaraTerritorial(result);
  };
  const getVotosCamaraIndigenaCareBackend = async () => {
    const result = await ServicePrivate.requestGET(ApiBack.CAMARA_INDIGENA);
    setArrayVotosCamaraIndigena(result);
  };

  useEffect(() => {
    getVotosCamaraTerritorialCareBackend();
    getVotosCamaraIndigenaCareBackend();
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
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table
              className="colorTable table table-hover"
              style={{ background: "#05285190 !important" }}
            >
              <thead>
                <tr>
                  <th className="text-center" style={{ width: "40%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    ROLE
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    TOTAL VOTOS
                  </th>
                </tr>
              </thead>
              <tbody className="color">
                {arrayVotesCamaraTerritorial.map((myVotes, contador) => (
                  <tr key={contador}>
                    <td className="text-center">
                      <b>{myVotes.department.nameDepartment}</b>
                    </td>
                    <td className="text-center">{myVotes.description_role}</td>
                    <td className="text-center"><b>{myVotes.votos}</b></td>
                  </tr>
                ))}
              </tbody>
            </table>
          <table
            className="colorTable table table-hover"
            style={{ background: "#05285190 !important" }}
          >
            <thead>
              <tr>
                <th className="text-center" style={{ width: "40%" }}>
                  DEPARTAMENTO
                </th>
                <th className="text-center" style={{ width: "30%" }}>
                  ROLE
                </th>
                <th className="text-center" style={{ width: "30%" }}>
                  TOTAL VOTOS
                </th>
              </tr>
            </thead>
            <tbody className="color">
              {arrayVotesCamaraTerritorial.map((myVotes, contador) => (
                <tr key={contador}>
                  <td className="text-center">
                    <b>{myVotes.department.nameDepartment}</b>
                  </td>
                  <td className="text-center">{myVotes.description_role}</td>
                  <td className="text-center">{myVotes.votos}</td>
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
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table
              className="colorTable table table-hover"
              style={{ background: "#05285190 !important" }}
            >
              <thead>
                <tr>
                  <th className="text-center" style={{ width: "40%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    ROLE
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    TOTAL VOTOS
                  </th>
                </tr>
              </thead>
              <tbody className="color">
                {arrayVotesCamaraIndigena.map((myVotes, contador) => (
                  <tr key={contador}>
                    <td className="text-center">
                      <b>{myVotes.department.nameDepartment}</b>
                    </td>
                    <td className="text-center">{myVotes.description_role}</td>
                    <td className="text-center"><b>{myVotes.votos}</b></td>
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
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table
              className="colorTable table table-hover"
              style={{ background: "#05285190 !important" }}
            >
              <thead>
                <tr>
                  <th className="text-center" style={{ width: "40%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    ROLE
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    TOTAL VOTOS
                  </th>
                </tr>
              </thead>
              <tbody className="color">
                {arrayVotesCamaraIndigena.map((myVotes, contador) => (
                  <tr key={contador}>
                    <td className="text-center">
                      <b>{myVotes.department.nameDepartment}</b>
                    </td>
                    <td className="text-center">{myVotes.description_role}</td>
                    <td className="text-center"><b>{myVotes.votos}</b></td>
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
