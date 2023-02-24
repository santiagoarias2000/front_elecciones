import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { CompleteRouting } from "./app/utilities/routes/CompleteRouting";

const loading = (
  <body className="Contanner_loding">
    <div>
      <h1>Guia Electoral de Colombia</h1>
      <h2>
        Sea paciente mientras carga la información de las elecciones que
        seleccionó
      </h2>
      {/* Vamos a colocar un circulo para la carga de los elementos */}
      <div className="circle"></div>
    </div>
  </body>
);

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        {/* time to loading information to aplication */}
        <Suspense fallback={loading}>
          {/* Go to routes where init aplication */}
          <CompleteRouting />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
