import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BodyComponent from './Components/BodyComponent';
import { ContextApp } from './store/Store';
import ModalSelectTypeReserv from './Components/ModalSelectTypeReserv';
import ModalReserveWithUser from './Components/ModalReserveWithUser';
import ModalRegisterUser from './Components/ModalRegisterUser';
import ModalSuccess from './Components/ModatSuccess';
import ModalError from './Components/ModatError';

const App = () => {
  const { state } = useContext(ContextApp);

  return (
    <>
      {state.modal_select_type_reservation && <ModalSelectTypeReserv />}
      {state.modal_reserve_with_user && <ModalReserveWithUser />}
      {state.modal_register_user && <ModalRegisterUser />}
      {state.modal_reservation_success && <ModalSuccess />}
      {state.modal_reservation_error && <ModalError />}
      <main>
        <Header />
        <BodyComponent />
        <Footer />
        <Toaster position="top-right" />
      </main>
    </>
  );
};

export default App;
