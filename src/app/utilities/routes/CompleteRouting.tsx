import { lazy } from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { MainBoard } from "../../containers/MainBoard";
import { NotFound } from "../../views/shared/NotFound";
import { Blog } from "../../containers/Blog";
import { Login } from "../../containers/Login";
import { AuthWrapper } from "./AuthWrapper";

const LazyMainBoard = lazy(() => import("../../containers/MainBoard").then(() => ({ default: MainBoard })) );
const LazyBlog = lazy(() => import("../../containers/Blog").then(() => ({ default: Blog })) );
const LazyNotFound = lazy(() => import("../../views/shared/NotFound").then(() => ({ default: NotFound })) );
const LazyLogin = lazy(() => import("../../containers/Login").then(() => ({ default: Login })) );

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
      <Route path="/" element={<LazyMainBoard />} /> 
      <Route path="/login" element={<LazyLogin />} />
      {/* {(userLogged) ? ( 
      ) : (
      )} */}

      <Route path="*" element={<LazyLogin />} />
    </Routes>
  );
};
