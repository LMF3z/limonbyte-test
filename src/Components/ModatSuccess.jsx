import { useContext } from 'react';
import { ContextApp } from '../store/Store';
import ButtonBase from './ButtonBase';
import types from '../store/context.types';
import ContainerModal from './ContainerModal';
import CheckIcon from '../assets/icons/CheckIcon';
import images from '../assets';

const ModalSuccess = () => {
  const { dispatch } = useContext(ContextApp);

  const closeModal = () => {
    dispatch({
      type: types.TOGGLE_MODAL_SUCCESS,
      payload: false,
    });
  };

  return (
    <ContainerModal>
      <div className="w-2/5 h-50vh bg-white relative flex flex-col justify-center items-center space-y-5 rounded-lg p-5">
        <span
          onClick={closeModal}
          className="text-2xl absolute text-black top-2 right-2 cursor-pointer "
        >
          X
        </span>
        <CheckIcon color="#f40100" classes={'w-16 h-16'} />
        <h1 className="font-bold text-red_base text-2xl">
          Reserva registrada con exito
        </h1>
        <p className="text-gray_text">
          Descarga nuestra app para acceder a todos nuestros servicios al
          alcance de tu tiempo
        </p>
        <div className="w-full flex justify-evenly items-center space-x-2">
          <ButtonBase
            label="App Store"
            icon={<img src={images.apple} alt="apple" className="w-6 h-6" />}
            classes={
              'bg-white text-gray_text border  border-red_base rounded-lg'
            }
          />
          <ButtonBase
            label="Play Store"
            icon={
              <img src={images.playstore} alt="playstore" className="w-6 h-6" />
            }
            classes={
              'bg-white text-gray_text border  border-red_base rounded-lg'
            }
          />
        </div>
      </div>
    </ContainerModal>
  );
};

export default ModalSuccess;
