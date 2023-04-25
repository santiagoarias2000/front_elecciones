import { lazy } from "react";
import { Routes, Route} from "react-router-dom";
import { MainBoard } from "../../containers/MainBoard";
import { NotFound } from "../../views/shared/NotFound";


const LazyMainBoard = lazy(()=>import("../../containers/MainBoard").then(()=>({default:MainBoard})));


export const CompleteRouting = () => {
  return (
    <Routes>
      <Route path="/*" element={<LazyMainBoard/>}/>
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};
