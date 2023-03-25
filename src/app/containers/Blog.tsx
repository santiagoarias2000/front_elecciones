import sergio from "../../assets/image/sergiofagardo.webp";
import petro from "../../assets/image/gustavopetro.webp";
import rodolfo from "../../assets/image/rodolfo.webp";
import elecciones from "../../assets/image/eleccionesnoticia.webp";
import loteriabanner from "../../assets/image/publicidadloteria.webp";
import verticalbanner from "../../assets/image/verticalbanner.webp";
import banner from "../../assets/image/bannerpublicidad.webp";
import banner2 from "../../assets/image/BANNER-CAMPANA.jpg";
import banner3 from "../../assets/image/banner2.webp";

export const Blog = () => {
  return (
    <main id="main" className="main ">
      <section id="blog" className="blog ">
        <div className="container containner_blog" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <div className="container" data-aos="fade-up">
                <article className="entry">
                  <div className="entry-img">
                    <img
                      src={sergio}
                      alt="Imagen de Segio Fajardo"
                      className="img-fluid"
                    />
                  </div>

                  <h2 className="entry-title text_title_respo">
                    Sergio Fajardo: “Es una fortuna para Colombia que Ocampo sea
                    ministro de Hacienda”
                  </h2>

                  <div className="entry-meta">
                    <ul className="meta_responsive">
                      <li className="d-flex align-items-center ">
                        <i className="bi bi-person"></i>
                        <a
                          href="blog-single.html"
                          className="text_meta_responsive"
                        >
                          Santiago Torrado
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>
                        <a
                          href="blog-single.html"
                          className="text_meta_responsive"
                        >
                          <time dateTime="2020-01-01">
                            {" "}
                            02 mar 2023 - 05:15 COT
                          </time>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      El excandidato presidencial, muy crítico del presidente
                      Gustavo Petro, acaba de lanzar el partido Dignidad y
                      Compromiso junto al exsenador Jorge Enrique Robledo
                    </p>
                  </div>
                </article>
              </div>

              <article className="entrys">
                <img
                  src={banner2}
                  alt="Publicidad de loteria de boyaca"
                  style={{ width: "100%" }}
                />
              </article>

              <div className="container" data-aos="fade-up">
                <article className="entry">
                  <div className="entry-img">
                    <img
                      src={petro}
                      alt="Imagen de Gustavo Petro"
                      className="img-fluid"
                    />
                  </div>

                  <h2 className="entry-title text_title_respo">
                    Quién es Gustavo Petro, el presidente electo de Colombia que
                    alcanzó más de 11 millones de votos
                  </h2>

                  <div className="entry-meta">
                    <ul className="meta_responsive">
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person"></i>{" "}
                        <a href="blog-single.html">Melissa Velásquez Loaiza</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>{" "}
                        <a href="blog-single.html">
                          <time dateTime="2020-01-01">
                            07:10 ET(11:10 GMT) 7 agosto, 2022
                          </time>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      El candidato de izquierda Gustavo Petro ganó las
                      elecciones en Colombia al lograr más de 11 millones de
                      votos en la segunda vuelta presidencial realizada el 19 de
                      junio, según los resultados de la Registraduría. Asumirá
                      su cargo este domingo.
                    </p>
                  </div>
                </article>
              </div>

              <div className="container" data-aos="fade-up">
                <article className="entry">
                  <div className="entry-img">
                    <img src={rodolfo} alt="" className="img-fluid" />
                  </div>

                  <h2 className="entry-title text_title_respo">
                    La decepción de Jaime Bayly con Rodolfo Hernández por su
                    reunión con Petro
                  </h2>

                  <div className="entry-meta">
                    <ul className="meta_responsive">
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person"></i>{" "}
                        <a href="blog-single.html">Redacción Política</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>{" "}
                        <a href="blog-single.html">
                          <time dateTime="2020-01-01">
                            01 de julio 2022, 11:18 A. M
                          </time>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      Hace pocas semanas Rodolfo, estuviste aquí conmigo, te
                      entrevisté, dijiste que Petro estaba rodeado de lo peor de
                      la política colombiana, de hampones, de bandoleros.
                      Dijiste que Petro quería matarte
                    </p>
                  </div>
                </article>
              </div>
              <article className="entrys">
                <img
                  src={banner3}
                  alt="Publicidad de loteria de boyaca"
                  style={{ width: "100%" }}
                />
              </article>
              <div className="container" data-aos="fade-up">
                <article className="entry">
                  <div className="entry-img">
                    <img src={elecciones} alt="" className="img-fluid" />
                  </div>

                  <h2 className="entry-title text_title_respo">
                    Elecciones: así puede consultar su puesto de votación este
                    19 de junio
                  </h2>

                  <div className="entry-meta">
                    <ul className="meta_responsive">
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person"></i>{" "}
                        <a href="blog-single.html">Redacción el Tiempo</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i>{" "}
                        <a href="blog-single.html">
                          <time dateTime="2020-01-01">
                            19 de junio 2022, 09:51 A. M.
                          </time>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      Este 19 de junio se realizará la segunda vuelta de las
                      elecciones para escoger al nuevo presidente de la
                      República, quien empezará su mandato el 7 de agosto, en
                      reemplazo de Iván Duque. Gustavo Petro y Rodolfo Hernández
                      son los dos candidatos que estarán en el tarjetón del
                      balotaje, junto a la opción del voto en blanco.
                    </p>
                  </div>
                </article>
              </div>

              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 banner_responsive">
              <div className="container sidebar" data-aos="fade-up">
                <img
                  src={loteriabanner}
                  alt="Publicidad de loteria de boyaca"
                  style={{ width: "100%" }}
                />
                <hr className="hr" />
                <img
                  src={verticalbanner}
                  alt="Publicidad de hitdata"
                  style={{ width: "100%" }}
                />
                <hr className="hr" />
                <img
                  src={banner}
                  alt="Publicidad de hitdata"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
