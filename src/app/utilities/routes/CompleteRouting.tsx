import { lazy } from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { MainBoard } from "../../containers/MainBoard";
import { NotFound } from "../../views/shared/NotFound";
import { Blog } from "../../views/shared/Blog";
import { Login } from "../../views/public/Login";


const LazyMainBoard = lazy(()=>import("../../containers/MainBoard").then(()=>({default:MainBoard})));
const LazyBlog =lazy(()=>import("../../views/shared/Blog").then(()=>({default:Blog})));
const LazyNotFound = lazy(()=> import("../../views/shared/NotFound").then(()=>({default:NotFound})))
const LazyLogin = lazy(() => import("../../views/public/Login").then(() => ({default: Login})));

export const CompleteRouting = () => {
  let userLogged;
  const checkUser = function (){
    const token = localStorage.getItem("tokenHitData");
    if (token?.length != 0) {
      userLogged = token;
      console.log("Estoy logeado? " + userLogged);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Routes>
      <Route path="/*" element={<LazyMainBoard/>}/>
      <Route path="/login" element={<LazyLogin/>}/>
      <Route path="*" element={<LazyNotFound/>}/>

      <Route path="*" element={<LazyLogin />} />
    </Routes>
  );
};
