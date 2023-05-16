import React, { useCallback } from "react";
import { useEpayco } from "react-epayco";
import { useLinkClickHandler } from "react-router-dom";

export const PayButton = () => {
  const epayco = useEpayco({
    key: "491d6a0b6e992cf924edd8d3d088aff1",
  });

  var data = {
    //Parametros compra (obligatorio)
    name: "Vestido Mujer Primavera",
    description: "Vestido Mujer Primavera",
    invoice: "12333322223",
    currency: "cop",
    amount: "12000",
    tax_base: "0",
    tax: "0",
    country: "co",
    lang: "es",

    //Onpage="false" - Standard="true"
    external: "false",

    //Atributos opcionales
    extra1: "extra1",
    extra2: "extra2",
    extra3: "extra3",
    // confirmation: "http://secure2.payco.co/confirmation.php",
    //response: "http://secure2.payco.co/response.php",

    //Atributos cliente
    name_billing: "Andres Perez",
    address_billing: "Carrera 19 numero 14 91",
    type_doc_billing: "cc",
    mobilephone_billing: "3050000000",
    number_doc_billing: "100000000",
  };
  var handler = useEpayco({
    key: "491d6a0b6e992cf924edd8d3d088aff1",
    test: true,
  });
  return (
    <div id="main">
      <button onClick={() => handler}>open checkout</button>
    </div>
  );
};
