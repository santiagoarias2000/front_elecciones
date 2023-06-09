import { Link } from "react-router-dom";
import footerimg from "../../assets/image/LOGOBLANCO.webp";

export const Footer = () => {
  return (
    <div className="containner_footers">
      <div className="container text-center">
        <div className="row">
          <div className="col img_footer_center">
            <img
              src={footerimg}
              style={{width:"100%", height:"100%" }}
              alt="imagen de footer para la pagina"
            />
          </div>
          <div className="col-6">
            <ul>
              <li>
                <i className="bi bi-globe icon_footer"></i>&nbsp;
                www.guiaelectoraldecolombia.com
              </li>
              <li>
                <i className="bi bi-envelope icon_footer"></i>&nbsp;
                josegilza@gmail.com
              </li>
              <li>
                <i className="bi bi-geo-alt icon_footer"></i>&nbsp; Cr 2 32 49
                T1 Ap 702 Tunja
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-1">
                <div className="side_stripe"></div>
              </div>
              <div className="col">
                <ul className="list">
                  <li>
                    <a
                      href={"/politicasprivacidad"}
                      className="link"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Políticas de privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href={"/avisolegal"}
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Aviso legales
                    </a>
                  </li>
                  <li>
                    <a
                      href={"/politicascookies"}
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Políticas de Cookies
                    </a>
                  </li>
                  <li>
                    <a
                      href={"/terminoscondiciones"}
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Términos y Condiciones
                    </a>
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
          <Link to="https://hitdatasoluciones.com/" className="link_hitdata">
            Hit Data
          </Link>
        </h6>
      </div>
      <div className="end_footer_respodive">
        <span id="texts">Copyright © 2023</span>
        <span id="texts">
          Guía Electoral de Colombia by
          <Link to="https://hitdatasoluciones.com/" className="link_hitdata">
            Hit Data
          </Link>
        </span>
      </div>
    </div>
  );
};
