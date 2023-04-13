import { useNavigate } from "react-router-dom";
import img404 from "../../../assets/image/error404.webp";
import imglogo from "../../../assets/image/LOGOAZUL.webp";

export const NotFound = () => {
  const regresar = useNavigate();
  return (
    <main id="main" className="main">
      <div className="container_error">
        <div className="section error-404 d-flex flex-column align-items-center justify-content-center responsive_404">
        <img src={imglogo} alt="Imagen logo" className="imagen_logo" />
          <img src={img404} alt="Imagen de error 404" className="imagen_error" />
          <a className="btn" href="/">
            Regresar
          </a>
        </div>
      </div>
    </main>
  );
};
