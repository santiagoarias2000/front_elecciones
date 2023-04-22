import Img7Carrusel from "../../assets/image/Img8.webp";
import Img1Carr from "../../assets/image/GuiasAntiguas/Img1.webp";
import Img2Carr from "../../assets/image/GuiasAntiguas/Img2.webp";
import Img3Carr from "../../assets/image/GuiasAntiguas/Img3.webp";
import Img4Carr from "../../assets/image/GuiasAntiguas/Img4.webp";
import Img5Carr from "../../assets/image/GuiasAntiguas/Img5.webp";
import Img6Carr from "../../assets/image/GuiasAntiguas/Img6.webp";
import Imgfotoantigua1 from "../../assets/image/GuiasAntiguas/fotosantiguas2.jpeg";
import Imgfotoantigua2 from "../../assets/image/GuiasAntiguas/fotosantiguas3.jpeg";
import Imgfotoantigua3 from "../../assets/image/GuiasAntiguas/fotosantiguas4.jpeg";
import Imgfotoantigua4 from "../../assets/image/GuiasAntiguas/fotosantiguas5.jpeg";
import Imgfotoantigua5 from "../../assets/image/GuiasAntiguas/fotoantigua1.webp";
import ImgHitData from "../../assets/image/Patrocinadores/azul.jpg";
import ImgLoteriaBoyaca from "../../assets/image/Patrocinadores/LoteriaBoyaca.jpg";
import ImgDonJose from "../../assets/image/Patrocinadores/DonJose.jpg";
import { Carousel, Modal } from "react-bootstrap";
import "../../assets/js/carrusel.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageSpinner from "../../assets/image/Blog/publicidadloteria.png";

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
                className="img-fluid"
                style={{ maxWidth: "100%", maxHeight: "auto" }}
                alt="Imagen de la guia electoral de comlombia"
              />
              {/* <a
                href="https://www.youtube.com/watch?v=t5ahimIQBmU"
                className="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              ></a> */}
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center about-content" >
              <div className="section-title" style={{paddingBottom:"18%"}}>
                <h2>Bienvenido a Guía Electoral de Colombia</h2>
                <h6 className="fst-italic text_extr">
                  ¡¡¡Para estrategias...Documéntese!!!
                </h6>
                <p className="text-center text_exfl">
                  Documento exclusivo para la consulta de resultados electorales
                  en el país y de uso estratégico en la toma de decisiones en
                  marketing político.
                </p>
              </div>
              <div>
                <div className="section-title">
                  <h5>RESULTADOS DE VOTACIONES ELECTORALES</h5>
                  <hr style={{color:"#052851"}}/>
                </div>
                
                <div className="herramientas">
                
                  <ul>
                    <li className="RutasRiesgo">
                      <a className="flex1" href="/presidencia">
                        PRESIDENCIA
                      </a>
                      <a className="flex2" href="/senado">
                        SENADO
                      </a>
                      <a className="flex3" href="/camara">
                        CÁMARA
                      </a>
                      <a className="flex4" href="/asamblea">
                        GOBERNACIONES
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div className="herramientas mt-4">
                  <ul>
                    <li className="RutasRiesgo">

                      <a className="flex1" href="/asamblea">
                        ASAMBLEAS
                      </a>
                      <a className="flex2" href="/alcaldia">
                        ALCALDÍAS
                      </a>
                      <a className="flex3" href="/concejo">
                        CONCEJO
                      </a>
                      <a className="flex4" href="/jal">
                        JAL
                      </a>
                    </li>
                  </ul>
                </div>
                <hr style={{color:"#052851"}}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6" style={{ marginTop: "4%" }}>
            <p className="text-justify">
              La <b>Guía Electoral de Colombia</b> es un producto de iniciativa
              privada, que inicia en 1984 en la ciudad de Tunja, como tésis de
              grado en su estudio de mercados para optar el título de
              Administrador de Empresas de su editor en la universidad Pedagógia
              y Tecnológica de Colombia. Esta Guia aporta a distintos públicos
              una herramenta para el análisis de conocimiento electoral de los
              protagonistas de elección popular como: Ediles, Concejales,
              Alcades, Diputados, Gobernadores, Congresistas y Presidente de la
              República.
              <p>
                La Guia Electoral se ha pubicado para los departamentos de
                Antioquia, Casanare, Cundinamarca, Santander, Valle del Cauca,
                Bogotá D.C y continuamente para Boyaca durante 34 años; una
                edición nacional con motivo de la elección de los miembros de la
                Asamblea Nacional Constituyente 1990, además de la edición
                especial con motivo del Plebiscito por la Paz 2016 y últimamente
                con información sobre la elección del pasado Gobierno Nacional
                2018-2022
              </p>
            </p>
          </div>
          <div className="col-lg-6">
            <Carousel
              className="mb-5"
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                width: "100%",
                height: "auto",
              }}
            >
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={Img1Carr}
                  style={{
                    maxHeight: "600px !important",
                    maxWidth: "400px !important",
                    opacity: "0.7",
                  }}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Img2Carr}
                  style={{
                    maxHeight: "600px !important",
                    maxWidth: "400px !important",
                    opacity: "0.7",
                  }}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Img3Carr}
                  style={{
                    maxHeight: "600px !important",
                    maxWidth: "400px !important",
                    opacity: "0.7",
                  }}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Img4Carr}
                  style={{
                    maxHeight: "600px !important",
                    maxWidth: "400px !important",
                    opacity: "0.7",
                  }}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Img5Carr}
                  style={{
                    maxHeight: "600px !important",
                    maxWidth: "400px !important",
                    opacity: "0.7",
                  }}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Img6Carr}
                  style={{
                    maxHeight: "600px !important",
                    maxWidth: "400px !important",
                    opacity: "0.7",
                  }}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>PATROCINADORES</h2>
            <p className="text-justify">
              Los patrocinadores de este proyecto son un grupo de empresas
              líderes del sector publico y privado que han reconocido la
              importancia de la iniciativa. Gracias a la colaboración y el
              compromiso de nuestros patrocinadores, este proyecto cuenta con
              los recursos economicos y humanos necesarios para llevarse a cabo
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
                    style={{ maxHeight: "261px !important", maxWidth: "auto" }}
                  />
                </div>
                <div className="member-info">
                  <h4>Jose Celestino Gil Zapata</h4>
                  <span>Autor/Editor</span>
                  <div className="social">
                    <a href="https://www.facebook.com/josegilza/?locale=es_LA">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://co.linkedin.com/in/jose-gil-a76aa6a6">
                      <i className="bi bi-linkedin"></i>
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
                    style={{ maxWidth: "100%", maxHeight: "auto" }}
                    alt="Imagen de hitdata para patrocinio"
                  />
                </div>
                <div className="member-info">
                  <h4>Hit Data</h4>
                  <span>Empresa de desarrollo</span>
                  <div className="social">
                    <a href="https://twitter.com/HitData">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/HitdataColombia">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/hitdata/">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://co.linkedin.com/in/hit-data-soluciones">
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
                    style={{ maxWidth: "100%", maxHeight: "auto" }}
                    alt="Imagen de la loteria de boyaca para patrocinio"
                  />
                </div>
                <div className="member-info">
                  <h4>Lotería de Boyacá</h4>
                  <span>Patrocinador</span>
                  <div className="social">
                    <a href="https://twitter.com/LoteriadeBoyaca">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/LoteriaDeBoyacaOficial/?locale=es_LA">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/loteriadeboyacaoficial/?hl=es">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://co.linkedin.com/company/loter%C3%ADa-de-boyac%C3%A1">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="row " data-aos="fade-up">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <Carousel
                className="mb-5"
                style={{
                  paddingLeft: "10%",
                  paddingRight: "10%",
                  width: "100%",
                  height: "auto",
                }}
              >
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={Imgfotoantigua1}
                    style={{
                      maxHeight: "600px !important",
                      maxWidth: "400px !important",
                    }}
                    alt="First slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Imgfotoantigua2}
                    style={{
                      maxHeight: "600px !important",
                      maxWidth: "400px !important",
                    }}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Imgfotoantigua3}
                    style={{
                      maxHeight: "600px !important",
                      maxWidth: "400px !important",
                    }}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Imgfotoantigua4}
                    style={{
                      maxHeight: "600px !important",
                      maxWidth: "400px !important",
                    }}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Imgfotoantigua5}
                    style={{
                      maxHeight: "600px !important",
                      maxWidth: "400px !important",
                    }}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section>
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
              style={{ maxWidth: "100%", height: "auto", opacity: 1 }}
              src={ImageSpinner}
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
