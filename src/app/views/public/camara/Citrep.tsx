import { useEffect, useState } from "react";
import { Form, InputGroup} from "react-bootstrap";
import { useParams } from "react-router-dom";
import CandidatosCitrep from "../../../mocks/models/CITREP/CandidatosCitrep";
import { ARREGLO_CANDIDATOS_CITREP } from "../../../mocks/MocksCitrep/candidatos-citrep-mocks";
import camara from "../../../../assets/image/HeaderTable/CRterrirorial.webp";
export const Citrep = () => {
  let { idCitrep }: any = useParams();
  const idCitrepNumber: number = parseInt(idCitrep) as number;
  //Format Number Votes
  const format: any = new Intl.NumberFormat();
  const [search, setSearch] = useState("");
  const [arrayVotesCitrep, setArrayVotesCitrep] = useState<CandidatosCitrep[]>(
    ARREGLO_CANDIDATOS_CITREP
  );
  //Prevent enter in search box
  function submitHandler(e: any) {
    e.preventDefault();
  }
  const arregloCitrepId: CandidatosCitrep[] = [];
  const arregloNombre: CandidatosCitrep[] = [];

  const objName = arrayVotesCitrep.filter(
    (objeto) => objeto.idCitrep.idCitrep === idCitrepNumber
  );
  if (objName.length > 0) {
    arregloNombre.push(objName[0]);
  }
  arrayVotesCitrep.map((item) => {
    if (item.idCitrep.idCitrep === idCitrepNumber) {
      arregloCitrepId.push(item);
    }
  });
  useEffect(() => {}, [idCitrep]);

  return (
    <main id="main" className="main">
      <img
        src={camara}
        style={{ width: "100%", maxHeight: "80%", marginTop: "3vw" }}
        alt="logo principal para la parte superior de la pagina web"
      />
      <div className="side_bar"></div>
      <div className="col-lg-12" style={{ color: "#052851 !important" }}>
        <div className="cardBorder card">
          <div className="container-fluid display-flex justify-content-center container_title">
            <div className="text-center">
              <b className="title_table">CITREP</b> &nbsp;
            </div>
          </div>
          <div className="container responsive">
            <div className="row">
              <div className="col-sm "></div>
              <div className="col">
                <h6 className="text-center my-4" style={{ color: "#052851" }}>
                  {arregloNombre.map((miNombre) => (
                    <b>{miNombre.idCitrep.nombreCitrep}</b>
                  ))}
                </h6>
              </div>
              <div className="col-sm">
                <Form id="form_conta" onSubmit={submitHandler}>
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Buscar nombre candidato"
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
              <div className="col-sm "></div>
              <div className="col">
                <h6 className="text-center my-2" style={{ color: "#052851" }}>
                  {arregloNombre.map((miNombre) => (
                    <b>{miNombre.idCitrep.nombreCitrep}</b>
                  ))}
                </h6>
              </div>
              <div className="col-sm">
                <Form id="form_conta" onSubmit={submitHandler}>
                  <InputGroup className="my-1 container_form">
                    <Form.Control
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Buscar nombre candidato"
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
                    PARTIDO POLITIO
                  </th>
                  <th
                    className="text-center"
                    style={{ width: "30%" }}
                    id="text_left_name"
                  >
                    NOMBRE CANDIDATO
                  </th>
                  <th className="text-center" style={{ width: "35%" }}>
                    VOTOS CIRCUNSCRIPCIÓN
                  </th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arregloCitrepId
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (
                      val.nombreCandidato
                        .toLocaleLowerCase()
                        .includes(search.toLocaleLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text_left_name">
                        {myVotes.agrupacionPolitica}
                      </td>
                      <td className="text_left_name">
                        {myVotes.nombreCandidato}
                      </td>
                      <td className="text-center align-middle">
                        {format.format(myVotes.votosCandidato)}
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
                  href={"/camara"}
                  type="button"
                  className="buttonBack buttonBack-primary"
                >
                  <i className="bi bi-arrow-left-circle"></i>
                  &nbsp;&nbsp;REGRESAR A ELEGIR MUNICIPIO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom-50 end-50"></div>
    </main>
  );
};
