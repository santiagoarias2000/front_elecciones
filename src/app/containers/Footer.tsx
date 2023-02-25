import { Link } from "react-router-dom";
import footerimg from "../../assets/image/PNGelecciones.png";

export const Footer = () => {
  return (
    <section>
      <div className="containner_footers">
        <div className="container text-center">
          <div className="row">
            <div className="col img_footer_center">
              <img src={footerimg} alt="" style={{ maxWidth: "50%" }} />
            </div>
            <div className="col-5">
              <ul>
                <li>
                  <i className="bi bi-globe icon_footer"></i>&nbsp;
                  www.guiaelectoralcolombiana.com
                </li>
                <li>
                  <i className="bi bi-envelope icon_footer"></i>&nbsp;
                  guiaelectoral@colombia.com
                </li>
                <li>
                  <i className="bi bi-geo-alt icon_footer"></i>&nbsp;Av. Calle 26 N°
                  51-50, CAN, Bogotá, Colombia
                </li>
              </ul>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-1">
                  <div className="side_stripe"></div>
                </div>
                <div className="col-9">
                  <ul className="list">
                    <li>
                      <Link
                        to=""
                        className="link"
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        Políticas de privacidad
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        Aviso legales
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        Políticas de Cookies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        Términos y Codiciones
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="end_footer">
          <h6>Copyright © 2023</h6>
          <h6>
            Guía Electoral de Colombia by{" "}
            <Link to="https://hitdatasoluciones.com/" className="link_hitdata">Hit Data</Link>
          </h6>
        </div>
      </div>
    </section>
  );
};
