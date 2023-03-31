import { Form, InputGroup } from "react-bootstrap";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import presidencia from "../../../../assets/image/HeaderTable/presidencia.webp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Precidencia from "../../../mocks/models/Presidencia";
import {
  ARREGLO_PRIMERA_VUELTA,
  ARRGLO_SEGUNDA_VUELTA,
} from "../../../mocks/precidencia-mocks";
import ServicePrivate from "../../../services/ServicePrivate";
import VotesCongreso from "../../../models/VotesCongreso";
import ApiBack from "../../../utilities/domains/ApiBack";

export const PresidenciaAll = () => {
  const [arrayPrecidenciaPrimera, setArrayPrecidenciaPrimera] = useState<
    Precidencia[]
  >(ARREGLO_PRIMERA_VUELTA);

  const [arrayPrecidenciaSegunda, setArrayPrecidenciaSegunda] = useState<
    Precidencia[]
  >(ARRGLO_SEGUNDA_VUELTA);

  const [arrayVotesCamaraTerritorial, setArrayVotosCamaraTerritorial] =
    useState<VotesCongreso[]>([]);

  const [searchNacional, setSearchNacional] = useState("");

  const regresar = useNavigate();
  const getVotosCamaraTerritorial = async () => {
    //const parametrosPaginador= {paginaActual: activo, cantidadMostrar:numeroElemPag};
    const result = await ServicePrivate.requestGET(ApiBack.CAMARA_TERRITORIAL);
    setArrayVotosCamaraTerritorial(result);
  };

  useEffect(() => {
    getVotosCamaraTerritorial();
  }, []);

  return (
    <main id="main" className="main">
      <img
        src={presidencia}
        style={{ width: "100%", maxHeight: "80%", marginTop: "3vw" }}
        alt="logo principal para la parte superior de la pagina web"
      />
      {/* Navegación estilo breadcrumb: Inicio */}

      {/* Navegación estilo breadcrumb: Fin */}

      {/* Ejemplo de una tabla para presentación de datos: Inicio */}

      <div className="side_bar"></div>
      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
          <div className="container-fluid display-flex justify-content-center container_title">
            <div className="text-center">
              <b className="title_table">PRIMERA VUELTA</b> &nbsp;
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="name_table">29 DE MARZO DEL 2022</div>
              </div>
              <div className="col-sm">
                <Form id="form_conta">
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchNacional(e.target.value)}
                      placeholder="Buscar Nombre Candidato"
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
              style={{
                background: "#05285190 !important",
                color: "#052851",
                backgroundColor: "#ffffff !important",
              }}
            >
              <thead
                className="container_table primeraFila"
                style={{ backgroundColor: "#fff" }}
              >
                <tr>
                  <th
                    className="text-left celdaSuperiorIzquierda"
                    style={{
                      width: "85%",
                      paddingLeft: "1%",
                      color: "#052851 !important",
                    }}
                  >
                    NOMBRE CANDIDATO
                  </th>
                  <th
                    className="text-center celdaSuperiorIzquierdaEstaticoTotalVotos"
                    style={{ width: "5%", color: "#052851 !important" }}
                  >
                    TOTAL
                  </th>
                  <th
                    className="text-center celdaSuperiorIzquierdaEstaticoVotosBogota"
                    style={{ width: "1%", color: "#052851 !important" }}
                  >
                    BOGOTÁ
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    AMAZONAS
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    ANTIOQUIA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    ARAUCA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    ATLÁNTICO
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    BOLÍVAR
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    BOYACÁ
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CALDAS
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CAQUETÁ
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CASANARE
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CAUCA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CESAR
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CHOCÓ
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CONSULADOS
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CÓRDOBA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CUNDINAMARCA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    GUAINÍA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    GUAVIARE
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    HUILA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    MAGDALENA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    META
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    NARIÑO
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    N. SANTANDER
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    PUTUMAYO
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    QUINDÍO
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    RISARALDA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    SAN ANDRÉS
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    SANTANDER
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    SUCRE
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    TOLIMA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    VALLE
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    VAUPÉS
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    VICHADA
                  </th>
                </tr>
              </thead>
              <tbody className="container_table">
                {arrayPrecidenciaPrimera.map((myVotes, contador) => (
                  <tr key={contador} className="primeraColumna">
                    <td
                      className="text celdaSuperiorIzquierda"
                      style={{ paddingLeft: "1%" }}
                    >
                      {myVotes.candidate_name}
                    </td>
                    <td className="text-center align-middle celdaSuperiorIzquierdaEstaticoTotalVotos">
                      {myVotes.total}
                    </td>
                    <td className="text-center align-middle celdaSuperiorIzquierdaEstaticoVotosBogota">
                      {myVotes.BOGOTA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.AMAZONAS}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.ANTIOQUIA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.ARAUCA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.ATLANTICO}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.BOLIVAR}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.BOYACA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CALDAS}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CAQUETA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CASANARE}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CAUCA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CESAR}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CHOCO}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CONSULADOS}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CORDOBA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CUNDINAMARCA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.GUAINIA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.GUAVIARE}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.HUILA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.MAGDALENA}
                    </td>
                    <td className="text-center align-middle">{myVotes.META}</td>
                    <td className="text-center align-middle">
                      {myVotes.NARIÑO}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.N_SANTANDER}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.PUTUMAYO}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.QUINDIO}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.RISARALDA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.SAN_ANDRES}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.SANTANDER}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.SUCRE}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.TOLIMA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.VALLE}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.VAUPES}
                    </td>

                    <td className="text-center align-middle">
                      {myVotes.VICHADA}
                    </td>
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
                <a
                  type="button"
                  className="buttonBack buttonBack-primary"
                  href={"/"}
                >
                  <i className="bi bi-arrow-left-circle"></i>
                  &nbsp;&nbsp;REGRESAR A ELEGIR ELECCIÓN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
          <div className="container-fluid display-flex justify-content-center container_title">
            <div className="text-center">
              <b className="title_table">SEGUNDA VUELTA</b> &nbsp;
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="name_table">19 DE JUNIO DEL 2022</div>
              </div>
              <div className="col-sm">
                <Form id="form_conta">
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchNacional(e.target.value)}
                      placeholder="Buscar Nombre Candidato"
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
                style={{
                  background: "#05285190 !important",
                  color: "#052851",
                  backgroundColor: "#ffffff !important",
                }}
              >
                <thead
                  className="container_table primeraFila"
                  style={{ backgroundColor: "#fff" }}
                >
                  <tr>
                  <th
                    className="text-left celdaSuperiorIzquierda"
                    style={{
                      width: "85%",
                      paddingLeft: "1%",
                      color: "#052851 !important",
                    }}
                  >
                    NOMBRE CANDIDATO
                  </th>
                  <th
                    className="text-center celdaSuperiorIzquierdaEstaticoTotalVotos"
                    style={{ width: "5%", color: "#052851 !important" }}
                  >
                    TOTAL
                  </th>
                  <th
                    className="text-center celdaSuperiorIzquierdaEstaticoVotosBogota"
                    style={{ width: "1%", color: "#052851 !important" }}
                  >
                    BOGOTÁ
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    AMAZONAS
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    ANTIOQUIA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    ARAUCA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    ATLÁNTICO
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    BOLÍVAR
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    BOYACÁ
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CALDAS
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CAQUETÁ
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CASANARE
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CAUCA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CESAR
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CHOCÓ
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CONSULADOS
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CÓRDOBA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    CUNDINAMARCA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    GUAINÍA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    GUAVIARE
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    HUILA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    MAGDALENA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    META
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    NARIÑO
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    N. SANTANDER
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    PUTUMAYO
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    QUINDÍO
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    RISARALDA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    SAN ANDRÉS
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    SANTANDER
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    SUCRE
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    TOLIMA
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    VALLE
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    VAUPÉS
                  </th>
                  <th className="text-center" style={{ width: "1%" }}>
                    VICHADA
                  </th>
                </tr>
                </thead>
                <tbody className="color container_table">
                  {arrayPrecidenciaSegunda
                    .filter((myVotes) => {
                      return searchNacional === ""
                        ? myVotes
                        : myVotes.candidate_name
                            .toLowerCase()
                            .includes(searchNacional.toLocaleLowerCase());
                    })
                    .map((myVotes, contador) => (
                      <tr key={contador} className="primeraColumna">
                    <td
                      className="text celdaSuperiorIzquierda"
                      style={{ paddingLeft: "1%" }}
                    >
                      {myVotes.candidate_name}
                    </td>
                    <td className="text-center align-middle celdaSuperiorIzquierdaEstaticoTotalVotos">
                      {myVotes.total}
                    </td>
                    <td className="text-center align-middle celdaSuperiorIzquierdaEstaticoVotosBogota">
                      {myVotes.BOGOTA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.AMAZONAS}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.ANTIOQUIA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.ARAUCA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.ATLANTICO}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.BOLIVAR}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.BOYACA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CALDAS}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CAQUETA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CASANARE}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CAUCA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CESAR}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CHOCO}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CONSULADOS}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CORDOBA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.CUNDINAMARCA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.GUAINIA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.GUAVIARE}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.HUILA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.MAGDALENA}
                    </td>
                    <td className="text-center align-middle">{myVotes.META}</td>
                    <td className="text-center align-middle">
                      {myVotes.NARIÑO}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.N_SANTANDER}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.PUTUMAYO}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.QUINDIO}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.RISARALDA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.SAN_ANDRES}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.SANTANDER}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.SUCRE}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.TOLIMA}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.VALLE}
                    </td>
                    <td className="text-center align-middle">
                      {myVotes.VAUPES}
                    </td>

                    <td className="text-center align-middle">
                      {myVotes.VICHADA}
                    </td>
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
                <a
                  type="button"
                  className="buttonBack buttonBack-primary"
                  href={"/"}
                >
                  <i className="bi bi-arrow-left-circle"></i>
                  &nbsp;&nbsp;REGRESAR A ELEGIR ELECCIÓN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom-50 end-50"></div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
