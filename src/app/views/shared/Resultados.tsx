import president from "../../../assets/image/imgenroll.webp";

export const Resultados = () => {
  return (
    <section id="resultados" className="about-lists">
      <div className="container">
        <h2
          className="text-center mt-3 "
          data-aos="fade-up"
          style={{ color: "#052851", fontSize: "25px" }}
        >
          <b> RESULTADOS ELECTORALES COLOMBIANOS</b>
        </h2>
        <h6
          className="text-center mt-3 "
          data-aos="fade-up"
          style={{ color: "#000000", fontSize: "18px" }}
        >
          <i>
            Información por listas y candidatos de mayor a menor votación,
            resaltados los elegidos
          </i>
        </h6>
        <div className="row no-gutters mt-5">
          <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up">
            <span style={{ textAlign: "right" }}>
              <img
                src={president}
                alt="Imagen de presidencia"
                style={{ width: "12%", height: "auto" }}
              />
            </span>

            <h3 className="mt-4">Presidencia de la República</h3>
            <p>
            Votación total Nacional y por total departamental. 
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
            <h3 className="mt-4">Senado de la República</h3>
            <p>
            Votación total Nacional, por departamentos y total municipios.
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
            <h3 className="mt-4">Cámara de Representantes</h3>
            <p>
            Votación total por departamentos y total municipios. 
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
            <h3 className="mt-4">Gobernaciones</h3>
            <p>
            Votación total por departamentos y total municipios.  
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
            <h3 className="mt-4">Asambleas Departamentales</h3>
            <p>
            Votación total por departamentos y total municipios. 
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
            <h3 className="mt-4">Alcaldías</h3>
            <p>
            Votación total municipio. 
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
            <h3 className="mt-4">Concejos Municipales</h3>
            <p>
            Votación total municipio. 
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
            <h3 className="mt-4">Juntas Administradoras Locales - JAL</h3>
            <p>
            Votación total por localidades.
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
