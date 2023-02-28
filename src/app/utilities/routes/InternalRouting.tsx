import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "../../containers/Welcome";
import { MainBoard } from "../../containers/MainBoard";
import { Camara } from "../../views/public/Camara";
import { PrivacyPolicies } from "../../views/shared/PrivacyPolicies";


//Lazy structure from use the all tsx

const LazyWelcome =lazy(()=>import("../../containers/Welcome").then(()=>({default:Welcome})));
const LazyCamara =lazy(()=>import("../../views/public/Camara").then(()=>({default:Camara})));
const LazyPrivacyPolicies =lazy(()=>import("../../views/shared/PrivacyPolicies").then(()=>({default:PrivacyPolicies})));


export const InternalRouting = () => {
  return (
    <Routes>
      //Routes Default
      <Route path="/welcome" element={<LazyWelcome />} />
      <Route path="/camara" element={<LazyCamara />} />
      <Route path="/politicasprivacidad" element={<LazyPrivacyPolicies/>} />
      
      
    </Routes>
  );
};
