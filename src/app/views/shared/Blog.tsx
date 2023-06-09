import sergio from "../../../assets/image/Blog/sergiofagardo.webp";
import petro from "../../../assets/image/Blog/gustavopetro.webp";
import rodolfo from "../../../assets/image/Blog/rodolfo.webp";
import elecciones from "../../../assets/image/Blog/eleccionesnoticia.webp";
import uribe from "../../../assets/image/Blog/uribe.webp";
import loteriabanner from "../../../assets/image/Blog/publicidadloteria.webp";
import banner from "../../../assets/image/Blog/bannerpublicidad.webp";
import bannerPublicidad from "../../../assets/image/Blog/publicidadLoteriaHori.webp";

export const Blog = () => {
  return (
    <div id="about" className="containner-welcome ">
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-9" data-aos="fade-up">
              <h3 className="category-title">CATEGORIA: POLÍTICA</h3>
              <div className="col-lg-4 mb-4 no_responsive">
                      <img
                        src={bannerPublicidad}
                        alt="Publicidad de hitdata"
                        style={{ width: "100%" }}
                      />
                    </div>
              <div className="d-md-flex post-entry-2 half">
                <a href="single-post.html" className="me-4 mt-5 thumbnail">
                  <img
                    src={petro}
                    alt="imagen de petro"
                    className="img-fluid"
                  />
                </a>
                <div>
                  <div className="post-meta">
                    <span className="date">Política</span>{" "}
                    <span>14:18 ET(18:18 GMT) 7 agosto, 2022</span>
                  </div>
                  <h3>
                    ¿Cómo podría ser Petro el presidente que una a todos los
                    colombianos? Estos son sus principales retos
                  </h3>
                  <p>
                    Gustavo Petro fue elegido para ser el próximo presidente de
                    Colombia con una ambiciosa agenda que va desde implementar
                    la justicia social, acabar las desigualdades económicas,
                    garantizar derechos básicos como la educación y salud
                    gratuitas y universales, hasta poner a Colombia como líder
                    en temas de medio ambiente en el mundo.
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="name">
                      <h3 className="m-0 p-0">Melissa Velásquez Loaiza</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-md-flex post-entry-2 half">
                <a href="single-post.html" className="me-4 thumbnail">
                  <img
                    src={sergio}
                    alt="Imagen de sergio"
                    className="img-fluid"
                  />
                </a>
                <div>
                  <div className="post-meta">
                    <span className="date">Politica</span>{" "}
                    <span>02 mar 2023 - 05:15 COT</span>
                  </div>
                  <h3>
                    Sergio Fajardo: “Es una fortuna para Colombia que Ocampo sea
                    ministro de Hacienda”
                  </h3>
                  <p>
                    El excandidato presidencial, muy crítico del presidente
                    Gustavo Petro, acaba de lanzar el partido Dignidad y
                    Compromiso junto al exsenador Jorge Enrique Robledo
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="name">
                      <h3 className="m-0 p-0">Santiago Torrado</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-md-flex post-entry-2 half ">
                <a
                  href="single-post.html"
                  className="me-4 thumbnail"
                  style={{ marginTop: "8%" }}
                >
                  <img
                    src={rodolfo}
                    alt="Imangen de rodolfo"
                    className="img-fluid"
                  />
                </a>
                <div>
                  <div className="post-meta">
                    <span className="date">Política</span>{" "}
                    <span>05/02/2023</span>
                  </div>
                  <h3>Rodolfo Hernández: 'acepto el resultado'</h3>
                  <p>
                    Después de perder las elecciones presidenciales contra
                    Gustavo Petro, Rodolfo Hernández se dirigió al país a través
                    de sus redes sociales. Hernández, quien aspiró por la Liga
                    de Gobernantes Anticorrupción, obtuvo más de 10 millones de
                    votos en la jornada de este domingo y en un discurso que no
                    duró más de dos minutos reconoció su derrota y le pidió a
                    Petro que no defraude a sus electores.
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="name">
                      <h3 className="m-0 p-0">NACIÓN</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-md-flex post-entry-2 half">
                <a href="single-post.html" className="me-4 mt-4 thumbnail">
                  <img
                    src={elecciones}
                    alt="Imagen de las eleciones"
                    className="img-fluid"
                  />
                </a>
                <div>
                  <div className="post-meta">
                    <span className="date">Política</span>{" "}
                    <span>05/02/2023</span>
                  </div>
                  <h3>
                    Registrador Nacional no afectó las elecciones a Congreso de
                    2022: Tribunal
                  </h3>
                  <p>
                    Un fallo del Tribunal Administrativo de Cundinamarca
                    determinó que no hay pruebas de supuesto plan para alterar
                    los resultados como en su momento lo denunció el
                    expresidente Andrés Pastrana
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="name">
                      <h3 className="m-0 p-0">Alexander Vega</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-md-flex post-entry-2 half">
                <a href="single-post.html" className="me-4 mt-5 thumbnail">
                  <img
                    src={uribe}
                    alt="imagen del expresidente uribe"
                    className="img-fluid"
                  />
                </a>
                <div>
                  <div className="post-meta">
                    <span className="date">Política</span>{" "}
                    <span>22/3/2023</span>
                  </div>
                  <h3>
                    Expresidente Álvaro Uribe presenta borrador de su propuesta
                    de consulta popular: pide “suspender cualquier reforma
                    laboral”
                  </h3>
                  <p>
                    Tal como lo había anunciado hace dos semanas, el
                    expresidente Álvaro Uribe Vélez presentó este miércoles
                    algunas de las preguntas que tendría la consulta popular,
                    con la cual busca convocar a los ciudadanos para que se
                    pronuncien sobre los cambios que quieren en materia
                    pensional y de salud.
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="name">
                      <h3 className="m-0 p-0">Semana</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3" data-aos="fade-up">
              <div className="aside-block">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-popular"
                    role="tabpanel"
                    aria-labelledby="pills-popular-tab"
                  >
                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Política</span>{" "}
                        <span>15 sept 2022</span>
                      </div>
                      <h2 className="mb-2">
                        Demanda pide tumbar elección de Gustavo Petro y Francia
                        Márquez: ¿por qué?
                      </h2>
                      <span className="author mb-3 d-block">El Espectador</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Política</span>{" "}
                        <span>12 ago 2022</span>
                      </div>
                      <h2 className="mb-2">
                        17 % de encuestados por Cifras y Conceptos no reconoce
                        triunfo de presidente Petro
                      </h2>
                      <span className="author mb-3 d-block">El Espectador</span>
                    </div>
                    
                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Politica</span>{" "}
                        <span>27 jul 2022</span>
                      </div>
                      <h2 className="mb-2">
                        ¿Sí o no?: los debates presidenciales en Brasil están en
                        duda por Lula y Bolsonaro
                      </h2>
                      <span className="author mb-3 d-block">El Espectador</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Política</span>{" "}
                        <span>20 jun 2022</span>
                      </div>
                      <h2 className="mb-2">
                        “Hay que hacer un acuerdo nacional que incluya a Álvaro
                        Uribe Vélez”: Benedetti
                      </h2>
                      <span className="author mb-3 d-block">El Espectador</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Política</span>{" "}
                        <span>13 jun 2022</span>
                      </div>
                      <h2 className="mb-2">
                        Gustavo Petro - Rodolfo Hernández, el último (no) debate
                      </h2>
                      <span className="author mb-3 d-block">El Espectador</span>
                    </div>
                    <div className="col-lg-4 banner_responsive">
                      <div className="container sidebar" data-aos="fade-up">
                        <img
                          src={loteriabanner}
                          alt="Publicidad de loteria de boyaca"
                          style={{ width: "1000%" }}
                        />
                        <hr className="hr" />
                        <img
                          src={banner}
                          alt="Publicidad de hitdata"
                          style={{ width: "1000%" }}
                        />
                        <hr className="hr" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
