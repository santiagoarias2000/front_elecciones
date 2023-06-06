import { lazy } from "react";
import { Route, Routes, redirect } from "react-router-dom";
import { Welcome } from "../../views/shared/Welcome";
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
import { Blog } from "../../views/shared/Blog";
import { CamaraIndigenaDepartamentoMunicipio } from "../../views/public/camara/CamaraIndigenaDepartamentoMunicipio";
import { CamaraTerritorialDepartamentoMunicipio } from "../../views/public/camara/CamaraTerritorialDepartamentoMunicipio";
import { CamaraAfroDescendienteDepartamentoMunicipio } from "../../views/public/camara/CamaraAfroDescendienteDepartamentoMunicipio";
import { SenadoIndigenaDepartamento } from "../../views/public/senado/SenadoIndigenaDepartamento";
import { SenadoIndigenaMunicipio } from "../../views/public/senado/SenadoIndigenaMunicipio";

import { PresidenciaAll } from "../../views/public/presidencia/presidenciaAll";
import { SenadoNacionalDepartamento } from "../../views/public/senado/SenadoNacionalDepartamento";
import AboutUs from "../../views/shared/AboutUs";
import { Gobernacion } from "../../views/private/gobernacion/Gobernacion";
import { Alcaldia } from "../../views/private/alcaldia/Alcaldia";
import { Jal } from "../../views/private/jal/Jal";
import { JalDepartamento } from "../../views/private/jal/JalDepartamento";
import { JalMunicipal } from "../../views/private/jal/JalMunicipal";

import { Asamblea } from "../../views/private/asamblea/Asamblea";
import { GobernacionDepartamento } from "../../views/private/gobernacion/GobernacionDepartamento";
import { AsambleaDepartamento} from "../../views/private/asamblea/AsambleaDepartamento";
import { AlcaldiaDepartamento } from "../../views/private/alcaldia/AlcaldiaDepartamento";
import { GobernacionDepartamentoMunicipio } from "../../views/private/gobernacion/GobernacionDepartamentoMunicipio";
import { AsambleaDepartamentoMunicipio } from "../../views/private/asamblea/AsambleaDepartamentoMunicipio";
import { Concejo } from "../../views/private/concejo/Concejo";
import { ConcejoDepartamento } from "../../views/private/concejo/ConcejoDepartamento";
import { ConcejoMunicipal } from "../../views/private/concejo/ConcejoMunicipal";
import { AlcaldiaDepartamentoMunicipio } from "../../views/private/alcaldia/AlcaldiaDepartamentoMunicipio";
import { Resultados } from "../../views/shared/Resultados";
import { Login } from "../../views/public/Login";
import { Guard } from "../../security/Guard";
import { Citrep } from "../../views/public/camara/Citrep";
import { AlcaldiaLocalidad } from "../../views/private/alcaldia/AlcaldiaLocalidad";
import { ConcejoLocalidad } from "../../views/private/concejo/ConcejoLocalidad";

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
const LazyWelcome =lazy(()=>import("../../views/shared/Welcome").then(()=>({default:Welcome})));
const LazyCamaraTerritorialepartamentoMunicipio =lazy(()=>import("../../views/public/camara/CamaraTerritorialDepartamentoMunicipio").then(()=>({default:CamaraTerritorialDepartamentoMunicipio})));
const LazyCamaraIndigenaDepartamentoMunicipio =lazy(()=>import("../../views/public/camara/CamaraIndigenaDepartamentoMunicipio").then(()=>({default:CamaraIndigenaDepartamentoMunicipio})));
const LazyCamaraAfroDescendienteDepartamentoMunicipio =lazy(()=>import("../../views/public/camara/CamaraAfroDescendienteDepartamentoMunicipio").then(()=>({default:CamaraAfroDescendienteDepartamentoMunicipio})));
const LazyCamaraCitrep =lazy(()=>import("../../views/public/camara/Citrep").then(()=>({default:Citrep})));
const LazyPresidente = lazy(() => import("../../views/public/presidencia/presidenciaAll").then(() => ({default: PresidenciaAll})));
const LazyGobernacion = lazy(() => import("../../views/private/gobernacion/Gobernacion").then(() => ({default: Gobernacion})));
const LazyAlcadia = lazy(() => import("../../views/private/alcaldia/Alcaldia").then(() => ({default: Alcaldia})));
const LazyJal = lazy(() => import("../../views/private/jal/Jal").then(() => ({default: Jal})));
const LazyJalDepartamento = lazy(() => import("../../views/private/jal/JalDepartamento").then(() => ({default: JalDepartamento})));
const LazyJalMunicipio = lazy(() => import("../../views/private/jal/JalMunicipal").then(() => ({default: JalMunicipal})));
const LazyConcejo = lazy(() => import("../../views/private/concejo/Concejo").then(() => ({default: Concejo})));
const LazyConcejoDepartamento = lazy(() => import("../../views/private/concejo/ConcejoDepartamento").then(() => ({default: ConcejoDepartamento})));
const LazyConcejoDMunicipal = lazy(() => import("../../views/private/concejo/ConcejoMunicipal").then(() => ({default: ConcejoMunicipal})));
const LazyConcejoLocalidad = lazy(() => import("../../views/private/concejo/ConcejoLocalidad").then(() => ({default: ConcejoLocalidad})));
const LazyAsamblea = lazy(() => import("../../views/private/asamblea/Asamblea").then(() => ({default: Asamblea})));
const LazyGobernacionDepartamento = lazy(() => import("../../views/private/gobernacion/GobernacionDepartamento").then(() => ({default: GobernacionDepartamento})));
const LazyGobernacionDepartamentoMunicipio = lazy(() => import("../../views/private/gobernacion/GobernacionDepartamentoMunicipio").then(() => ({default: GobernacionDepartamentoMunicipio})));
const LazyAsambleaDepartamento = lazy(() => import("../../views/private/asamblea/AsambleaDepartamento").then(() => ({default:  AsambleaDepartamento})));
const LazyAsambleaDepartamentoMunicipio = lazy(() => import("../../views/private/asamblea/AsambleaDepartamentoMunicipio").then(() => ({default:  AsambleaDepartamentoMunicipio})));
const LazyAlcadiaDepartamento = lazy(() => import("../../views/private/alcaldia/AlcaldiaDepartamento").then(() => ({default: AlcaldiaDepartamento})));
const LazyAlcadiaDepartamentoMunicipio = lazy(() => import("../../views/private/alcaldia/AlcaldiaDepartamentoMunicipio").then(() => ({default: AlcaldiaDepartamentoMunicipio})));
const LazyAlcadiaLocalidad = lazy(() => import("../../views/private/alcaldia/AlcaldiaLocalidad").then(() => ({default: AlcaldiaLocalidad})));
//Blog
const LazyBlog = lazy(() => import("../../views/shared/Blog").then(() => ({default: Blog})));
const LazyResultados = lazy(() => import("../../views/shared/Resultados").then(() => ({default: Resultados})));
const LazyNosotros = lazy(() => import("../../views/shared/AboutUs").then(() => ({default: AboutUs})));
const LazyLogin = lazy(() => import("../../views/public/Login").then(() => ({default: Login})));



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
      <Route path="/camara/circuncripcion/citrep/:idCitrep" element={<LazyCamaraCitrep />} />
      //Routes presidente
      <Route path="/presidencia" element={<LazyPresidente />} />
      //Route blog
      <Route path="/blog" element={<LazyBlog/>}/>
      <Route path="/resultados" element={<LazyResultados/>}/>
      <Route path="/nosotros" element={<LazyNosotros/>}/>
      <Route path="*" element={<LazyNotFound/>}/>
      
      <Route element={<Guard />}>
        //Routes Gobernacion
        <Route  path="/gobernacion" element={<LazyGobernacion/>}/>
        <Route path="/gobernacion/departamento/:idDepartment" element={<LazyGobernacionDepartamento />} />
        <Route path="/gobernacion/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyGobernacionDepartamentoMunicipio />} />
        //Routes Alcadia
        <Route path="/alcaldia" element={<LazyAlcadia/>}/>
        <Route path="/alcaldia/departamento/:idDepartment" element={<LazyAlcadiaDepartamento />} />
        <Route path="/alcaldia/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyAlcadiaDepartamentoMunicipio />} />
        <Route path="/alcaldia/departamento/:idDepartment/localidad/:idMunicipality" element={<LazyAlcadiaLocalidad/>}/>
        //Routes Consejo
        <Route path="/concejo" element={<LazyConcejo/>}/>
        <Route path="/concejo/departamento/:idDepartment" element={<LazyConcejoDepartamento/>}/>
        <Route path="/concejo/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyConcejoDMunicipal/>}/>
        <Route path="/concejo/departamento/:idDepartment/localidad/:idMunicipality" element={<LazyConcejoLocalidad/>}/>
        //Routes Asamblea
        <Route path="/asamblea" element={<LazyAsamblea/>} />
        <Route path="/asamblea/departamento/:idDepartment" element={<LazyAsambleaDepartamento />} />
        <Route path="/asamblea/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyAsambleaDepartamentoMunicipio />} />
        //Routes jal
        <Route path="/jal" element={<LazyJal/>}/>
        <Route path="/jal/departamento/:idDepartment" element={<LazyJalDepartamento/>}/>
        <Route path="/jal/departamento/:idDepartment/municipio/:idMunicipality" element={<LazyJalMunicipio/>}/>
      </Route>
      
      
    </Routes>
  );
};
