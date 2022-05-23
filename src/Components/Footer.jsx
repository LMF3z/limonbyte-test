import React from 'react';
import MailIcon from '../assets/icons/MailIcon';
import PhoneCallIcon from '../assets/icons/PhoneCallIcon';
import images from '../assets';

const Footer = () => {
  const date = new Date();

  return (
    <footer className="w-full min-h-40vh">
      <nav className="w-full height_inherit grid grid-cols-4 uppercase">
        <div className="w-full height_inherit center_flex p-1">
          <img
            src={images.logo}
            alt="logo-app"
            className="w-3/5 h-full"
            // className="w-3/5 h-90%"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-start space-y-3 p-3">
          <div className="cursor-pointer">inicio</div>
          <div className="cursor-pointer">nosotros</div>
          <div className="cursor-pointer">restaurante</div>
          <div className="cursor-pointer">reservaciones</div>
          <div className="cursor-pointer">catering</div>
          <div className="cursor-pointer">food trucks</div>
          <div className="cursor-pointer">JH foods</div>
          <div className="cursor-pointer">contacto</div>
          <div className="cursor-pointer">whatsapp</div>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-start space-y-3 p-3 lowercase">
          <div className="cursor-pointer uppercase">
            <span>contactanos</span>
          </div>
          <div className="cursor-pointer flex space-x-1">
            <PhoneCallIcon color="#f40100" />
            <span>(786)277-7807</span>
          </div>
          <div className="cursor-pointer flex space-x-1">
            <MailIcon color="#f40100" />
            <span>jhfoodllanos@gmail.com</span>
          </div>
          <div className="cursor-pointer">whatsapp button</div>
        </div>
        <div className="w-full h-full center_flex">
          <img
            src={images.logoFoods}
            alt="logo-foods"
            className="w-4/5 h-4/5"
          />
        </div>
      </nav>
      <div className="w-full h-20 py-2 px-10 flex text-gray-500">
        <div className="w-1/2">
          <p>
            Políticas de privacidad | Políticas de reembolso | Términos y
            condiciones
          </p>
          <p>
            <span>&copy; {date.getFullYear()} JH.</span>
            &nbsp; Todos los derechos reservados. Creado por
            www.legmarketing305.com
          </p>
        </div>
        <div className="w-1/2 flex justify-end items-center space-x-1">
          <img
            className="img_default"
            src={images.twitterIcon}
            alt="twitterIcon"
          />
          <img
            className="img_default"
            src={images.facebookIcon}
            alt="facebookIcon"
          />
          <img
            className="img_default"
            src={images.instagramIcon}
            alt="instagramIcon"
          />
          <img
            className="img_default"
            src={images.youtubeIcon}
            alt="youtubeIcon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
