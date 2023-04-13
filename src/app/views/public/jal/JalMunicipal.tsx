import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VotesGober from "../../../models/VotesGober";
import ApiBack from "../../../utilities/domains/ApiBack";
import jal from "../../../../assets/image/HeaderTable/ELEJAL.webp";
import ServicePrivate from "../../../services/ServicePrivate";
import Municipality from "../../../models/Municipality";
import { Form, InputGroup, Modal, Pagination } from "react-bootstrap";
import ImageSpinner from "../../../../assets/image/LOGOAZUL.webp"
import { log } from "console";
import { useForm } from "../../../utilities/hooks/useForm";

export const JalMunicipal = () => {
    //Variables
    let { idDepartment } = useParams();
    let { idMunicipality } = useParams();
    const regresar = useNavigate();
    const [search, setSearch] = useState("");
    const [searchMunicipio, setSearchMunicipio] = useState("");
  
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const [arrayNameMunicipality, setArrayNameMunicipality] = useState< Municipality[] >([]);
    const [arrayVotesSenadoTerritorial, setArrayVotosSenadoTerritorial] =
      useState<VotesGober[]>([]);
    const [arrayMunicipio, setArrayMunicipio] = useState<Municipality[]>([]);
    
    //Funciones
    const getVotosSenadoTerritorial = async () => {
      const result = await ServicePrivate.requestGET(
        ApiBack.JAL_DEPARTAMENTO_MUNICIPIO + "/" + 
          idMunicipality
      );
      setArrayVotosSenadoTerritorial(result);
      setShow(false);
    };
    const getNameMunicipality = async () => {
        const result = await ServicePrivate.requestGET(
          ApiBack.NOMBRE_MUNICIPIO + "/" + idMunicipality
        );
        setArrayNameMunicipality(result);
      };
      
    //Format Number Votes 
    const format = new Intl.NumberFormat(); 
    useEffect(() => {
      getVotosSenadoTerritorial();
      getNameMunicipality();
    }, []);
    
    return (
      <main id="main" className="main">
        <img
          src={jal}
          style={{
            width: "100%",
            maxHeight: "80%",
            marginTop: "3vw",
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
              className="container-fluid display-flex justify-content-center container_title"
            >
              <div className="text-center">
                <b className="title_table">
                  VOTOS JAL MUNICIPAL
                </b>
              </div>
            </div>
  
            <div className="d-flex">
              <div className="container responsive">
                <div className="row">
                  
  
                  <div className="col">
                    <h6 className="text-center my-4" style={{ color: "#052851" }}>
                      {arrayNameMunicipality.map((myNameMunicipality) => (
                        <b>
                          {myNameMunicipality.name_municipality}
                          {" ("}
                          {myNameMunicipality.department}
                          {")"}
                        </b>
                      ))}
                    </h6>
                  </div>
                  <div className="col-sm">
                    <Form id="form_conta">
                      <InputGroup className="my-3 container_form">
                        <Form.Control
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Buscar un Candidato"
                          style={{ textAlign: "right", marginRight: "5px" }}
                          className="form_co"
                        ></Form.Control>
                      </InputGroup>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="container no_responsive">
                <div className="row">
                  <div className="col-sm">
  
                 
                  </div>
                  
  
                  <div className="col">
                    <h6 className="text-center my-2" style={{ color: "#052851" }}>
                      {arrayNameMunicipality.map((myNameMunicipality) => (
                        <b>
                          {myNameMunicipality.name_municipality}
                          {" ("}
                          {myNameMunicipality.department}
                          {")"}
                        </b>
                      ))}
                    </h6>
                  </div>
                  <div className="col-sm">
                    <Form id="form_conta">
                      <InputGroup className="my-1 container_form">
                        <Form.Control
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Buscar un Candidato"
                          style={{ textAlign: "right", marginRight: "5px" }}
                          className="form_co"
                        ></Form.Control>
                      </InputGroup>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <table
                className="colorTable table table-hover"
                style={{ background: "#05285190 !important" }}
              >
                <thead
                  className="container_table sticky"
                  style={{ backgroundColor: "#fff" }}
                >
                  <tr>
                    <th className="text-center" style={{ width: "35%" }} id="text_left_name">
                      PARTIDO POLÍTICO
                    </th>
                    <th className="text-center" style={{ width: "40%" }} id="text_left_name">
                      NOMBRE CANDIDATO
                    </th>
                    <th className="text-center" style={{ width: "25%" }} id="text_left_name">
                      VOTOS MUNICIPIO
                    </th>
                  </tr>
                </thead>
                <tbody className="color container_table">
                  {arrayVotesSenadoTerritorial
                    .filter((myVotes) => {
                        return search === ""
                          ? myVotes
                          : myVotes.candidate_name
                              .toLowerCase()
                              .includes(search.toLowerCase());
                      })
                    .map((myVotes, contador) => (
                      <tr key={contador}>
                        <td className="text_left_name">
                          {myVotes.description_politicparty}
                        </td>
                        <td className="text_left_name">
                          {myVotes.candidate_name}
                        </td>
                        <td className="text_left_name">{format.format(myVotes.votos)}</td>
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
                <div className="text-center">
                  <a
                    type="button"
                    className="buttonBack buttonBack-primary"
                    href={"/jal/departamento/"+idDepartment}
                  >
                    <i className="bi bi-arrow-left-circle"></i>
                    &nbsp;&nbsp;REGRESAR A ELEGIR UN MUNICIPIO
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
            style={{ background: "#FFFFFFBF !important" }}
          >
            <Modal.Body className="text-center">
              <div className="text-center">
                <img src={ImageSpinner} style={{height:"100px", width:"200px"}}/>
                <div className="mt-4">
                  <div className="spinner-border text-danger" role="status">
                    <span className=" visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
  
        {/* Ejemplo de una tabla para presentación de datos: Fin */}
      </main>
    );
  };