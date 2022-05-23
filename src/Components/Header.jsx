import images from '../assets';

const Header = () => {
  return (
    <header className="w-full h-35vh py-1 bg-black text-white bg-header_bg bg-cover bg-no-repeat bg-center">
      <nav className="h-16 flex justify-between items-center px-10">
        <div className="w-12 h-full">
          <img src={images.logo} alt="logo-app" className="w-16 h-16" />
        </div>
        <ul className="w-4/5 flex justify-evenly items-center space-x-5 uppercase">
          <li className="inline-block cursor-pointer hover:text-red_base">
            inicio
          </li>
          <li className="inline-block cursor-pointer hover:text-red_base">
            nosotros
          </li>
          <li className="inline-block cursor-pointer hover:text-red_base">
            restaurante
          </li>
          <li className="inline-block cursor-pointer hover:text-red_base text-red_base">
            reservaciones
          </li>
          <li className="inline-block cursor-pointer hover:text-red_base">
            catering
          </li>
          <li className="inline-block cursor-pointer hover:text-red_base">
            food trucks
          </li>
          <li className="inline-block cursor-pointer hover:text-red_base">
            JH foods
          </li>
          <li className="inline-block cursor-pointer hover:text-red_base">
            contacto
          </li>
          <li className="inline-block cursor-pointer hover:text-red_base">
            whatsapp
          </li>
        </ul>
      </nav>
      <section className="h-40 flex justify-start items-center">
        <h1 className="text-5xl ml-60">Reservaciones</h1>
      </section>
    </header>
  );
};

export default Header;
