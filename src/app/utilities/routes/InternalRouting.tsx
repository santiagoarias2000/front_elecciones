import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "../../containers/Welcome";
import { MainBoard } from "../../containers/MainBoard";
import { SenadoElegidos } from "../../views/public/senado/SenadoElegidos";
import { SenadoDetails } from "../../views/public/senado/SenadoDetails";
import { PrivacyPolicies } from "../../views/shared/PrivacyPolicies";
import { NotFound } from "../../views/shared/NotFound";
import { LegalWarning } from "../../views/shared/LegalWarning";
import { CookiesPolices } from "../../views/shared/CookiesPolicies";
import { TermsConditions } from "../../views/shared/TermsConditions";
import { Camara } from "../../views/public/camara/Camara";
import { CamaraTerritorialDepartamento } from "../../views/public/camara/CamaraTerritorialDepartamento";
import { SenadoMuni } from "../../views/public/senado/SenadoMuni";
import { CamaraIndigenaDepartamento } from "../../views/public/camara/CamaraIndigenaDepartamento";
import { CamaraAfroDescendienteDepartamento } from "../../views/public/camara/CamaraAfroDescendienteDepartamento";
import { Senado } from "../../views/public/senado/Senado";
import { Blog } from "../../containers/Blog";
import { CamaraIndigenaDepartamentoMunicipio } from "../../views/public/camara/CamaraIndigenaDepartamentoMunicipio";
import { CamaraTerritorialDepartamentoMunicipio } from "../../views/public/camara/CamaraTerritorialDepartamentoMunicipio";
import { CamaraAfroDescendienteDepartamentoMunicipio } from "../../views/public/camara/CamaraAfroDescendienteDepartamentoMunicipio";
import { SenadoIndigenaDepartamento } from "../../views/public/senado/SenadoIndigenaDepartamento";


//Lazy structure from use the all tsx

const LazyWelcome =lazy(()=>import("../../containers/Welcome").then(()=>({default:Welcome})));
const LazySenadoDetailsMuni =lazy(()=>import("../../views/public/senado/SenadoMuni").then(()=>({default:SenadoMuni})));
const LazySenadoElegidos =lazy(()=>import("../../views/public/senado/SenadoElegidos").then(()=>({default:SenadoElegidos})));
const LazySenado =lazy(()=>import("../../views/public/senado/Senado").then(()=>({default:Senado})));
const LazySenadoDetails =lazy(()=>import("../../views/public/senado/SenadoDetails").then(()=>({default:SenadoDetails})));
const LazySenadoIndigenaDepartamental =lazy(()=>import("../../views/public/senado/SenadoIndigenaDepartamento").then(()=>({default:SenadoIndigenaDepartamento})));
const LazyPrivacyPolicies =lazy(()=>import("../../views/shared/PrivacyPolicies").then(()=>({default:PrivacyPolicies})));
const LazyNotFound = lazy(()=> import("../../views/shared/NotFound").then(()=>({default:NotFound})))
const LazyLegalWarning = lazy(()=> import("../../views/shared/LegalWarning").then(()=>({default:LegalWarning})))
const LazyCookiesPolicies = lazy(()=> import("../../views/shared/CookiesPolicies").then(()=>({default:CookiesPolices})))
const LazyTermsConditions = lazy(()=> import("../../views/shared/TermsConditions").then(()=>({default:TermsConditions})))
const LazyCamara =lazy(()=>import("../../views/public/camara/Camara").then(()=>({default:Camara})));
const LazyCamaraTerritorialDepartamento =lazy(()=>import("../../views/public/camara/CamaraTerritorialDepartamento").then(()=>({default:CamaraTerritorialDepartamento})));
const LazyCamaraIndigenaDepartamento =lazy(()=>import("../../views/public/camara/CamaraIndigenaDepartamento").then(()=>({default:CamaraIndigenaDepartamento})));
const LazyCamaraAfroDescendienteDepartamento =lazy(()=>import("../../views/public/camara/CamaraAfroDescendienteDepartamento").then(()=>({default:CamaraAfroDescendienteDepartamento})));
const LazyBlog =lazy(()=>import("../../containers/Blog").then(()=>({default:Blog})));
const LazyCamaraTerritorialepartamentoMunicipio =lazy(()=>import("../../views/public/camara/CamaraTerritorialDepartamentoMunicipio").then(()=>({default:CamaraTerritorialDepartamentoMunicipio})));
const LazyCamaraIndigenaDepartamentoMunicipio =lazy(()=>import("../../views/public/camara/CamaraIndigenaDepartamentoMunicipio").then(()=>({default:CamaraIndigenaDepartamentoMunicipio})));
const LazyCamaraAfroDescendienteDepartamentoMunicipio =lazy(()=>import("../../views/public/camara/CamaraAfroDescendienteDepartamentoMunicipio").then(()=>({default:CamaraAfroDescendienteDepartamentoMunicipio})));



export const InternalRouting = () => {
  return (
    <Routes>
      //Routes Default
      <Route path="/" element={<LazyBlog/>}/>
      <Route path="/welcome" element={<LazyWelcome />} />
      <Route path="/camara" element={<LazyCamara />} />
      <Route path="/senadoelegidos" element={<LazySenadoElegidos />} />
      <Route path="/senado" element={<LazySenado/>} />
      <Route path="/senado/senadoDetails/:idDepartment" element={<LazySenadoDetails />} />
      <Route path="/senado/senadoDetails/:idDepartment/municipio/:idMunicipality" element={<LazySenadoDetailsMuni />} />
      <Route path="/senado/indigena/departamento/:idDepartment" element={<LazySenadoIndigenaDepartamental />} />
      <Route path="/senado/indigena/departamento/:idDepartment/municipio/:idMunicipality" element={<LazySenadoDetailsMuni />} />
      

      {/* page legal to need app web */}
      <Route path="/politicasprivacidad" element={<LazyPrivacyPolicies/>} />
      <Route path="/avisolegal" element={<LazyLegalWarning/>}/>
      <Route path="/politicascookies" element={<LazyCookiesPolicies/>}/>
      <Route path="/terminoscondiciones" element={<LazyTermsConditions/>}/>

      <Route path="/*" element={<LazyNotFound/>}/>
      <Route path="/camara/circuncripcion/territorial/departamento/:idDepartment" element={<LazyCamaraTerritorialDepartamento />} />
      <Route path="/camara/circuncripcion/indigena/departamento/:idDepartment" element={<LazyCamaraIndigenaDepartamento />} />
      <Route path="/camara/circuncripcion/afrodescendiente/departamento/:idDepartment" element={<LazyCamaraAfroDescendienteDepartamento />} />
      
      <Route path="/camara/circuncripcion/territorial/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyCamaraTerritorialepartamentoMunicipio />} />
      <Route path="/camara/circuncripcion/indigena/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyCamaraIndigenaDepartamentoMunicipio />} />
      <Route path="/camara/circuncripcion/afrodescendiente/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyCamaraAfroDescendienteDepartamentoMunicipio />} />
      
      
    </Routes>
  );
};
