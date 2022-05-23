import { useContext } from 'react';
import { ContextApp } from '../store/Store';
import ButtonBase from './ButtonBase';
import types from '../store/context.types';
import ContainerModal from './ContainerModal';
import BellIcon from '../assets/icons/BellIcon';
import AddUserIcon from '../assets/icons/AddUserIcon';

const ModalSelectTypeReserv = () => {
  const { dispatch } = useContext(ContextApp);

  const closeModal = () => {
    dispatch({
      type: types.TOGGLE_MODAL_SELECT_TYPE_RESERVATION,
      payload: false,
    });
  };

  const reserveWithUser = () => {
    dispatch({
      type: types.TOGGLE_MODAL_SELECT_TYPE_RESERVATION,
      payload: false,
    });
    dispatch({ type: types.TOGGLE_MODAL_RESERVE_WITH_USER, payload: true });
  };

  const registerUser = () => {
    dispatch({
      type: types.TOGGLE_MODAL_SELECT_TYPE_RESERVATION,
      payload: false,
    });
    dispatch({ type: types.TOGGLE_MODAL_REGISTER_USER, payload: true });
  };

  return (
    <ContainerModal>
      <div className="w-1/4 h-40vh relative flex flex-col justify-start items-start pt-8">
        <span
          onClick={closeModal}
          className="text-4xl absolute text-white top-0 right-0 cursor-pointer "
        >
          X
        </span>
        <div className="w-90% h-4/5 bg-white flex flex-col justify-center items-center space-y-5 rounded-lg z-50">
          <ButtonBase
            type="button"
            label="Reservar con tu usuario"
            classes={'w-90% h-2/5 rounded-lg'}
            icon={<BellIcon classes="w-20 h-20" color="#fff" />}
            handleClick={reserveWithUser}
          />
          <ButtonBase
            type="button"
            label="Registrarse"
            classes={'w-90% h-2/5 rounded-lg'}
            icon={<AddUserIcon classes="w-10 h-10" color="#fff" />}
            handleClick={registerUser}
          />
        </div>
      </div>
    </ContainerModal>
  );
};

export default ModalSelectTypeReserv;
