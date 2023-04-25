import { Carousel } from "react-bootstrap";
import editor from "../../../assets/image/Nosotros/editor.jpeg";
import Img1Carr from "../../../assets/image/FotosHistoria/IMG_2450.webp";
import Img2Carr from "../../../assets/image/FotosHistoria/IMG_2462.webp";
import Img3Carr from "../../../assets/image/FotosHistoria/img_2464.webp";
import Img4Carr from "../../../assets/image/FotosHistoria/IMG_2457.webp";
import Img5Carr from "../../../assets/image/FotosHistoria/IMG_2444.webp";
import Img6Carr from "../../../assets/image/FotosHistoria/IMG_2449.webp";

import Imgfotoantigua1 from "../../../assets/image/GuiasAntiguas/fotosantiguas2.webp";
import Imgfotoantigua2 from "../../../assets/image/GuiasAntiguas/fotosantiguas3.webp";
import Imgfotoantigua3 from "../../../assets/image/GuiasAntiguas/fotosantiguas4.webp";
import Imgfotoantigua4 from "../../../assets/image/GuiasAntiguas/fotosantiguas5.webp";
import Imgfotoantigua5 from "../../../assets/image/GuiasAntiguas/fotoantigua1.webp";

import Img7Carr from "../../../assets/image/FotosHistoria/Verticales/IMG_2453.webp";
import Img8Carr from "../../../assets/image/FotosHistoria/Verticales/IMG_2455.webp";
import Img9Carr from "../../../assets/image/FotosHistoria/Verticales/IMG_2458.webp";
import Img10Carr from "../../../assets/image/FotosHistoria/Verticales/IMG_2459.webp";

const AboutUs = () => {
  return (
    <div className="containner-welcome mt-5">
      <section>
        <div className="container" data-aos="fade-up">
          <div
            className="section-title mb-5"
            style={{
              paddingRight: "5%",
            }}
          >
            <div className="row">
              <h2 className="text-center mt-5" style={{ color: "#052851" }}>
                EL AUTOR/EDITOR: JOSÉ CELESTINO GIL ZAPATA
              </h2>
              <div className="col-lg-6 " style={{ marginTop: "11%" }}>
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
              <div className="col-lg-6 mt-5">
                <p className="text-justify text_editor">
                  Este boyacense, creativo de cuna, heraldista del escudo de
                  Armas de su natal San Miguel de Sema, residente en Tunja,
                  desde 1976, Administrador de Empresas de la UPTC, Especialista
                  en Gobierno y Gestión Pública de la Universidad Católica,
                  Líder Democrático de la ESAP con amplia experiencia en Gestión
                  pública y privada. Nacido en una gran familia que, desde
                  temprana edad, aprendió los valores de la perseverancia, la
                  honestidad y el trabajo en equipo. Visionario que, gracias a
                  su dedicación y esfuerzo, logró materializar 35 publicaciones
                  especializadas sobre estadística institucional:{" "}
                  <b className="fst-italic">
                    Guía Colombia con Nosotros, Guía de Normas Técnicas
                    oficiales obligatorias editadas para la Superintendencia de
                    Industria y Comercio, Guía Deportiva para Campeonatos
                    Mundiales de Ciclismo, Guía Electoral
                  </b>
                  , entre otras. Desde entonces, este autor ha puesto su talento
                  y creatividad al servicio de su país, trabajando en proyectos
                  que han trascendido en el mundo político y económico. Como
                  proyecto innovador, ha sido un defensor acérrimo de la
                  justicia social y la igualdad de oportunidades para todos los
                  ciudadanos, especialmente aquellos que más necesitan. Su
                  proyecto se encamina a facilitarle a la población información
                  para que asuma un papel protagónico en procesos electorales y
                  pueda elegir libremente. Pero no solo ha destacado su trabajo
                  innovador. Como padre de familia, ha demostrado su compromiso
                  con su esposa e hijos, especialmente con su hijo autista. Con
                  una dedicación y entrega ejemplar, ha buscado siempre las
                  mejores opciones de tratamiento para su hijo, y ha luchado por
                  garantizar sus derechos. El autor es un ejemplo de éxito en
                  diferentes ámbitos de la vida, destacado por su talento, su
                  dedicación, su compromiso con su familia y su país, y su
                  sensibilidad y solidaridad con los más necesitados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                    className="d-block"
                    src={Imgfotoantigua1}
                    style={{
                      width: "400px !important",
                      height: "600px !important",
                    }}
                    alt="First slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block"
                    src={Imgfotoantigua2}
                    style={{
                      width: "400px !important",
                      height: "600px !important",
                    }}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={Imgfotoantigua3}
                    style={{
                      width: "400px !important",
                      height: "600px !important",
                    }}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block "
                    src={Imgfotoantigua4}
                    style={{
                      width: "400px !important",
                      height: "600px !important",
                    }}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={Imgfotoantigua5}
                    style={{
                      width: "400px !important",
                      height: "600px !important",
                    }}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-lg-2"></div>
          </div>

      <section
        id="resume"
        className="resume section-bg mb-5"
        style={{ paddingRight: "5%", paddingLeft: "5%" }}
      >
        <div className="container" data-aos="fade-up">
          <h3 className="resume-title text-center mb-3">
            <b>Guía Electoral de Colombia</b>
          </h3>

          <div className="row">
            <div className="col-lg-7">
              <div className="resume-item pb-0">
                <h4>Definión</h4>
                <p className="text-justify" style={{ paddingLeft: "5%" }}>
                  <em>
                    La Guía Electoral de Colombia es un documento exclusivo para
                    la consulta de resultados electorales en el país y de uso
                    estratégico en la toma de decisiones en marketing político,
                    que permite observar la evolución del poder político: local,
                    regional y nacional; la presencia de los partidos, el nivel
                    de participación ciudadana y su correlación con la historia
                    político-electoral de la segunda democracia más antigua de
                    América.
                  </em>
                </p>
              </div>

              <div className="resume-item">
                <h4>Historia</h4>
                <h5>1984 - 1989</h5>
                <p className="text-justify" style={{ paddingLeft: "5%" }}>
                  <em>
                    La Guía Electoral de Colombia es un producto de iniciativa
                    privada, que inicia en 1984 en la ciudad de Tunja, como
                    tésis de grado en su estudio de mercados para optar el
                    título de Administrador de Empresas de su editor en la
                    Universidad Pedagógica y Tecnológica de Colombia. Esta Guía
                    aporta a distintos públicos una herramienta para el análisis
                    del conocimiento electoral de los protagonistas de elección
                    popular como: Ediles, Concejales, Alcaldes, Diputados,
                    Gobernadores, Congresistas, Presidente de la República y
                    Vicepresidenta de la República.
                  </em>
                </p>
                <h5>1990 - 2022</h5>
                <p className="text-justify" style={{ paddingLeft: "5%" }}>
                  <em>
                    La Guía Electoral se ha publicado para los departamentos de
                    Antioquia, Casanare, Cundinamarca, Santander, Valle del
                    Cauca, Bogotá D.C. e initerrumidamente para Boyacá durante
                    34 años; una edición nacional con motivo de la elección de
                    los miembros de la Asamblea Nacional Constituyente 1990,
                    además de la edición especial con motivo del Plebiscito por
                    la Paz 2016 y últimamente con información sobre la elección
                    del pasado Gobierno Nacional 2018-2022.
                  </em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Agradecimiento</h4>
                <p className="text-justify" style={{ paddingLeft: "5%" }}>
                  <em>
                    Especial agradecimiento a los candidatos y estudiosos que
                    han confiado en la fidelidad de la información publicada, a
                    la Registraduria Nacional del Estado Civil, a los
                    anunciantes por su convicción en el producto. A mi familia:
                    esposa Dora Inés, e hijos Diana Patricia y Juan José quienes
                    animan día a día este proyecto.
                  </em>
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <Carousel
                style={{
                  width: "100%",
                  height: "auto",
                  marginLeft: "2%",
                  marginRight: "2%",
                  marginTop: "10%",
                }}
              >
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={Img7Carr}
                    style={{
                      maxHeight: "300px !important",
                      maxWidth: "100px !important",
                      opacity: "0.7",
                    }}
                    alt="First slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Img8Carr}
                    style={{
                      maxHeight: "300px !important",
                      maxWidth: "100px !important",
                      opacity: "0.7",
                    }}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Img9Carr}
                    style={{
                      maxHeight: "300px !important",
                      maxWidth: "100px !important",
                      opacity: "0.7",
                    }}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Img10Carr}
                    style={{
                      maxHeight: "300px !important",
                      maxWidth: "100px !important",
                      opacity: "0.7",
                    }}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
          <div className="d-flex justify-content-center mb-5">
            <Carousel
              style={{
                width: "70%",
                height: "auto",
                marginLeft: "2%",
                marginRight: "2%",
              }}
            >
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={Img1Carr}
                  style={{
                    maxHeight: "300px !important",
                    maxWidth: "100px !important",
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
                    maxHeight: "300px !important",
                    maxWidth: "100px !important",
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
                    maxHeight: "300px !important",
                    maxWidth: "100px !important",
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
                    maxHeight: "300px !important",
                    maxWidth: "100px !important",
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
                    maxHeight: "300px !important",
                    maxWidth: "100px !important",
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
                    maxHeight: "300px !important",
                    maxWidth: "100px !important",
                    opacity: "0.7",
                  }}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="section-title">
            <p
              className="text-center"
              style={{
                color: "#052851",
                fontSize: "13px",
                fontStyle: "italic",
              }}
            >
              Toda persona tiene derecho a participar en el gobierno de su pais,
              directamente o por medio de sus representantes libremente
              elegidos. Toda persona tiene derecho al acceso; en condiciones de
              igualdad a las funciones públicas de su pais.
              <br />
              Artículo 21 - Declaración Universal de los Derechos Humanos.
            </p>
          </div>

          <div className="row mb-5">
            <div className="col-lg-4">
              <div className="box">
                <span>Misión</span>
                <p className="text-justify mt-2">
                  Aportar al conocimiento político y electoral de Colombia,
                  información especializada de quienes participan de los
                  procesos democráticos del país, mediante la publicación de la
                  Guía Electoral.
                </p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box">
                <span>Visión</span>
                <p className="text-justify mt-4">
                  Para el año 2025 se publicará la información de la guía
                  electoral acorde a las últimas ventajas tecnológicas del
                  momento.
                </p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box">
                <span>Valores</span>
                <p className="text-justify mt-4">
                  Excelencia e imparcialidad en la gestión de información
                  especializada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
