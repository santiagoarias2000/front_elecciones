import { useEffect, useState } from "react";
import senado from "../../../../assets/image/SENADO.jpg";
import VotesCongreso from "../../../models/VotesCongreso";
import { Col, Form, InputGroup, Pagination, Row, Table } from "react-bootstrap";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import Municipality from "../../../models/Municipality";
import e from "express";
import { SenadoMuni } from "./SenadoMuni";
import { useNavigate, useParams } from "react-router-dom";
import Department from "../../../models/Department";

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

  const regresar = useNavigate();
  const [seleccion, setSeleccion] = useState<number | undefined>();
  const [arrayVotesSenadoDepartamental, setArrayVotesSenadoDepartamental] =
    useState<VotesCongreso[]>([]);
  const [
    arrayVotesSenadoDepartamentalMunicipio,
    setArrayVotesSenadoDepartamentalMunicipio,
  ] = useState<VotesCongreso[]>([]);
  const [arrayMunicipios, setMunicipios] = useState<Municipality[]>([]);
  const [arrayDepartamento, setArrayDepartamento] = useState<Department[]>([]);

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

  const getDepartamento = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.NOMBRE_DEPARTAMENTO_NACIONAL + "/" + idDepartment
    );
    setArrayDepartamento(result);
  };
  useEffect(() => {
    getVotosSenadoDepartamental();
    getMunicipios();
    getDepartamento();
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
          <div className="container-fluid display-flex justify-content-center container_title">
            <div className="text-center">
              <b className="title_table">CIRCUNCRIPCIÓN NACIONAL</b> &nbsp;
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm ">
                <div className="dropdown text-center my-3">
                  <button
                    type="button"
                    className="buttonBack buttonBack-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Municipios
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                    
                      {arrayMunicipios.map((miMunicipio, indice) => (
                        <a
                          className="dropdown-item"
                          href={
                            "/guiaelectoral/senado/senadoDetails/" +
                            idDepartment +
                            "/municipio/" +
                            miMunicipio.id_municipality
                          } >
                          {miMunicipio.name_municipality}
                        </a>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
               <div className="col">
                <h5 className="text-center my-4" style={{ color: "#052851" }}>
                  {arrayDepartamento.map((myDepartment) => (
                    <b>{myDepartment.name_department}</b>
                  ))}
                </h5>
              </div>
              <div className="col-sm">
              <Form id="form_conta">
            <InputGroup className="my-3 container_form">
              <Form.Control
                onChange={(e) => setSearchNacional(e.target.value)}
                placeholder="Buscar Nombre Candidato"
                style={{ textAlign: "right", marginRight: "5px" }}
              ></Form.Control>
            </InputGroup>
          </Form>
              </div>
            </div>
          </div>


          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <table
              className="colorTable table table-hover"
              style={{ background: "#05285190 !important" }}
            >
              <thead className="container_table">
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
                </tr>
              </thead>
              <tbody className="color container_table">
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
          <div className="dropdown">
                  <div
                    className="container-fluid display-flex justify-content-center"
                    style={{
                      color: "#FFFFFF",
                      height: "40px",
                      alignItems: "right",
                    }}
                  >
                    <h6 className="my-4" style={{ color: "#052851", textAlign:"right" }}>
                    {arrayDepartamento.map((myDepartment) => (
                      <b style={{color:"#D9224E"}}>VOTACIÓN TOTAL: {myDepartment.votos}</b>
                    ))}
                  </h6>
                  </div>
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
                <button
                  type="button"
                  className="buttonBack buttonBack-primary"
                  onClick={() => regresar(-1)}
                >
                  <i className="bi bi-arrow-left-circle"></i>
                  &nbsp;&nbsp;REGRESAR A ELEGIR DEPARTAMENTO
                </button>
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