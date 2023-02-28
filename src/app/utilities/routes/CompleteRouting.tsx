import { lazy, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainBoard } from "../../containers/MainBoard";
import { Welcome } from "../../containers/Welcome";


const LazyMainBoard = lazy(()=>import("../../containers/MainBoard").then(()=>({default:MainBoard})));
const LazyWelcome =lazy(()=>import("../../containers/Welcome").then(()=>({default:Welcome})));

export const CompleteRouting = () => {
  return (
    <Routes>
      <Route path="/guiaelectoral/*" element={<LazyMainBoard/>}/>
    </Routes>
  );
};
