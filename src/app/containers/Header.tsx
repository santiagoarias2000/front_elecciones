import { Link } from "react-router-dom";
import logoHeader from "../../assets/image/logoHeader.png";
import camara from "../../assets/image/camara.jpg";

export const Header = () => {
  return (
    <div>
      <header className="headers">
        <Link to={"/welcome"}>
          <img
            src={logoHeader}
            alt="logo principal para la parte superior de la pagina web"
          />
        </Link>

        
      </header>
    </div>
  );
};
