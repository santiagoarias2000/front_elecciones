import { useNavigate } from "react-router-dom";
export const NotFound = () => {
  const regresar = useNavigate();
  return (
    <div className="container">

      <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h2>Esta pagina no exite</h2>
        <a className="btn" onClick={() => regresar(-1)}>Regresar</a>
      </section>
      
    </div>
    
  );
};
