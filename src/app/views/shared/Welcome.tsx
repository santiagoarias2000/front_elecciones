import Img7Carrusel from "../../../assets/image/Img8.webp";
import Img1Carr from "../../../assets/image/GuiasAntiguas/Img1.webp";
import Img2Carr from "../../../assets/image/GuiasAntiguas/Img2.webp";
import Img3Carr from "../../../assets/image/GuiasAntiguas/Img3.webp";
import Img4Carr from "../../../assets/image/GuiasAntiguas/Img4.webp";
import Img5Carr from "../../../assets/image/GuiasAntiguas/Img5.webp";
import Img6Carr from "../../../assets/image/GuiasAntiguas/Img6.webp";
import ImgHitData from "../../../assets/image/Patrocinadores/azul.webp";
import ImgLoteriaBoyaca from "../../../assets/image/Patrocinadores/LoteriaBoyaca.webp";
import ImgDonJose from "../../../assets/image/Patrocinadores/DonJose.webp";
import { Carousel, Modal } from "react-bootstrap";
import "../../../assets/js/carrusel.js";
import { useState, useEffect } from "react";
import ImageSpinner from "../../../assets/image/Blog/publicidadloteria.webp";

export const Welcome = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  function hideModal() {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }

  useEffect(() => {
    hideModal();
  }, []);

  return (
    <div id="about" className="containner-welcome">
      <section className="about">
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div className="col-lg-6 video-box">
              <img
                src={Img7Carrusel}
                className="img-fluid_seo"
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "100%",
                  maxHeight: "auto",
                }}
                alt="Imagen de la guia electoral de colombia"
              />
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
              <div className="section-title" style={{ paddingBottom: "5%" }}>
                <h2>Bienvenido a Guía Electoral de Colombia</h2>
                <h6 className="fst-italic text_extr">
                  ¡¡¡Para estrategias...Documéntese!!!
                </h6>
                <p className="text-center text_exfl">
                  Documento exclusivo para la consulta de resultados electorales
                  en el país y de uso estratégico en la toma de decisiones en
                  marketing político.
                  <br />
                  <br />
                  <b>
                    Marca Comercial Registrada Resolución No.72407 del 25 de
                    octubre de 2016 - SIC
                  </b>
                </p>
              </div>
              <div className="text-center mb-3">
                <iframe
                  className="cambiosResponsivos"
                  src="https://www.youtube.com/embed/4sgV7e2Qnn0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="section-title">
                <h5>RESULTADOS ELECTORALES</h5>
                <hr style={{ color: "#052851" }} />
              </div>
              <div className="d-flex justify-content-center">
                <ul className="prueba">
                  <li>
                    {/* {localStorage.getItem("tokenHitData") ? ( */}
                      <a className="flex d-block" href="/presidencia">
                        <div className="row">
                          <div className="col-12 login">PRESIDENCIA</div>
                        </div>
                      </a>
                    {/*) : (
                      <a className="flex d-block" href="/presidencia">
                        <div className="row">
                          <div
                            className="col-9 justify-content-start"
                            style={{ paddingLeft: "20%" }}
                          >
                            &nbsp;PRESIDENCIA
                          </div>
                        </div>
                      </a>
                    )}

                    {localStorage.getItem("tokenHitData") ? (*/}

                      <a className="flex d-block" href="/senado">
                        <div className="row">
                          <div className="col-12 login">SENADO</div>
                        </div>
                      </a>
                   {/* ) : (
                      <a className="flex d-block" href="/senado">
                        <div className="row">
                          <div
                            className="col-9 justify-content-start"
                            style={{ paddingLeft: "20%" }}
                          >
                            &nbsp;SENADO
                          </div>
                        </div>
                      </a>
                    )}
                   {localStorage.getItem("tokenHitData") ? (*/}

                      <a className="flex d-block" href="/camara">
                        <div className="row">
                          <div className="col-12 login">CÁMARA</div>
                        </div>
                      </a>
                      
                   {/* ) : (
                      <a className="flex d-block" href="/camara">
                        <div className="row">
                          <div
                            className="col-9 justify-content-start"
                            style={{ paddingLeft: "20%" }}
                          >
                            &nbsp;CÁMARA
                          </div>
                        </div>
                      </a>
                    )}

                    {/* {localStorage.getItem("tokenHitData") ? ( */}
                      <a className="flex d-block" href="/gobernacion">
                        <div className="row">
                          <div className="col-12 login">GOBERNACIONES</div>
                        </div>
                      </a>
                    {/* ) : (
                      <a className="flex d-block" href="/gobernacion">
                        <div className="row">
                          <div
                            className="col-9 justify-content-start"
                            style={{ paddingLeft: "20%" }}
                          >
                            &nbsp;GOBERNACIONES
                          </div>
                          <div className="col-3 justify-content-start">
                            <i
                              className="fa-solid fa-crown"
                              style={{ color: "#d9224e" }}
                            ></i>
                            &nbsp;
                          </div>
                        </div>
                      </a>
                    )} */}

                    {/* {localStorage.getItem("tokenHitData") ? ( */}
                      <a className="flex d-block" href="/asamblea">
                        <div className="row">
                          <div className="col-12 login">ASAMBLEAS</div>
                        </div>
                      </a>
                    {/* ) : (
                      <a className="flex d-block" href="/asamblea">
                        <div className="row">
                          <div
                            className="col-9 justify-content-start"
                            style={{ paddingLeft: "20%" }}
                          >
                            &nbsp;ASAMBLEAS
                          </div>
                          <div className="col-3 justify-content-start">
                            <i
                              className="fa-solid fa-crown"
                              style={{ color: "#d9224e" }}
                            ></i>
                            &nbsp;
                          </div>
                        </div>
                      </a>
                    )} */}

                    {/* {localStorage.getItem("tokenHitData") ? ( */}
                      <a className="flex d-block" href="/alcaldia">
                        <div className="row">
                          <div className="col-12 login">ALCALDÍAS</div>
                        </div>
                      </a>
                    {/* // ) : (
                    //   <a className="flex d-block" href="/alcaldia">
                    //     <div className="row">
                    //       <div
                    //         className="col-9 justify-content-start"
                    //         style={{ paddingLeft: "20%" }}
                    //       >
                    //         &nbsp;ALCALDÍAS
                    //       </div>
                    //       <div className="col-3 justify-content-start">
                    //         <i
                    //           className="fa-solid fa-crown"
                    //           style={{ color: "#d9224e" }}
                    //         ></i>
                    //         &nbsp;
                    //       </div>
                    //     </div>
                    //   </a>
                    // )}

                    // {localStorage.getItem("tokenHitData") ? ( */}
                      <a className="flex d-block" href="/concejo">
                        <div className="row">
                          <div className="col-12 login">CONCEJO</div>
                        </div>
                      </a>
                    {/* ) : (
                      <a className="flex d-block" href="/concejo">
                        <div className="row">
                          <div
                            className="col-9 justify-content-start"
                            style={{ paddingLeft: "20%" }}
                          >
                            &nbsp;CONCEJO
                          </div>
                          <div className="col-3 justify-content-start">
                            <i
                              className="fa-solid fa-crown"
                              style={{ color: "#d9224e" }}
                            ></i>
                            &nbsp;
                          </div>
                        </div>
                      </a>
                    )}

                    {localStorage.getItem("tokenHitData") ? ( */}
                      <a className="flex d-block" href="/jal">
                        <div className="row">
                          <div className="col-12 login">JAL</div>
                        </div>
                      </a>
                    {/* ) : (
                      <a className="flex d-block" href="/jal">
                        <div className="row">
                          <div
                            className="col-9 justify-content-start"
                            style={{ paddingLeft: "20%" }}
                          >
                            &nbsp;JAL
                          </div>
                          <div className="col-3 justify-content-start">
                            <i
                              className="fa-solid fa-crown"
                              style={{ color: "#d9224e" }}
                            ></i>
                            &nbsp;
                          </div>
                        </div>
                      </a>
                    )} */}
                  </li>
                </ul>
              </div>

              <hr
                style={{
                  color: "#052851",
                }}
              />
               {/* {localStorage.getItem("tokenHitData") ? null : (
                <h6 className="text-center fst-italic text_extr">
                  <b>
                    Si deseas acceder a más información por favor inicia sesión
                  </b>
                </h6>
              )} */}

              {/* <div className="d-flex justify-content-center">
                <div id="alt-services" className="alt-services">
                  <div
                    className="icon-box d-flex position-relative"
                    data-aos-delay="100"
                  >
                    <i className="bi bi-calendar-week"></i>
                    <div className="d-flex align-items-center">
                      <h6>
                        <a href="" className="stretched-link">
                          CRONOGRAMA DE ELECCIONES 2023
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div
                    className="icon-box d-flex position-relative"
                    data-aos-delay="100"
                  >
                    <i className="bi bi-file-earmark-ruled"></i>
                    <div className="d-flex align-items-center">
                      <h6>
                        <a href="" className="stretched-link">
                          NORMATIVA ELECTORAL
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <p className="text-justify">
              La <b>Guía Electoral de Colombia</b> es un producto de iniciativa
              privada, que inicia en 1984 en la ciudad de Tunja, como tesis de
              grado en su estudio de mercados para optar el título de
              Administrador de Empresas de su editor en la universidad
              Pedagógica y Tecnológica de Colombia. Esta guía aporta a distintos
              públicos una herramienta para el análisis de conocimiento
              electoral de los protagonistas de elección popular como: ediles,
              concejales, alcaldes, diputados, gobernadores, congresistas y
              presidente de la República.
              <p>
                La Guia Electoral se ha publicado para los departamentos de
                Antioquia, Casanare, Cundinamarca, Santander, Valle del Cauca,
                Bogotá D.C y continuamente para Boyacá durante 34 años; una
                edición nacional con motivo de la elección de los miembros de la
                Asamblea Nacional Constituyente 1990, además de la edición
                especial con motivo del Plebiscito por la Paz 2016 y últimamente
                con información sobre la elección del pasado Gobierno Nacional
                2018-2022.
              </p>
            </p>
          </div>
          <div className="col-lg-6">
            <Carousel
              className="mb-5"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <Carousel.Item interval={1000}>
                <img
                  className="d-block"
                  src={Img1Carr}
                  style={{
                    width: "400px !important",
                    height: "600px !important",
                    opacity: "0.7",
                  }}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block"
                  src={Img2Carr}
                  style={{
                    width: "400px !important",
                    height: "600px !important",
                    opacity: "0.7",
                  }}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={Img3Carr}
                  style={{
                    width: "400px !important",
                    height: "600px !important",
                    opacity: "0.7",
                  }}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={Img4Carr}
                  style={{
                    width: "400px !important",
                    height: "600px !important",
                    opacity: "0.7",
                  }}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={Img5Carr}
                  style={{
                    width: "400px !important",
                    height: "600px !important",
                    opacity: "0.7",
                  }}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={Img6Carr}
                  style={{
                    width: "400px !important",
                    height: "600px !important",
                    opacity: "0.7",
                  }}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
          <div className="row mb-5">
            <div className="col-lg-6">
              <div className="box2">
                <div id="alt-services" className="alt-services">
                  <div
                    className="icon-box d-flex position-relative"
                    data-aos-delay="100"
                  >
                    <i className="bi bi-calendar-week"></i>
                    <div className="d-flex align-items-center">
                      <h6>
                        <a
                          href="https://wapp.registraduria.gov.co/electoral/elecciones-territoriales-2023/CalendarioElectoralTerritorial.html"
                          className="stretched-link"
                          target="_blank"
                        >
                          CRONOGRAMA DE ELECCIONES 2023
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="box2">
                <div id="alt-services" className="alt-services">
                  <div
                    className="icon-box d-flex position-relative"
                    data-aos-delay="100"
                  >
                    <i className="bi bi-file-earmark-ruled"></i>
                    <div className="d-flex align-items-center">
                      <h6>
                        <a
                          href="https://wapp.registraduria.gov.co/electoral/elecciones-territoriales-2023/Normativa.html"
                          className="stretched-link"
                          target="_blank"
                        >
                          NORMATIVA ELECTORAL
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>PATROCINADORES</h2>
            <p className="text-justify">
              Los patrocinadores de este proyecto son un grupo de empresas
              líderes del sector público y privado que han reconocido la
              importancia de la iniciativa. Gracias a la colaboración y el
              compromiso de nuestros patrocinadores, este proyecto cuenta con
              los recursos económicos y humanos necesarios para llevarse a cabo
              y alcanzar los objetivos planteados. Además, la participación de
              estas empresas aporta un valor adicional al proyecto al brindar su
              experiencia y conocimientos en las distintas áreas relacionadas
              con el mismo. Agradecemos profundamente el apoyo de nuestros
              patrocinadores y esperamos continuar trabajando juntos en futuros
              proyectos y colaboraciones.
            </p>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
              <div className="member">
                <div className="pic">
                  <img
                    src={ImgDonJose}
                    className="img-fluid"
                    alt="Imagen de jose gil zapata para patrocinio"
                    style={{ width: "261px !important", height: "100%" }}
                  />
                </div>
                <div className="member-info">
                  <h4>Jose Celestino Gil Zapata</h4>
                  <span>Autor/Editor</span>
                  <div className="social">
                    <a
                      href="https://www.facebook.com/josegilza/?locale=es_LA"
                      aria-label="Facebook"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="https://co.linkedin.com/in/jose-gil-a76aa6a6"
                      aria-label="Linkedin"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a
                      href="https://wa.me/+573144077994"
                      aria-label="Linkedin"
                    >
                      <i className="fa-brands fa-square-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="member">
                <div className="pic">
                  <img
                    src={ImgHitData}
                    className="img-fluid"
                    style={{ width: "100%", height: "100%" }}
                    alt="Imagen de hitdata para patrocinio"
                  />
                </div>
                <div className="member-info">
                  <h4>Hit Data</h4>
                  <span>Empresa de desarrollo</span>
                  <div className="social">
                    <a href="https://twitter.com/HitData" aria-label="Twitter">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/HitdataColombia"
                      aria-label="Facebook"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/hitdata/"
                      aria-label="Instagram"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="https://co.linkedin.com/in/hit-data-soluciones"
                      aria-label="Linkedin"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="member">
                <div className="pic">
                  <img
                    src={ImgLoteriaBoyaca}
                    className="img-fluid"
                    style={{ width: "100%", height: "100%" }}
                    alt="Imagen de la loteria de boyaca para patrocinio"
                  />
                </div>
                <div className="member-info">
                  <h4>Lotería de Boyacá</h4>
                  <span>Patrocinador</span>
                  <div className="social">
                    <a
                      href="https://twitter.com/LoteriadeBoyaca"
                      aria-label="Twitter"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/LoteriaDeBoyacaOficial/?locale=es_LA"
                      aria-label="Facebook"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/loteriadeboyacaoficial/?hl=es"
                      aria-label="Instagram"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="https://co.linkedin.com/company/loter%C3%ADa-de-boyac%C3%A1"
                      aria-label="Linkedin"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>

      {localStorage.getItem("tokenHitData") ? null : (
        <Modal
          show={show}
          backdrop="static"
          keyboard={false}
          onHide={handleClose}
          centered
          style={{ backgroundColor: "transparent !important", opacity: 0.9 }}
        >
          <Modal.Body className="text-center text-bg-light">
            <div className="text-center">
              <img
                style={{ width: "100%", height: "auto", opacity: 1 }}
                src={ImageSpinner}
                alt="imagen de carga para el modal"
              />
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};
