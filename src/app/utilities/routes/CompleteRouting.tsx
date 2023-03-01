import { lazy, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainBoard } from "../../containers/MainBoard";
import { Welcome } from "../../containers/Welcome";
import { NotFound } from "../../views/shared/NotFound";


const LazyMainBoard = lazy(()=>import("../../containers/MainBoard").then(()=>({default:MainBoard})));
const LazyWelcome =lazy(()=>import("../../containers/Welcome").then(()=>({default:Welcome})));
const LazyNotFound = lazy(()=> import("../../views/shared/NotFound").then(()=>({default:NotFound})))

export const CompleteRouting = () => {
  return (
    <Routes>
      <Route path="/guiaelectoral/*" element={<LazyMainBoard/>}/>
      <Route path="/*" element={<LazyNotFound/>}/>
    </Routes>
  );
};
