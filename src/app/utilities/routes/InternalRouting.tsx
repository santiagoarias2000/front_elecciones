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
import AboutUs from "../../views/shared/AboutUs";
import { Gobernacion } from "../../views/public/gobernacion/Gobernacion";
import { Alcaldia } from "../../views/public/alcaldia/Alcaldia";
import { Jal } from "../../views/public/jal/Jal";
import { JalDepartamento } from "../../views/public/jal/JalDepartamento";
import { JalMunicipal } from "../../views/public/jal/JalMunicipal";

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
const LazyPresidente = lazy(() => import("../../views/public/presidencia/presidenciaAll").then(() => ({default: PresidenciaAll})));
const LazyGobernacion = lazy(() => import("../../views/public/gobernacion/Gobernacion").then(() => ({default: Gobernacion})));
const LazyAlcadia = lazy(() => import("../../views/public/alcaldia/Alcaldia").then(() => ({default: Alcaldia})));
const LazyJal = lazy(() => import("../../views/public/jal/Jal").then(() => ({default: Jal})));
const LazyJalDepartamento = lazy(() => import("../../views/public/jal/JalDepartamento").then(() => ({default: JalDepartamento})));
const LazyJalMunicipio = lazy(() => import("../../views/public/jal/JalMunicipal").then(() => ({default: JalMunicipal})));
//Blog
const LazyBlog = lazy(() => import("../../containers/Blog").then(() => ({default: Blog})));
const LazyNosotros = lazy(() => import("../../views/shared/AboutUs").then(() => ({default: AboutUs})));


export const InternalRouting = () => {
  return (
    <Routes>
      //Routes Default
      <Route path="/" element={<LazyWelcome/>}/>
      <Route path="/camara" element={<LazyCamara />} />
      <Route path="/senadoelegidos" element={<LazySenadoElegidos />} />
      <Route path="/senado" element={<LazySenado/>} />
      <Route path="/senado/nacional/:idDepartment" element={<LazySenadoNacionalDepartamento />} />
      <Route path="/senado/nacional/:idDepartment/municipio/:idMunicipality" element={<LazySenadoNacionalMunicipio />} />
      <Route path="/senado/indigena/departamento/:idDepartment" element={<LazySenadoIndigenaDepartamental />} />
      <Route path="/senado/indigena/departamento/:idDepartment/municipio/:idMunicipality" element={<LazySenadoIndigenaMunicipio />} />
      

      {/* page legal to need app web */}
      <Route path="/politicasprivacidad" element={<LazyPrivacyPolicies/>} />
      <Route path="/avisolegal" element={<LazyLegalWarning/>}/>
      <Route path="/politicascookies" element={<LazyCookiesPolicies/>}/>
      <Route path="/terminoscondiciones" element={<LazyTermsConditions/>}/>

      <Route path="/notFound" element={<LazyNotFound/>}/>
      <Route path="/camara/circuncripcion/territorial/departamento/:idDepartment" element={<LazyCamaraTerritorialDepartamento />} />
      <Route path="/camara/circuncripcion/indigena/departamento/:idDepartment" element={<LazyCamaraIndigenaDepartamento />} />
      <Route path="/camara/circuncripcion/afrodescendiente/departamento/:idDepartment" element={<LazyCamaraAfroDescendienteDepartamento />} />
      
      <Route path="/camara/circuncripcion/territorial/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyCamaraTerritorialepartamentoMunicipio />} />
      <Route path="/camara/circuncripcion/indigena/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyCamaraIndigenaDepartamentoMunicipio />} />
      <Route path="/camara/circuncripcion/afrodescendiente/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyCamaraAfroDescendienteDepartamentoMunicipio />} />
      //Routes presidente
      <Route path="/presidencia" element={<LazyPresidente />} />
      //Route blog
      <Route path="/blog" element={<LazyBlog/>}/>
      <Route path="/nosotros" element={<LazyNosotros/>}/>
      <Route path="*" element={<NotFound/>}/>
      //Routes Gobernacion
      <Route path="/gobernacion" element={<LazyGobernacion/>}/>
      //Routes Alcadia
      <Route path="/alcaldia" element={<LazyAlcadia/>}/>
      //Routes Consejo
      //Routes Asamblea
      //Routes jal
      <Route path="/jal" element={<LazyJal/>}/>
      <Route path="/jal/departamento/:idDepartment" element={<LazyJalDepartamento/>}/>
      <Route path="/jal/municipio/:idMunicipality" element={<LazyJalMunicipio/>}/>
      
    </Routes>
  );
};
