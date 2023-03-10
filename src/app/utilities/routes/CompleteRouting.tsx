import { lazy, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainBoard } from "../../containers/MainBoard";
import { Welcome } from "../../containers/Welcome";
import { NotFound } from "../../views/shared/NotFound";
import { Blog } from "../../containers/Blog";


const LazyMainBoard = lazy(()=>import("../../containers/MainBoard").then(()=>({default:MainBoard})));
const LazyBlog =lazy(()=>import("../../containers/Blog").then(()=>({default:Blog})));
const LazyNotFound = lazy(()=> import("../../views/shared/NotFound").then(()=>({default:NotFound})))
const LazyWelcome =lazy(()=>import("../../containers/Welcome").then(()=>({default:Welcome})));

export const CompleteRouting = () => {
  return (
    <Routes>
      <Route path="/*" element={<LazyMainBoard/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
