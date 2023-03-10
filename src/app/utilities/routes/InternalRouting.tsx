import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "../../containers/Welcome";
import { MainBoard } from "../../containers/MainBoard";
import { SenadoElegidos } from "../../views/public/senado/SenadoElegidos";
import { PrivacyPolicies } from "../../views/shared/PrivacyPolicies";
import { NotFound } from "../../views/shared/NotFound";
import { LegalWarning } from "../../views/shared/LegalWarning";
import { CookiesPolices } from "../../views/shared/CookiesPolicies";
import { TermsConditions } from "../../views/shared/TermsConditions";
import { Camara } from "../../views/public/camara/Camara";
import { CamaraTerritorialDepartamento } from "../../views/public/camara/CamaraTerritorialDepartamento";
import { SenadoNacionalMunicipio } from "../../views/public/senado/SenadoNacionalMunicipio";
import { CamaraIndigenaDepartamento } from "../../views/public/camara/CamaraIndigenaDepartamento";
import { CamaraAfroDescendienteDepartamento } from "../../views/public/camara/CamaraAfroDescendienteDepartamento";
import { Senado } from "../../views/public/senado/Senado";
import { Blog } from "../../containers/Blog";
import { CamaraIndigenaDepartamentoMunicipio } from "../../views/public/camara/CamaraIndigenaDepartamentoMunicipio";
import { CamaraTerritorialDepartamentoMunicipio } from "../../views/public/camara/CamaraTerritorialDepartamentoMunicipio";
import { CamaraAfroDescendienteDepartamentoMunicipio } from "../../views/public/camara/CamaraAfroDescendienteDepartamentoMunicipio";
import { SenadoIndigenaDepartamento } from "../../views/public/senado/SenadoIndigenaDepartamento";
import { SenadoIndigenaMunicipio } from "../../views/public/senado/SenadoIndigenaMunicipio";

import { PresidenciaAll } from "../../views/public/presidencia/presidenciaAll";
import { SenadoNacionalDepartamento } from "../../views/public/senado/SenadoNacionalDepartamento";

//Lazy structure from use the all tsx


const LazySenadoNacionalMunicipio =lazy(()=>import("../../views/public/senado/SenadoNacionalMunicipio").then(()=>({default:SenadoNacionalMunicipio})));
const LazySenadoElegidos =lazy(()=>import("../../views/public/senado/SenadoElegidos").then(()=>({default:SenadoElegidos})));
const LazySenado =lazy(()=>import("../../views/public/senado/Senado").then(()=>({default:Senado})));
const LazySenadoNacionalDepartamento =lazy(()=>import("../../views/public/senado/SenadoNacionalDepartamento").then(()=>({default:SenadoNacionalDepartamento})));
const LazySenadoIndigenaDepartamental =lazy(()=>import("../../views/public/senado/SenadoIndigenaDepartamento").then(()=>({default:SenadoIndigenaDepartamento})));
const LazySenadoIndigenaMunicipio =lazy(()=>import("../../views/public/senado/SenadoIndigenaMunicipio").then(()=>({default:SenadoIndigenaMunicipio})));
const LazyPrivacyPolicies =lazy(()=>import("../../views/shared/PrivacyPolicies").then(()=>({default:PrivacyPolicies})));
const LazyNotFound = lazy(()=> import("../../views/shared/NotFound").then(()=>({default:NotFound})))
const LazyLegalWarning = lazy(()=> import("../../views/shared/LegalWarning").then(()=>({default:LegalWarning})))
const LazyCookiesPolicies = lazy(()=> import("../../views/shared/CookiesPolicies").then(()=>({default:CookiesPolices})))
const LazyTermsConditions = lazy(()=> import("../../views/shared/TermsConditions").then(()=>({default:TermsConditions})))
const LazyCamara =lazy(()=>import("../../views/public/camara/Camara").then(()=>({default:Camara})));
const LazyCamaraTerritorialDepartamento =lazy(()=>import("../../views/public/camara/CamaraTerritorialDepartamento").then(()=>({default:CamaraTerritorialDepartamento})));
const LazyCamaraIndigenaDepartamento =lazy(()=>import("../../views/public/camara/CamaraIndigenaDepartamento").then(()=>({default:CamaraIndigenaDepartamento})));
const LazyCamaraAfroDescendienteDepartamento =lazy(()=>import("../../views/public/camara/CamaraAfroDescendienteDepartamento").then(()=>({default:CamaraAfroDescendienteDepartamento})));
const LazyWelcome =lazy(()=>import("../../containers/Welcome").then(()=>({default:Welcome})));
const LazyCamaraTerritorialepartamentoMunicipio =lazy(()=>import("../../views/public/camara/CamaraTerritorialDepartamentoMunicipio").then(()=>({default:CamaraTerritorialDepartamentoMunicipio})));
const LazyCamaraIndigenaDepartamentoMunicipio =lazy(()=>import("../../views/public/camara/CamaraIndigenaDepartamentoMunicipio").then(()=>({default:CamaraIndigenaDepartamentoMunicipio})));
const LazyCamaraAfroDescendienteDepartamentoMunicipio =lazy(()=>import("../../views/public/camara/CamaraAfroDescendienteDepartamentoMunicipio").then(()=>({default:CamaraAfroDescendienteDepartamentoMunicipio})));
const LazyPresidente = lazy(() => import("../../views/public/presidencia/presidenciaAll").then(() => ({default: PresidenciaAll,})));

export const InternalRouting = () => {
  return (
    <Routes>
      //Routes Default
      <Route path="/" element={<LazyWelcome/>}/>
      <Route path="/guiaelectoral/camara" element={<LazyCamara />} />
      <Route path="/guiaelectoral/senadoelegidos" element={<LazySenadoElegidos />} />
      <Route path="/guiaelectoral/senado" element={<LazySenado/>} />
      <Route path="/guiaelectoral/senado/nacional/:idDepartment" element={<LazySenadoNacionalDepartamento />} />
      <Route path="/guiaelectoral/senado/nacional/:idDepartment/municipio/:idMunicipality" element={<LazySenadoNacionalMunicipio />} />
      <Route path="/guiaelectoral/senado/indigena/departamento/:idDepartment" element={<LazySenadoIndigenaDepartamental />} />
      <Route path="/guiaelectoral/senado/indigena/departamento/:idDepartment/municipio/:idMunicipality" element={<LazySenadoIndigenaMunicipio />} />
      

      {/* page legal to need app web */}
      <Route path="/guiaelectoral/politicasprivacidad" element={<LazyPrivacyPolicies/>} />
      <Route path="/guiaelectoral/avisolegal" element={<LazyLegalWarning/>}/>
      <Route path="/guiaelectoral/politicascookies" element={<LazyCookiesPolicies/>}/>
      <Route path="/guiaelectoral/terminoscondiciones" element={<LazyTermsConditions/>}/>

      <Route path="/guiaelectoral/notFound" element={<LazyNotFound/>}/>
      <Route path="/guiaelectoral/camara/circuncripcion/territorial/departamento/:idDepartment" element={<LazyCamaraTerritorialDepartamento />} />
      <Route path="/guiaelectoral/camara/circuncripcion/indigena/departamento/:idDepartment" element={<LazyCamaraIndigenaDepartamento />} />
      <Route path="/guiaelectoral/camara/circuncripcion/afrodescendiente/departamento/:idDepartment" element={<LazyCamaraAfroDescendienteDepartamento />} />
      
      <Route path="/guiaelectoral/camara/circuncripcion/territorial/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyCamaraTerritorialepartamentoMunicipio />} />
      <Route path="/guiaelectoral/camara/circuncripcion/indigena/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyCamaraIndigenaDepartamentoMunicipio />} />
      <Route path="/guiaelectoral/camara/circuncripcion/afrodescendiente/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyCamaraAfroDescendienteDepartamentoMunicipio />} />
      //Routes presidente
      <Route path="/guiaelectoral/presidencia" element={<LazyPresidente />} />
      
    </Routes>
  );
};
