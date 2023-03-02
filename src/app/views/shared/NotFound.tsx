import { useNavigate } from "react-router-dom";
import img404 from "../../../assets/image/error404.png";
import imglogo from "../../../assets/image/errorlogo.png";

export const NotFound = () => {
  const regresar = useNavigate();
  return (
    <main id="main" className="main">
      <div className="container_error">
        <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center ">
        <img src={imglogo} alt="Imagen logo" />
          <img src={img404} alt="Imagen de error 404" />
          <a className="btn" onClick={() => regresar(-1)}>
            Regresar
          </a>
        </section>
      </div>
    </main>
  );
};
