import { useState, useEffect } from "react";
import VotesCongreso from "../../../models/VotesCongreso";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import camara from "../../../../assets/image/camara.jpg";
import { Link, useParams } from "react-router-dom";

export const CamaraTerritorialDepartamento = () => {
  let { idDepartment } = useParams();
  const [arrayVotesCamaraTerritorial, setArrayVotosCamaraTerritorial] =
    useState<VotesCongreso[]>([]);

  const getVotosCamaraTerritorial = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.CAMARA_TERRITORIAL_DEPARTAMENTO + "/" + idDepartment
    );
    setArrayVotosCamaraTerritorial(result);
  };
  console.log(arrayVotesCamaraTerritorial);

  useEffect(() => {
    getVotosCamaraTerritorial();
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
                    NOMBRE CANDIDATO
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    PARTIDO POLITICO
                  </th>
                  <th className="text-center" style={{ width: "10%" }}>
                    CIRCUSCRIPCIÓN
                  </th>
                  <th className="text-center" style={{ width: "10%" }}>
                    ROLE
                  </th>
                  <th className="text-center" style={{ width: "5%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "5%" }}>
                    VOTOS
                  </th>
                </tr>
              </thead>
              <tbody className="color">
                {arrayVotesCamaraTerritorial.map((myVotes, contador) => (
                  <tr key={contador}>
                    <td className="text-center">
                      <b>{myVotes.candidate_name}</b>
                    </td>
                    <td className="text-center">
                      {myVotes.description_politicparty}
                    </td>
                    <td className="text-center">
                      {myVotes.description_district}
                    </td>
                    <td className="text-center">
                      {myVotes.description_role}
                    </td>
                    <td className="text-center">
                      {myVotes.department.nameDepartment}
                    </td>
                    <td className="text-center">{myVotes.votos}</td>
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
