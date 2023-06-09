import { InternalRouting } from "../utilities/routes/InternalRouting";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Welcome } from "../views/shared/Welcome";

export const MainBoard = ({onLogin}:any) => {
  
  return (
    <div>
      <Header />
      <InternalRouting />
      <Footer />
    </div>
  );
};
