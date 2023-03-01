import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "../../containers/Welcome";
import { MainBoard } from "../../containers/MainBoard";
import { Camara } from "../../views/public/camara/Camara";
import { CamaraTerritorialDepartamento } from "../../views/public/camara/CamaraTerritorialDepartamento";


//Lazy structure from use the all tsx

const LazyWelcome =lazy(()=>import("../../containers/Welcome").then(()=>({default:Welcome})));
const LazyCamara =lazy(()=>import("../../views/public/camara/Camara").then(()=>({default:Camara})));
const LazyCamaraTerritorialDepartamento =lazy(()=>import("../../views/public/camara/CamaraTerritorialDepartamento").then(()=>({default:CamaraTerritorialDepartamento})));



export const InternalRouting = () => {
  return (
    <Routes>
      //Routes Default
      <Route path="/welcome" element={<LazyWelcome />} />
      <Route path="/camara" element={<LazyCamara />} />
      <Route path="/camara/circuncripcion/territorial/departamento/:idDepartment" element={<LazyCamaraTerritorialDepartamento />} />
      
      
    </Routes>
  );
};
