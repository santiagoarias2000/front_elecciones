import president from "../../../assets/image/imgenroll.webp";

export const Resultados = () => {
  return (
    <section id="resultados" className="about-lists">
      <div className="container">
        <h2 className="text-center mt-3 "  data-aos="fade-up"  style={{ color: "#052851", fontSize:"25px" }}>
          <b>
            {" "}
            RESULTADOS ELECTORALES COLOMBIANOS
          </b>
        </h2>
        <div className="row no-gutters mt-5">
          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up">
            <span style={{ textAlign: "right" }}>
              <img
                src={president}
                alt="Imagen de presidencia"
                style={{ width: "12%", height: "auto" }}
              />
            </span>

            <h4>Presidencia</h4>
            <p>
              Registros correspondientes a las votaciones realizadas en torno a
              las elecciones a nivel nacional y por total departamentos para la
              Presidencia de la Republica.
            </p>
            <div className="cards-btn text-center">
              <a
                href="/presidencia"
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
                style={{ width: "12%", height: "auto" }}
              />
            </span>
            <h4>Senado</h4>
            <p>
              Registros correspondientes a las votaciones realizadas en torno a
              las elecciones a nivel nacional, por total departamentos y por
              total municipios.
            </p>
            <div className="cards-btn text-center botton_responsive">
              <a href="/senado" className="btn-cards mt-4 responsive_botton">
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
                style={{ width: "12%", height: "auto" }}
              />
            </span>
            <h4>Cámara</h4>
            <p>
              Registros correspondientes a las votaciones realizadas en torno a
              las elecciones a nivel regional, total municipios y total
              departamento.
            </p>
            <div className="cards-btn text-center">
              <a href="/camara" className="btn-cards mt-4 responsive_botton">
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
                alt="Imagen de gobernacion"
                style={{ width: "12%", height: "auto" }}
              />
            </span>
            <h4>Gobernaciones</h4>
            <p>
              Registros correspondientes a las votaciones realizadas en torno a
              las elecciones a nivel departamental y total municipios.
            </p>
            <div className="cards-btn text-center">
              <a
                href="/gobernacion"
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
            data-aos-delay="400"
          >
            <span style={{ textAlign: "right" }}>
              <img
                src={president}
                alt="Imagen de presidencia"
                style={{ width: "12%", height: "auto" }}
              />
            </span>
            <h4>Asambleas</h4>
            <p>
              Registros correspondientes a las votaciones realizadas en torno a
              las elecciones a nivel departamental, total departamento y total
              municipios.
            </p>
            <div className="cards-btn text-center">
              <a href="/asamblea" className="btn-cards mt-4 responsive_botton">
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
                style={{ width: "12%", height: "auto" }}
              />
            </span>
            <h4>Alcaldías</h4>
            <p>
              Registros correspondientes a las votaciones realizadas en torno a
              las elecciones a nivel municipal.
            </p>
            <div className="cards-btn text-center">
              <a href="/alcaldia" className="btn-cards mt-4 responsive_botton">
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
                style={{ width: "12%", height: "auto" }}
              />
            </span>
            <h4>Concejos</h4>
            <p>
              Registros correspondientes a las votaciones realizadas en torno a
              las elecciones a nivel municipal y/o distrital.
            </p>
            <div className="cards-btn text-center">
              <a href="/concejo" className="btn-cards mt-4 responsive_botton">
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
                style={{ width: "12%", height: "auto" }}
              />
            </span>
            <h4>JAL</h4>
            <p>
              Registros correspondientes a las votaciones realizadas en torno a
              las elecciones a nivel distrital y por total localidades.
            </p>
            <div className="cards-btn text-center">
              <a href="/jal" className="btn-cards mt-4 responsive_botton">
                <i className="bi bi-bar-chart-line-fill"></i>
                &nbsp; Ver resultados
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
