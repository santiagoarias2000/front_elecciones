import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, InputGroup, Modal } from "react-bootstrap";
import Municipality from "../../../models/Municipality";
import VotesConcejo from "../../../models/DataElection";
import ServicePrivate from "../../../services/ServicePrivate";
import ApiBack from "../../../utilities/domains/ApiBack";
import concejo from "../../../../assets/image/HeaderTable/ELECONCEJO.webp";
import ImageSpinner from "../../../../assets/image/LOGOAZUL.webp";
import * as XLSX from "xlsx";

export const ConcejoMunicipal = () => {
  let { idDepartment } = useParams();
  let { idMunicipality } = useParams();

  const [searchMunicipio, setSearchMunicipio] = useState("");
  const [Localidad, setLocalidad] = useState<Municipality[]>([]);
  const [showComboBox, setShowComboBox] = useState(false);

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [arrayNameMunicipality, setArrayNameMunicipality] = useState<
    Municipality[]
  >([]);
  const [arrayVotesConcejoTerritorial, setArrayVotosConcejoTerritorial] =
    useState<VotesConcejo[]>([]);

  //Funciones
  const getVotosConcejoMunicipal = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.CONCEJO_DEPARTAMENTO_MUNICIPIO + "/" + idMunicipality
    );
    setArrayVotosConcejoTerritorial(result);
    setShow(false);
  };
  const getNameMunicipality = async () => {
    const result = await ServicePrivate.requestGET(
      ApiBack.NOMBRE_MUNICIPIO + "/" + idMunicipality
    );
    setArrayNameMunicipality(result);
  };
  const getComboBoxLocalidad = async () => {
    const resultado = await ServicePrivate.requestGET(
      ApiBack.COMBOBOX_LOCATION
    );
    setLocalidad(resultado);
    return resultado;
  };
  const myNavigate = useNavigate();

  const viewComboBox = () => {
    if (idDepartment === "11") {
      getComboBoxLocalidad();
      setShowComboBox(true);
    } else {
      setShowComboBox(false);
    }
  };
  const boton = () => {
    if (idDepartment === "11") {
      myNavigate("/concejo");
    } else {
      myNavigate("/concejo/departamento/" + idDepartment);
    }
  };

  //Format Number Votes
  const format = new Intl.NumberFormat();
  //Prevent enter in search box
  function submitHandler(e: any) {
    e.preventDefault();
  }

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(arrayVotesConcejoTerritorial);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Camara");

    const execlBuffer = XLSX.write(workbook, { type: "array" });

    const blob = new Blob([execlBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = 'Datos elecciones consejo del municipio.xlsx ';
    a.click();

    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    getVotosConcejoMunicipal();
    getNameMunicipality();
    viewComboBox();
  }, [idDepartment, idMunicipality]);
  return (
    <main id="main" className="main">
      <div className="responsive_pr">
        <img
          src={concejo}
          alt="logo principal para la parte superior de la pagina web"
        />
      </div>
      <div className="side_bar"></div>

      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div
          className="cardBorder card"
          style={{ borderRadius: "0px 0px 5px 5px" }}
        >
          <div className="container responsive">
            <div className="row">
              <div className="col-sm ">
                {showComboBox && (
                  <div className="dropdown text-center my-3">
                    <button
                      type="button"
                      className="buttonBack buttonBack-primary dropdown-toggle text-light"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Localidades
                    </button>
                    <ul
                      className="dropdown-menu selectpicker"
                      data-live-search="true"
                      style={{ maxHeight: "200px", overflowY: "auto" }}
                    >
                      <div className="sticky-top">
                        <input
                          type="text"
                          placeholder="Busqueda..."
                          className="mi-sticky"
                          onChange={(event) => {
                            setSearchMunicipio(event.target.value);
                          }}
                        />
                      </div>
                      <li>
                        {Localidad.filter((val) => {
                          if (searchMunicipio === "") {
                            return val;
                          } else if (
                            val.name_municipality
                              .toLocaleLowerCase()
                              .includes(searchMunicipio.toLocaleLowerCase())
                          ) {
                            return val;
                          }
                        }).map((miMunicipio, indice) => (
                          <a
                            className="dropdown-item"
                            href={
                              "/concejo/departamento/" +
                              idDepartment +
                              "/localidad/" +
                              miMunicipio.id_municipality
                            }
                          >
                            <b className="name_text">
                              {miMunicipio.name_municipality}
                            </b>
                          </a>
                        ))}
                      </li>
                    </ul>
                  </div>
                )}
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
                      onChange={(e) => setSearchMunicipio(e.target.value)}
                      placeholder="Buscar nombre Candidato"
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
                <div className="col">
                  <h6 className="text-center my-2" style={{ color: "#052851" }}>
                    {arrayNameMunicipality.map((myNameMunicipality) => (
                      <b className="name_text">
                        {myNameMunicipality.name_municipality}
                        {" ("}
                        {myNameMunicipality.department}
                        {")"}
                      </b>
                    ))}
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center mt-2 mb-2 justify-content-between">
                {showComboBox && (
                  <div
                    className="dropdown text-left mb-1"
                    style={{ marginRight: "5%" }}
                  >
                    <button
                      type="button"
                      className="buttonBack buttonBack-primary dropdown-toggle text-light"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Localidades
                    </button>
                    <ul
                      className="dropdown-menu selectpicker"
                      data-live-search="true"
                      style={{ maxHeight: "200px", overflowY: "auto" }}
                    >
                      <div className="sticky-top">
                        <input
                          type="text"
                          placeholder="Busqueda..."
                          className="mi-sticky"
                          onChange={(event) => {
                            setSearchMunicipio(event.target.value);
                          }}
                        />
                      </div>
                      <li>
                        {Localidad.filter((val) => {
                          if (searchMunicipio === "") {
                            return val;
                          } else if (
                            val.name_municipality
                              .toLocaleLowerCase()
                              .includes(searchMunicipio.toLocaleLowerCase())
                          ) {
                            return val;
                          }
                        }).map((miMunicipio, indice) => (
                          <a
                            className="dropdown-item"
                            href={
                              "/concejo/departamento/" +
                              idDepartment +
                              "/localidad/" +
                              miMunicipio.id_municipality
                            }
                          >
                            <b className="name_text">
                              {miMunicipio.name_municipality}
                            </b>
                          </a>
                        ))}
                      </li>
                    </ul>
                  </div>
                )}

                <div className="col-sm">
                  <Form id="form_conta" onSubmit={submitHandler}>
                    <InputGroup className="my-1 container_form">
                      <Form.Control
                        onChange={(e) => setSearchMunicipio(e.target.value)}
                        placeholder="Buscar nombre Candidato"
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
                className="container_table primeraFila"
                style={{ backgroundColor: "#fff" }}
              >
                <tr>
                  <th
                    className="text-center"
                    style={{ width: "35%" }}
                    id="text_left_name"
                  >
                    PARTIDO POLÍTICO
                  </th>
                  <th
                    className="text-center"
                    style={{ width: "40%" }}
                    id="text_left_name"
                  >
                    NOMBRE CANDIDATO
                  </th>
                  <th
                    className="text-center"
                    style={{ width: "25%" }}
                    id="text_left_name"
                  >
                    VOTOS MUNICIPIO
                  </th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotesConcejoTerritorial
                  .filter((myVotes) => {
                    return searchMunicipio === ""
                      ? myVotes
                      : myVotes.candidate_name
                          .toLowerCase()
                          .includes(searchMunicipio.toLowerCase());
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text_left_name left_alination">
                        {myVotes.description_politicparty}
                      </td>
                      <td className="text_left_name">
                        {myVotes.candidate_name}
                      </td>
                      <td className="text-center">
                        {format.format(myVotes.votos)}
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
                  onClick={() => {
                    boton();
                  }}
                >
                  <i className="bi bi-arrow-left-circle"></i>
                  &nbsp;&nbsp;REGRESAR A ELEGIR UN MUNICIPIO
                </a>
                &nbsp;&nbsp;
                <button className="buttonBack buttonBack-primar hover_down" onClick={exportToExcel}>Descargar Excel <i className="fa-regular fa-file-excel"></i></button>
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
              <img
                src={ImageSpinner}
                style={{ height: "100px", width: "200px" }}
              />
              <div className="mt-4">
                <div className="spinner-border text-danger" role="status">
                  <span className=" visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </main>
  );
};
