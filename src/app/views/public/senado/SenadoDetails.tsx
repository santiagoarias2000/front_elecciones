import { useEffect, useState } from "react";
import senado from "../../../../assets/image/SENADO.jpg";
import VotesCongreso from "../../../models/VotesCongreso";
import { Link, useNavigate, useParams } from "react-router-dom";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";

export const SenadoDetails = () => {
  let { idDepartment } = useParams();
  const regresar = useNavigate();
  const [arrayVotesSenadoDepartamental, setArrayVotesSenadoDepartamental] =
    useState<VotesCongreso[]>([]);

  const getVotosSenadoDepartamental = async () => {
    const urlCargarDepartamento =
      ApiBack.SENADO_NACIONAL_DEPARTAMENTO + "/" + idDepartment;
    const result = await ServicePrivate.requestGET(urlCargarDepartamento);
    setArrayVotesSenadoDepartamental(result);
    if (result) {
      setArrayVotesSenadoDepartamental(result);
    }
  };

  useEffect(() => {
    getVotosSenadoDepartamental();
  }, [idDepartment]);
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
      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
          <div
            className="container-fluid display-flex justify-content-center container_title"
          >
            <div className="text-center">
              <b>VOTOS POR DEPARTAMENTO</b>
            </div>
            <div className="dropdown">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
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
                  <th className="text-center" style={{ width: "35%" }}>
                    CANDIATO
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    PARTIDO
                  </th>
                  <th className="text-center" style={{ width: "25%" }}>
                    TOTAL VOTOS
                  </th>
                </tr>
              </thead>
              <tbody className="color">
                {arrayVotesSenadoDepartamental.map((myVotes, contador) => (
                  <tr key={contador}>
                    <td className="text-center">
                      <b>{myVotes.candidate_name}</b>
                    </td>
                    <td className="text-center">{myVotes.description_politicparty}</td>
                    <td className="text-center">{myVotes.votos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div className="col-lg-12" style={{ color: "#052851 !important" }}>
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
      </div> */}
      <div className="position-absolute bottom-50 end-50"></div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
