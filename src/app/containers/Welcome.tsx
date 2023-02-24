import img from "../../assets/image/eleccioneshe.jpg";
import president from "../../assets/image/presidente.svg";
import camera from "../../assets/image/multitud-de-usuarios.png";

export const Welcome = () => {
  return (
    <div className="containner-welcome">
      <section className="img">
        <div className="color-yellow" />
        <img src={img} alt="Imagen de Elecciones 2022" />
      </section>

      <section className="cards">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card text-center tocard">
                <div className="card-body">
                <img src={president} alt="Imagen de presidencia" />
                  <h4 className="card-title cards-text">Presidencia</h4>
                  <div className="cards-btn">
                  <a href="#" className="btn-cards ">
                    <i className="bi bi-bar-chart-line-fill"></i>
                       &nbsp; Ver resultados
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center tocard">
                <div className="card-body">
                  <img src={camera} alt="Imagen de camara" />
                  <h3 className="card-title cards-text">Cámara</h3>
                  <div className="cards-btn">
                  <a href="#" className="btn-cards ">
                    <i className="bi bi-bar-chart-line-fill"></i>
                       &nbsp; Ver resultados
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center tocard">
                <div className="card-body">
                <img src={camera} alt="Imagen de senado" />
                  <h3 className="card-title cards-text">Senado</h3>
                  <div className="cards-btn">
                    <a href="#" className="btn-cards ">
                    <i className="bi bi-bar-chart-line-fill"></i>
                       &nbsp; Ver resultados
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
