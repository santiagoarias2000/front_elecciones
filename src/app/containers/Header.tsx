import { Link } from "react-router-dom";
import logoHeader from "../../assets/image/logosi.webp";
import camara from "../../assets/image/camara.jpg";

export const Header = () => {
  return (
    <div>
      <header className="headers">
        <Link to={"/"}>
          <img
            src={logoHeader}
            alt="logo principal para la parte superior de la pagina web"
          />
        </Link>

        
      </header>
    </div>
  );
};
