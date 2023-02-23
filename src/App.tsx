import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { CompleteRouting } from "./app/utilities/routes/CompleteRouting";

const loading = ( <div> Sea paciente mientras carga la información de las elecciones que seleccionó </div> );

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <CompleteRouting />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
