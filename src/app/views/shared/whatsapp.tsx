import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "3144077994"; // Reemplaza con tu número de teléfono

  const handleClick = () => {
    const message = encodeURIComponent(
      "Se esta comunicando con José C Gil Zapata editor de la Guía Electoral de Colombia"
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <button className="whatsapp-button" onClick={handleClick}>
        <FaWhatsapp />
        <p>Enviar mensaje de WhatsApp!</p>
      </button>
    </>
  );
};

export default WhatsAppButton;
