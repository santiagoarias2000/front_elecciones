import { useEffect, useState } from "react";
import senado from "../../../../assets/image/SENADO.jpg";
import VotesCongreso from "../../../models/VotesCongreso";
import { Col, Form, InputGroup, Pagination, Row, Table } from "react-bootstrap";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import Municipality from "../../../models/Municipality";
import e from "express";
import { SenadoMuni } from "./SenadoMuni";
import { useParams } from "react-router-dom";

export const SenadoDetails = () => {
  let { idDepartment } = useParams();

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

  const [seleccion, setSeleccion] = useState<number|undefined>();
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
  // useEffect(()=>{
  //   getVotosSenadoDepartamentalMunicipio();
  // },[arrayVotesSenadoDepartamentalMunicipio])

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
            <div className="text-center">
              <b>CIRCUNCRIPCIÓN NACIONAL</b> &nbsp;
            </div>
          </div>
          <div style={{ padding: "0 2% 0 72%" }}>
            <div className="btn-group" >
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Municipios
              </button>
              <ul className="dropdown-menu">
                <li>
                {arrayMunicipios.map((miMunicipio, indice)=>(
                  <a className="dropdown-item" href={"/guiaelectoral/senado/senadoDetails/"+idDepartment+"/municipio/"+miMunicipio.id_municipality} onClick={()=>(setSeleccion(miMunicipio.id_municipality))}>
                    {miMunicipio.name_municipality}
                  </a>
                ))}
                  
                </li>
                
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Form style={{ padding: "0 2% 0 72%" }}>
            <InputGroup className="my-3">
              <Form.Control
                onChange={(e) => setSearchNacional(e.target.value)}
                placeholder="Search Keeper"
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
                  <th className="text-center" style={{ width: "40%" }}>
                    NOMBRE CANDIDATO
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    ROLE
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    TOTAL VOTOS NACIONAL
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    MUNICIPIO
                  </th>
                </tr>
              </thead>
              <tbody className="color">
                {arrayVotesSenadoDepartamental
                  .filter((myVotes) => {
                    return searchNacional.toLowerCase() === ""
                      ? myVotes
                      : myVotes.candidate_name
                          .toLowerCase()
                          .includes(searchNacional);
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
                        </td>
                        </tr>
                      ))}
                      {/* {arrayVotesSenadoDepartamentalMunicipio.map((myMunis,index)=>(
                        <tr key={index}>
                          <td className="text-center">{myMunis.votos}</td>
                        </tr>
                      ))} */}
                     
                    
                
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

      <div className="position-absolute bottom-50 end-50"></div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
