import img from "../../assets/image/eleccioneshe.jpg";

import president from "../../assets/image/imgenroll.webp";
import camera from "../../assets/image/imgen_rol.png";
import Img1Carrusel from "../../assets/image/Img1.jpg";
import Img2Carrusel from "../../assets/image/Img2.jpg";
import Img3Carrusel from "../../assets/image/Img3.jpg";
import Img4Carrusel from "../../assets/image/Img4.jpg";
import Img5Carrusel from "../../assets/image/Img5.jpg";
import Img6Carrusel from "../../assets/image/Img6.jpg";
import Img7Carrusel from "../../assets/image/Img8.jpg";
import Img1Carr from "../../assets/image/GuiasAntiguas/Img1.jpg";
import Img2Carr from "../../assets/image/GuiasAntiguas/Img2.jpg";
import Img3Carr from "../../assets/image/GuiasAntiguas/Img3.jpg";
import Img4Carr from "../../assets/image/GuiasAntiguas/Img4.jpg";
import Img5Carr from "../../assets/image/GuiasAntiguas/Img5.jpg";
import Img6Carr from "../../assets/image/GuiasAntiguas/Img6.jpg";
import Img7Carr from "../../assets/image/GuiasAntiguas/Img7.jpg";
import ImgHitData from "../../assets/image/HitData.jpg";
import ImgLoteriaBoyaca from "../../assets/image/LoteriaBoyaca.jpg";
import ImgDonJose from "../../assets/image/DonJose.jpg";
import { Carousel } from "react-bootstrap";
import "../../assets/js/carrusel.js";

export const Welcome = () => {
  return (
    <div className="containner-welcome">
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div className="col-lg-6 video-box">
              <img src={Img7Carrusel} className="img-fluid" alt="" />
              {/* <a
                href="https://www.youtube.com/watch?v=t5ahimIQBmU"
                className="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              ></a> */}
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
              <div className="section-title">
                <h2>Bienvenido a Guia Electoral Colombiana</h2>
                <p className="text-justify">
                  Documento exclusivo para la consulta de resultados electorales
                  en el país, de uso estratégico en la toma de decisiones en
                  marketing político.
                </p>
              </div>

              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                  <i className="bi bi-fingerprint"></i>
                </div>
                <h4 className="title">
                  <a href="#" style={{ textDecorationLine: "none" }}>
                    Visita nuestro Blog
                  </a>
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
                a las elecciones a nivel nacional para la presidencia de la
                republica.
              </p>
              <div className="cards-btn text-center">
                <a href="/guiaelectoral/presidencia" className="btn-cards mt-4">
                  <i className="bi bi-bar-chart-line-fill"></i>
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
                a las elecciones a nivel nacional para la camara de la
                republica.
              </p>
              <div className="cards-btn text-center">
                <a href="/guiaelectoral/senado" className="btn-cards mt-4">
                  <i className="bi bi-bar-chart-line-fill"></i>
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
              <h4>Camara</h4>
              <p>
                Registros correspondientes a las votaciones realizadas en torno
                a las elecciones a nivel nacional para el senado de la
                republica.
              </p>
              <div className="cards-btn text-center">
                <a href="/guiaelectoral/camara" className="btn-cards mt-4">
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
              <h4>Gobernación</h4>
              <p>
                Registros correspondientes a las votaciones realizadas en torno
                a las elecciones a nivel departamental para la gobernación.
              </p>
              <div className="cards-btn text-center">
                <a href="#" className="btn-cards mt-4">
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
              <h4>Alcaldia</h4>
              <p>
                Registros correspondientes a las votaciones realizadas en torno
                a las elecciones a nivel municipal para la alcaldia.
              </p>
              <div className="cards-btn text-center">
                <a href="#" className="btn-cards mt-4">
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
              <h4>Concejo</h4>
              <p>
                Registros correspondientes a las votaciones realizadas en torno
                a las elecciones a nivel municipal para el concejo.
              </p>
              <div className="cards-btn text-center">
                <a href="#" className="btn-cards mt-4">
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
          <div className="col-lg-6" style={{ marginTop: "10%" }}>
            <p className="text-justify">
              Los patrocinadores de este proyecto son un grupo de empresas
              líderes en la industria que han reconocido la importancia de la
              iniciativa y han decidido apoyarla financieramente y con recursos
              humanos.Gracias a la colaboración y el compromiso de nuestros
              patrocinadores, este proyecto cuenta con los recursos necesarios
              para llevarse a cabo y alcanzar los objetivos planteados. Además,
              la participación de estas empresas aporta un valor adicional al
              proyecto al brindar su experiencia y conocimientos en las
              distintas áreas relacionadas con el mismo. Agradecemos
              profundamente el apoyo de nuestros patrocinadores y esperamos
              continuar trabajando juntos en futuros proyectos y colaboraciones.
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
              líderes en la industria que han reconocido la importancia de la
              iniciativa y han decidido apoyarla financieramente y con recursos
              humanos.Gracias a la colaboración y el compromiso de nuestros
              patrocinadores, este proyecto cuenta con los recursos necesarios
              para llevarse a cabo y alcanzar los objetivos planteados. Además,
              la participación de estas empresas aporta un valor adicional al
              proyecto al brindar su experiencia y conocimientos en las
              distintas áreas relacionadas con el mismo. Agradecemos
              profundamente el apoyo de nuestros patrocinadores y esperamos
              continuar trabajando juntos en futuros proyectos y colaboraciones.
            </p>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
              <div className="member">
                <div className="pic">
                  <img src={ImgDonJose} className="img-fluid" alt="" />
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
        </div>
      </section>
    </div>
  );
};