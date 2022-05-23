import { useContext } from 'react';
import { ContextApp } from '../store/Store';
import ButtonBase from './ButtonBase';
import types from '../store/context.types';
import ContainerModal from './ContainerModal';
import ErrorIcon from '../assets/icons/ErrorIcon';

const ModalError = () => {
  const date = new Date();
  const { dispatch } = useContext(ContextApp);

  const closeModal = () => {
    dispatch({
      type: types.TOGGLE_MODAL_ERROR,
      payload: false,
    });
  };

  return (
    <ContainerModal>
      <div className="w-2/5 h-50vh bg-white relative flex flex-col justify-center items-center space-y-5 rounded-lg p-5">
        <span
          onClick={closeModal}
          className="text-2xl absolute text-black top-2 right-2 cursor-pointer z-50"
        >
          X
        </span>
        <ErrorIcon color="#f40100" classes={'w-16 h-16'} />
        <h1 className="font-bold text-red_base text-2xl">
          Horario no disponible
        </h1>
        <p className="text-gray_text">
          El horario es de 8:00 am. a 6:00 pm del dia{' '}
          {date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}.
          Por favor ingresar otra fecha u otro horario para reservar con
          nosotros.
        </p>
        <div className="w-full flex justify-evenly items-center space-x-2">
          <ButtonBase
            label="Editar reserva"
            classes={'bg-red_base text-white'}
            handleClick={closeModal}
          />
        </div>
      </div>
    </ContainerModal>
  );
};

export default ModalError;
