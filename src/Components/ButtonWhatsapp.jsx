import React from 'react';
import WhatsappIcon from '../assets/icons/WhatsappIcon';

const ButtonWhatsapp = () => {
  return (
    <button className="button w-full h-full">
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <WhatsappIcon />
        </div>
      </div>
      <span>Whatsapp</span>
    </button>
  );
};

export default ButtonWhatsapp;
