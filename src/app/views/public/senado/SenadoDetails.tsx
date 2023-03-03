import { useEffect, useState } from "react";
import senado from "../../../../assets/image/SENADO.jpg";
import VotesCongreso from "../../../models/VotesCongreso";
import { Link, useNavigate, useParams } from "react-router-dom";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import Municipality from "../../../models/Municipality";
import e from "express";
import { SenadoMuni } from "./SenadoMuni";

export const SenadoDetails = () => {
  let { idDepartment } = useParams();
  type miObjeto = { nombreSuma: number };
  let component = null;
  type myForm = React.FormEvent<HTMLFormElement>;

  const [seleccion, setSeleccion]: any = useState<number>();
  const [arrayVotesSenadoDepartamental, setArrayVotesSenadoDepartamental] =
    useState<VotesCongreso[]>([]);
  const [
    arrayVotesSenadoDepartamentalMunicipio,
    setArrayVotesSenadoDepartamentalMunicipio,
  ] = useState<VotesCongreso[]>([]);
  const [arrayMunicipios, setMunicipios] = useState<Municipality[]>([]);

  const getVotosSenadoDepartamental = async () => {
    const urlCargarDepartamento =
      ApiBack.SENADO_NACIONAL_DEPARTAMENTO + "/" + idDepartment;
    const result = await ServicePrivate.requestGET(urlCargarDepartamento);
    setArrayVotesSenadoDepartamental(result);
    if (result) {
      setArrayVotesSenadoDepartamental(result);
    }
  };
  const getVotosSenadoDepartamentalMunicipio = async () => {
    const urlCargarDepartamento =
      ApiBack.SENADO_NACIONAL_MUNICIPIO +
      "/" +
      idDepartment +
      "/municipio/" +
      seleccion;
    const result = await ServicePrivate.requestGET(urlCargarDepartamento);
    setArrayVotesSenadoDepartamentalMunicipio(result);
    if (result) {
      setArrayVotesSenadoDepartamentalMunicipio(result);
    }
  };
  const getMunicipios = async () => {
    const resultado = await ServicePrivate.requestGET(
      ApiBack.COMBOBOX_MUNICIPIO + "/" + idDepartment
    );
    setMunicipios(resultado);
    return resultado;
  };

  useEffect(() => {
    getVotosSenadoDepartamental();
    getMunicipios();
  }, [idDepartment]);
  console.log(setSeleccion);

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
              <b>VOTOS POR DEPARTAMENTO</b>
            </div>

            <div className="dropdown">
              <li className="nav-item dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    {arrayMunicipios.map((myVehicle, indice) => (
                      <Link className="dropdown-item" to={"municipio/"+myVehicle.id_municipality}>
                        {myVehicle.name_municipality}
                      </Link>
                    ))}
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                </ul>
              </li>
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
                  <th className="text-center" style={{ width: "35%" }}>
                    PARTIDO
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
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
                    <td className="text-center">
                      {myVotes.description_politicparty}
                    </td>
                    <td className="text-center">{myVotes.votos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="position-absolute bottom-50 end-50"></div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
