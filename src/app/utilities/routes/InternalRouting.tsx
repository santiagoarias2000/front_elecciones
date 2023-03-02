import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "../../containers/Welcome";
import { MainBoard } from "../../containers/MainBoard";
import { Camara } from "../../views/public/Camara";
import { Senado } from "../../views/public/Senado";
import { SenadoDetails } from "../../views/public/SenadoDetails";


//Lazy structure from use the all tsx

const LazyWelcome =lazy(()=>import("../../containers/Welcome").then(()=>({default:Welcome})));
const LazyCamara =lazy(()=>import("../../views/public/Camara").then(()=>({default:Camara})));
const LazySenado =lazy(()=>import("../../views/public/Senado").then(()=>({default:Senado})));
const LazySenadoDetails =lazy(()=>import("../../views/public/SenadoDetails").then(()=>({default:SenadoDetails})));


export const InternalRouting = () => {
  return (
    <Routes>
      //Routes Default
      <Route path="/welcome" element={<LazyWelcome />} />
      <Route path="/camara" element={<LazyCamara />} />
      <Route path="/senado" element={<LazySenado />} />
      <Route path="/senado/senadoDetails/:idDepartment" element={<LazySenadoDetails />} />
      
      
    </Routes>
  );
};
