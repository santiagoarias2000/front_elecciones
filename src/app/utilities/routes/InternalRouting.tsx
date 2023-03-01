import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "../../containers/Welcome";
import { MainBoard } from "../../containers/MainBoard";
import { Camara } from "../../views/public/Camara";
import { PrivacyPolicies } from "../../views/shared/PrivacyPolicies";
import { NotFound } from "../../views/shared/NotFound";
import { LegalWarning } from "../../views/shared/LegalWarning";
import { CookiesPolices } from "../../views/shared/CookiesPolicies";
import { TermsConditions } from "../../views/shared/TermsConditions";


//Lazy structure from use the all tsx

const LazyWelcome =lazy(()=>import("../../containers/Welcome").then(()=>({default:Welcome})));
const LazyCamara =lazy(()=>import("../../views/public/Camara").then(()=>({default:Camara})));
const LazyPrivacyPolicies =lazy(()=>import("../../views/shared/PrivacyPolicies").then(()=>({default:PrivacyPolicies})));
const LazyNotFound = lazy(()=> import("../../views/shared/NotFound").then(()=>({default:NotFound})))
const LazyLegalWarning = lazy(()=> import("../../views/shared/LegalWarning").then(()=>({default:LegalWarning})))
const LazyCookiesPolicies = lazy(()=> import("../../views/shared/CookiesPolicies").then(()=>({default:CookiesPolices})))
const LazyTermsConditions = lazy(()=> import("../../views/shared/TermsConditions").then(()=>({default:TermsConditions})))


export const InternalRouting = () => {
  return (
    <Routes>
      //Routes Default
      <Route path="/welcome" element={<LazyWelcome />} />
      <Route path="/camara" element={<LazyCamara />} />

      {/* page legal to need app web */}
      <Route path="/politicasprivacidad" element={<LazyPrivacyPolicies/>} />
      <Route path="/avisolegal" element={<LazyLegalWarning/>}/>
      <Route path="/politicascookies" element={<LazyCookiesPolicies/>}/>
      <Route path="/terminoscondiciones" element={<LazyTermsConditions/>}/>

      <Route path="/*" element={<LazyNotFound/>}/>
    </Routes>
  );
};
