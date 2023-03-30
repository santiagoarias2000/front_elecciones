import president from "../../assets/image/imgenroll.webp";
import Img7Carrusel from "../../assets/image/Img8.webp";
import Img1Carr from "../../assets/image/GuiasAntiguas/Img1.webp";
import Img2Carr from "../../assets/image/GuiasAntiguas/Img2.webp";
import Img3Carr from "../../assets/image/GuiasAntiguas/Img3.webp";
import Img4Carr from "../../assets/image/GuiasAntiguas/Img4.webp";
import Img5Carr from "../../assets/image/GuiasAntiguas/Img5.webp";
import Img6Carr from "../../assets/image/GuiasAntiguas/Img6.webp";
import ImgHitData from "../../assets/image/HitData.jpg";
import ImgLoteriaBoyaca from "../../assets/image/LoteriaBoyaca.jpg";
import ImgDonJose from "../../assets/image/DonJose.jpg";
import editor from "../../assets/image/editor.jpeg";
import { Carousel, Modal } from "react-bootstrap";
import "../../assets/js/carrusel.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageSpinner from "../../assets/image/publicidadloteria.webp";

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
    <div className="containner-welcome">
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div className="col-lg-6 video-box">
              <img
                src={Img7Carrusel}
                className="img-fluid"
                alt="Imagen de la guia electoral de comlombia"
              />
              {/* <a
                href="https://www.youtube.com/watch?v=t5ahimIQBmU"
                className="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              ></a> */}
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
              <div className="section-title">
                <h6 className="fst-italic text_extr">
                  ¡¡¡Para estrategias...Documéntese!!!
                </h6>
                <h2>Bienvenido a Guía Electoral de Colombia</h2>
                <p className="text-center text_exfl">
                  Documento exclusivo para la consulta de resultados electorales
                  en el país y de uso estratégico en la toma de decisiones en
                  marketing político.
                </p>
              </div>

              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                  <Link to={"/blog"} style={{ textDecorationLine: "none" }}>
                    <i className="bi bi-fingerprint"></i>
                  </Link>
                </div>
                <h4 className="title">
                  <Link to={"/blog"} style={{ textDecorationLine: "none" }}>
                    Visita nuestro Blog
                  </Link>
                </h4>
                <p className="description text-justify">
                  Bienvenidos a nuestro blog de elecciones, donde encontrarás
                  información y análisis sobre los procesos electorales en
                  Colombia. En este espacio, te mantendremos al tanto de las
                  últimas noticias y tendencias en materia de política, desde
                  las elecciones presidenciales y parlamentarias hasta las
                  elecciones locales y regionales. Aquí podrás encontrar
                  artículos de opinión, entrevistas con expertos en política y
                  análisis detallados de los resultados electorales.
                </p>
              </div>

              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h4 className="title">
                  <a href="#" style={{ textDecorationLine: "none" }}>
                    Nosotros
                  </a>
                </h4>
                <p className="description text-justify">
                  Bienvenidos al apartado "Nosotros" de nuestra página web,
                  donde podrás conocer más sobre nuestra empresa y nuestra
                  historia. En este espacio, te contaremos quiénes somos, qué
                  hacemos y cuáles son nuestros valores y objetivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-lists">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up">
              <span style={{ textAlign: "right" }}>
                <img
                  src={president}
                  alt="Imagen de presidencia"
                  style={{ width: "12%" }}
                />
              </span>

              <h4>Presidencia</h4>
              <p>
                Registros correspondientes a las votaciones realizadas en torno
                a las elecciones a nivel nacional y por total departamentos para
                la Presidencia de la Republica.
              </p>
              <div className="cards-btn text-center">
                <a
                  href="/guiaelectoral/presidencia"
                  className="btn-cards mt-4 responsive_botton"
                >
                  <i className="bi bi-bar-chart-line-fill "></i>
                  &nbsp; Ver resultados
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span style={{ textAlign: "right" }}>
                <img
                  src={president}
                  alt="Imagen de presidencia"
                  style={{ width: "12%" }}
                />
              </span>
              <h4>Senado</h4>
              <p>
                Registros correspondientes a las votaciones realizadas en torno
                a las elecciones a nivel nacional, por total departamentos y por
                total municipios.
              </p>
              <div className="cards-btn text-center botton_responsive">
                <a
                  href="/guiaelectoral/senado"
                  className="btn-cards mt-4 responsive_botton"
                >
                  <i className="bi bi-bar-chart-line-fill "></i>
                  &nbsp; Ver resultados
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span style={{ textAlign: "right" }}>
                <img
                  src={president}
                  alt="Imagen de presidencia"
                  style={{ width: "12%" }}
                />
              </span>
              <h4>Cámara</h4>
              <p>
                Registros correspondientes a las votaciones realizadas en torno
                a las elecciones a nivel regional, total municipios y total
                departamento.
              </p>
              <div className="cards-btn text-center">
                <a
                  href="/guiaelectoral/camara"
                  className="btn-cards mt-4 responsive_botton"
                >
                  <i className="bi bi-bar-chart-line-fill"></i>
                  &nbsp; Ver resultados
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span style={{ textAlign: "right" }}>
                <img
                  src={president}
                  alt="Imagen de presidencia"
                  style={{ width: "12%" }}
                />
              </span>
              <h4>Gobernaciones</h4>
              <p>
                Registros correspondientes a las votaciones realizadas en torno
                a las elecciones a nivel departamental y total municipios.
              </p>
              <div className="cards-btn text-center">
                <a href="#" className="btn-cards mt-4 responsive_botton">
                  <i className="bi bi-bar-chart-line-fill"></i>
                  &nbsp; Ver resultados
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span style={{ textAlign: "right" }}>
                <img
                  src={president}
                  alt="Imagen de presidencia"
                  style={{ width: "12%" }}
                />
              </span>
              <h4>Asambleas</h4>
              <p>
                Registros correspondientes a las votaciones realizadas en torno
                a las elecciones a nivel departamental, total departamento y
                total municipios.
              </p>
              <div className="cards-btn text-center">
                <a href="#" className="btn-cards mt-4 responsive_botton">
                  <i className="bi bi-bar-chart-line-fill"></i>
                  &nbsp; Ver resultados
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span style={{ textAlign: "right" }}>
                <img
                  src={president}
                  alt="Imagen de presidencia"
                  style={{ width: "12%" }}
                />
              </span>
              <h4>Alcaldías</h4>
              <p>
                Registros correspondientes a las votaciones realizadas en torno
                a las elecciones a nivel municipal.
              </p>
              <div className="cards-btn text-center">
                <a href="#" className="btn-cards mt-4 responsive_botton">
                  <i className="bi bi-bar-chart-line-fill"></i>
                  &nbsp; Ver resultados
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span style={{ textAlign: "right" }}>
                <img
                  src={president}
                  alt="Imagen de presidencia"
                  style={{ width: "12%" }}
                />
              </span>
              <h4>Concejos</h4>
              <p>
                Registros correspondientes a las votaciones realizadas en torno
                a las elecciones a nivel municipal y/o distrital.
              </p>
              <div className="cards-btn text-center">
                <a href="#" className="btn-cards mt-4 responsive_botton">
                  <i className="bi bi-bar-chart-line-fill"></i>
                  &nbsp; Ver resultados
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span style={{ textAlign: "right" }}>
                <img
                  src={president}
                  alt="Imagen de presidencia"
                  style={{ width: "12%" }}
                />
              </span>
              <h4>JAL</h4>
              <p>
                Registros correspondientes a las votaciones realizadas en torno
                a las elecciones a nivel distrital y por total localidades.
              </p>
              <div className="cards-btn text-center">
                <a href="#" className="btn-cards mt-4 responsive_botton">
                  <i className="bi bi-bar-chart-line-fill"></i>
                  &nbsp; Ver resultados
                </a>
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
                    alt=""
                    style={{ maxHeight: "261px !important" }}
                  />
                </div>
                <div className="member-info">
                  <h4>Jose Celestino Gil Zapata</h4>
                  <span>Autor/Editor</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
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
                  <img src={ImgHitData} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Hit Data</h4>
                  <span>Empresa de desarrollo</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
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
                  <img src={ImgLoteriaBoyaca} className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Lotería de Boyacá</h4>
                  <span>Patrocinador</span>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>EL AUTOR/EDITOR: JOSÉ CELESTINO GIL ZAPATA</h2>
              <div className="row">
                <div className="col-lg-6 " style={{ marginTop: "8%" }}>
                  <div
                    className="mb-5"
                    style={{
                      paddingLeft: "10%",
                      paddingRight: "10%",
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <img
                      src={editor}
                      style={{
                        maxHeight: "400px !important",
                        maxWidth: "400px !important",
                      }}
                      alt="Foto del editor de la guia electoral"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <p className="text-justify text_editor">
                    Este boyacense, creativo de cuna, heraldista del escudo de
                    Armas de su natal San Miguel de Sema, residente en Tunja,
                    desde 1976, Administrador de Empresas de la UPTC,
                    Especialista en Gobierno y Gestión Pública de la Universidad
                    Católica, Líder Democrático de la ESAP con amplia
                    experiencia en Gestión pública y privada. Nacido en una gran
                    familia que, desde temprana edad, aprendió los valores de la
                    perseverancia, la honestidad y el trabajo en equipo.
                    Visionario que, gracias a su dedicación y esfuerzo, logró
                    materializar 35 publicaciones especializadas sobre
                    estadística institucional:{" "}
                    <b className="fst-italic">
                      Guía Colombia con Nosotros, Guía de Normas Técnicas
                      oficiales obligatorias editadas para la Superintendencia
                      de Industria y Comercio, Guía Deportiva para Campeonatos
                      Mundiales de Ciclismo, Guía Electoral
                    </b>
                    , entre otras. Desde entonces, este autor ha puesto su
                    talento y creatividad al servicio de su país, trabajando en
                    proyectos que han trascendido en el mundo político y
                    económico. Como proyecto innovador, ha sido un defensor
                    acérrimo de la justicia social y la igualdad de
                    oportunidades para todos los ciudadanos, especialmente
                    aquellos que más necesitan. Su proyecto se encamina a
                    facilitarle a la población información para que asuma un
                    papel protagónico en procesos electorales y pueda elegir
                    libremente. Pero no solo ha destacado su trabajo innovador.
                    Como padre de familia, ha demostrado su compromiso con su
                    esposa e hijos, especialmente con su hijo autista. Con una
                    dedicación y entrega ejemplar, ha buscado siempre las
                    mejores opciones de tratamiento para su hijo, y ha luchado
                    por garantizar sus derechos. El autor es un ejemplo de éxito
                    en diferentes ámbitos de la vida, destacado por su talento,
                    su dedicación, su compromiso con su familia y su país, y su
                    sensibilidad y solidaridad con los más necesitados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        onHide={handleClose}
        centered
        style={{ backgroundColor: "transparent !important" , opacity: 0.9}}
      >
        <Modal.Body className="text-center text-bg-light">
          <div className="text-center">
            <img style={{ maxWidth: "100%", opacity:1}} src={ImageSpinner} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
