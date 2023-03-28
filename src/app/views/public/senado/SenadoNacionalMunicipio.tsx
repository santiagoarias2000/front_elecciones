import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VotesCongreso from "../../../models/VotesCongreso";
import ApiBack from "../../../utilities/domains/ApiBack";
import ServicePrivate from "../../../services/ServicePrivate";
import senado from "../../../../assets/image/SENADO.webp";
import { Form, InputGroup, Modal, Pagination } from "react-bootstrap";
import Municipality from "../../../models/Municipality";
import ImageSpinner from "../../../../assets/image/errorlogo.webp";

export const SenadoNacionalMunicipio = () => {
  //Variables
  let { idDepartment } = useParams();
  let { idMunicipality } = useParams();
  
  const [search, setSearch] = useState("");
  const [searchMunicipio, setSearchMunicipio] = useState("");

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [arrayVotesSenadoTerritorial, setArrayVotosSenadoTerritorial] =
    useState<VotesCongreso[]>([]);
  const [arrayMunicipio, setArrayMunicipio] = useState<Municipality[]>([]);
  const [arrayNameMunicipality, setArrayNameMunicipality] = useState<
    Municipality[]
  >([]);

  //Funciones
  const getVotosSenadoTerritorial = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.SENADO_NACIONAL_MUNICIPIO +
        "/" +
        idDepartment +
        "/municipio/" +
        idMunicipality
    );
    setArrayVotosSenadoTerritorial(result);
    setShow(false);
  };
  // get vehicle to be displayed in the combo
  const getMuniciaplity = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.COMBOBOX_MUNICIPIO + "/" + idDepartment
    );
    setArrayMunicipio(result);
  };
  const getNameMunicipality = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.NOMBRE_MUNICIPIO + "/" + idMunicipality
    );
    setArrayNameMunicipality(result);
  };

  useEffect(() => {
    getVotosSenadoTerritorial();
    getMuniciaplity();
    getNameMunicipality();
  }, []);

  return (
    <main id="main" className="main">
      <img
        src={senado}
        style={{
          width: "100%",
          maxHeight: "80%",
          marginTop: "10vw",
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
              <b className="title_table">
                CIRCUNCRIPCIÓN TERRITORIAL MUNICIPAL
              </b>
            </div>
          </div>

          <div className="d-flex">
            <div className="container">
              <div className="row">
                <div className="dropdown col-sm align-content-center my-3">
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
                      {arrayMunicipio.filter((val)=>{
                        if (searchMunicipio == "") {
                         return val;
                        }else if(val.name_municipality.toLocaleLowerCase().includes(searchMunicipio.toLocaleLowerCase())){
                         return val;
                        }})
                      .map((miMunicipio, indice) => (
                        <a
                          className="dropdown-item"
                          href={
                            "/guiaelectoral/senado/indigena/departamento/" +
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
              <thead className="container_table">
                <tr>
                  <th className="text-center" style={{ width: "30%" }}>
                    PARTIDO POLÍTICO
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    NOMBRE CANDIDATO
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    VOTOS DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    VOTOS MUNICIPIO
                  </th>
                </tr>
              </thead>
              <tbody className="color">
                {arrayVotesSenadoTerritorial
                  .filter((val=>{
                    if(search == ""){
                      return val;
                    }else if(val.candidate_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                      return val;
                    }
                  }))
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text-center">
                        {myVotes.description_politicparty}
                      </td>
                      <td className="text-center">
                        {myVotes.candidate_name}
                      </td>
                      <td className="text-center">{myVotes.votos}</td>
                      <td className="text-center">{myVotes.votos_muicipio}</td>
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
                  href={"/guiaelectoral/senado/nacional/" + idDepartment}
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

      {/* Ejemplo de una tabla para presentación de datos: Fin */}
    </main>
  );
};
