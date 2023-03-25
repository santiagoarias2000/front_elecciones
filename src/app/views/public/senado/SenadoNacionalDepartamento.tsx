import { useEffect, useState } from "react";
import senado from "../../../../assets/image/SENADO.webp";
import VotesCongreso from "../../../models/VotesCongreso";
import { Col, Form, InputGroup, Modal, Pagination, Row, Table } from "react-bootstrap";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import Municipality from "../../../models/Municipality";
import e from "express";
import { useNavigate, useParams } from "react-router-dom";
import Department from "../../../models/Department";
import ImageSpinner from "../../../../assets/image/errorlogo.webp";

export const SenadoNacionalDepartamento = () => {
  let { idDepartment } = useParams();

  const [search, setSearch] = useState("");
  const [searchMunicipio,setSearchMunicipio] = useState('');
  
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [arrayVotesSenadoDepartamental, setArrayVotesSenadoDepartamental] =
    useState<VotesCongreso[]>([]);
  const [arrayMunicipios, setMunicipios] = useState<Municipality[]>([]);
  const [arrayDepartamento, setArrayDepartamento] = useState<Department[]>([]);

  const getVotosSenadoDepartamental = async () => {
    const urlCargarDepartamento =
      ApiBack.SENADO_NACIONAL_DEPARTAMENTO + "/" + idDepartment;
    const result = await ServicePrivate.requestGET(urlCargarDepartamento);
    setArrayVotesSenadoDepartamental(result);
    if (result) {
      setArrayVotesSenadoDepartamental(result);
      setShow(false);
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
                  <div className="dropdown">
                  <button
                    type="button"
                    className="buttonBack buttonBack-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Municipios
                  </button>
                  <ul className="dropdown-menu selectpicker" data-live-search="true" style={{ maxHeight: "200px", overflowY: "auto" }} >
                  <input type="text" placeholder="Busqueda..." onChange={event=>{setSearchMunicipio(event.target.value)}}/>
                    <li>
                      {arrayMunicipios
                      .filter((val)=>{
                        if (searchMunicipio == "") {
                         return val;
                        }else if(val.name_municipality.toLocaleLowerCase().includes(searchMunicipio.toLocaleLowerCase())){
                         return val;
                        }})
                      .map((miMunicipio) => (
                        <a
                          className="dropdown-item"
                          href={
                            "/guiaelectoral/senado/nacional/" +
                            idDepartment +
                            "/municipio/" +
                            miMunicipio.id_municipality
                          }
                        >
                          {miMunicipio.name_municipality}
                        </a>
                      ))}
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <h6 className="text-center my-4" style={{ color: "#052851" }}>
                  {arrayDepartamento.map((myDepartment) => (
                    <b>{myDepartment.name_department}</b>
                  ))}
                </h6>
              </div>
              <div className="col-sm">
              <Form id="form_conta">
            <InputGroup className="my-3 container_form">
            <Form.Control
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar un Partido Político"
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
                  
                  <th className="text-center" style={{ width: "35%" }}>
                  PARTIDO POLÍTICO
                  </th>
                  <th className="text-center" style={{ width: "35%" }}>
                    NOMBRE CANDIDATO
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    TOTAL VOTOS NACIONAL
                  </th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotesSenadoDepartamental
                  .filter((val=>{
                    if(search == ""){
                      return val;
                    }else if(val.description_politicparty.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                      return val;
                    }
                  })).map((myVotes, contador) => (
                    <tr key={contador}>
                      
                      <td className="text-center">
                        {myVotes.description_politicparty}
                      </td>
                      <td className="text-center">
                        {myVotes.candidate_name}
                      </td>
                      <td className="text-center">{myVotes.votos}</td>
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
                      height: "40px",
                      alignItems: "right",
                    }}
                  >
                    <h6 className="my-4" style={{ color: "#052851", textAlign:"right" ,paddingRight:"100px"}}>
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
                
                  <a  type="button" className="buttonBack buttonBack-primary" href="/guiaelectoral/senado">
                    <i className="bi bi-arrow-left-circle"></i>
                    &nbsp;&nbsp;REGRESAR A ELEGIR DEPARTAMENTO
                  </a>
                
              </div>
            </div>
          </div>
        </div>
        <Modal
            show={show}
            backdrop="static"
            keyboard={false}
            onHide={handleClose}
            centered
            style={{background:"#FFFFFFBF !important"}}
          >
            <Modal.Body className="text-center">
              <div className="text-center">
                <img src={ImageSpinner} />
                <div className="mt-4">
                  <div
                    className="spinner-border text-danger"
                    role="status"
                  >
                    <span className=" visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
      </div>

      <div className="position-absolute bottom-50 end-50"></div>
      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
