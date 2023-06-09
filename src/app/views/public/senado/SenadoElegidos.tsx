import { useState } from "react";
import camara from "../../../../assets/image/HeaderTable/SENADO.webp";
import { useNavigate } from "react-router-dom";
import { Form, InputGroup } from "react-bootstrap";
import CandidatosSenado from "../../../mocks/models/CandidatosSenado";
import {
  ARREGLO_SENADO_108,
  ARREGLO_SENADO_INDIGENAS,
} from "../../../mocks/Senado108Marzo2022";

export const SenadoElegidos = () => {
  const [search, setSearch] = useState("");
  const [searchIndigenas, setSearchIndigenas] = useState("");

  const regresar = useNavigate();

  const [arrayVotesSenadoNacional, setArrayVotesSenadoNacional] =
    useState<CandidatosSenado[]>(ARREGLO_SENADO_108);
  const [arrayVotesSenadoIndigena, setArrayVotesSenadoIndigena] = useState<
    CandidatosSenado[]
  >(ARREGLO_SENADO_INDIGENAS);

  //Prevent enter in search box
  function submitHandler(e: any) {
    e.preventDefault();
  }

  //Format Number Votes
  const format = new Intl.NumberFormat("es");

  function myFormat(formats: string) {
    const newFormat: number = Number(formats);
    return format.format(newFormat);
  }

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
              <b className="title_table">CIRCUNSCRIPCIÓN NACIONAL</b> &nbsp;
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="name_table mt-2">LISTA DE 108 ELEGIDOS</div>
              </div>
              <div className="col-sm">
                <Form id="form_conta" onSubmit={submitHandler}>
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Buscar un Partido Político o Candidato"
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
                  <th className="text-center" style={{ width: "20%" }}>
                    PARTIDO POLÍTICO
                  </th>
                  <th className="text-center" style={{ width: "30%" }}>
                    NOMBRE CANDIDATO
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    TOTAL VOTOS NACIONAL
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    MAYOR VOTACIÓN
                  </th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotesSenadoNacional
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (
                      val.description_politicparty
                        .toLocaleLowerCase()
                        .includes(search.toLocaleLowerCase())
                    ) {
                      return val;
                    } else if (
                      val.candidate_name
                        .toLocaleLowerCase()
                        .includes(search.toLocaleLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text-center">
                        {myVotes.description_politicparty}
                      </td>
                      <td
                        className="text_left_name"
                        style={{ fontWeight: "600" }}
                      >
                        {myVotes.candidate_name}
                      </td>
                      <td className="text-center">{myFormat(myVotes.votos)}</td>
                      <td className="text-center">{myVotes.name_department}</td>
                      <td className="text-center">
                        {myFormat(myVotes.max_votes)}
                      </td>
                    </tr>
                  ))}
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
              <b className="title_table">CIRCUNSCRIPCIÓN INDÍGENA</b> &nbsp;
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="name_table">Lista 2 elegidos</div>
              </div>
              <div className="col-sm">
                <Form id="form_conta" onSubmit={submitHandler}>
                  <InputGroup className="my-3 container_form">
                    <Form.Control
                      onChange={(e) => setSearchIndigenas(e.target.value)}
                      placeholder="Buscar un Partido Político o Candidato"
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
              <thead
                className="container_table primeraFila"
                style={{ backgroundColor: "#fff" }}
              >
                <tr>
                  <th className="text-center" style={{ width: "20%" }}>
                    PARTIDO
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    NOMBRE CANDIDATO
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    TOTAL VOTOS NACIONAL
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    DEPARTAMENTO
                  </th>
                  <th className="text-center" style={{ width: "20%" }}>
                    MAYOR VOTACIÓN
                  </th>
                </tr>
              </thead>
              <tbody className="color container_table">
                {arrayVotesSenadoIndigena
                  .filter((val) => {
                    if (searchIndigenas === "") {
                      return val;
                    } else if (
                      val.description_politicparty
                        .toLocaleLowerCase()
                        .includes(searchIndigenas.toLocaleLowerCase())
                    ) {
                      return val;
                    } else if (
                      val.candidate_name
                        .toLocaleLowerCase()
                        .includes(searchIndigenas.toLocaleLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text-center">
                        {myVotes.description_politicparty}
                      </td>
                      <td
                        className="text-left"
                        style={{ fontWeight: "600", paddingLeft: "5vw" }}
                      >
                        {myVotes.candidate_name}
                      </td>
                      <td className="text-center">{myFormat(myVotes.votos)}</td>
                      <td className="text-center">{myVotes.name_department}</td>
                      <td className="text-center">
                        {myFormat(myVotes.max_votes)}
                      </td>
                    </tr>
                  ))}
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
              <button
                type="button"
                className="buttonBack buttonBack-primary"
                onClick={() => regresar(-1)}
              >
                <i className="bi bi-arrow-left-circle"></i>
                &nbsp;&nbsp;REGRESAR A ELEGIR CIRCUNSCRIPCIÓN
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom-50 end-50"></div>
    </main>
  );
};
