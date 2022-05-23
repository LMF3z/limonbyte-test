import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import images from '../assets';
import ButtonBase from './ButtonBase';
import ContainerModal from './ContainerModal';
import { reserveWithUserScehma } from '../validation/validate.reservationSchemas';
import { ContextApp } from '../store/Store';
import types from '../store/context.types';
import api from '../API/handlerApi';

const ModalReserveWithUser = () => {
  const { state, dispatch } = useContext(ContextApp);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reserveWithUserScehma),
  });

  const createReservation = async (data) => {
    const form = {
      data,
      data_reservation: state.data_reservation,
    };

    const response = await api.saveReservation(form);

    if (response.data.success) {
      reset();
      dispatch({
        type: types.TOGGLE_MODAL_RESERVE_WITH_USER,
        payload: false,
      });

      return dispatch({ type: types.TOGGLE_MODAL_SUCCESS, payload: true });
    }

    dispatch({
      type: types.TOGGLE_MODAL_RESERVE_WITH_USER,
      payload: false,
    });
    dispatch({ type: types.TOGGLE_MODAL_ERROR, payload: true });
  };

  const closeModal = () => {
    dispatch({ type: types.TOGGLE_MODAL_RESERVE_WITH_USER, payload: false });
  };

  return (
    <ContainerModal>
      <div className="w-2/5 min-h-1/2 h-1/2 bg-white flex justify-center items-center space-x-5 drop-shadow-2xl rounded-lg p-10 relative z-50">
        <spa
          onClick={closeModal}
          className="text-2xl absolute text-black top-2 right-2 cursor-pointer "
        >
          X
        </spa>
        <div className="w-2/5 h-full center_flex">
          <img src={images.logo} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(createReservation)}
          className="w-3/5 h-full text-lg flex flex-col space-y-5"
        >
          <h1 className="text-2xl font-bold text-red_base">
            Reserva con tu usuario
          </h1>
          <div className="w-full">
            <label className="text-gray_text">Correo electónico</label>
            <input
              {...register('email')}
              type="email"
              className="input_form w-full"
            />
            <p className="text-red_base text-sm">
              {errors?.email?.message && (
                <p className="text-red_base text-sm">{errors.email.message}</p>
              )}
            </p>
          </div>
          <div className="w-full">
            <label className="text-gray_text">Contraseña</label>
            <input
              {...register('password')}
              type="password"
              className="input_form"
            />
            {errors?.password?.message && (
              <p className="text-red_base text-sm">{errors.password.message}</p>
            )}
          </div>
          <ButtonBase label="Guardar" classes={'w-1/2'} />
        </form>
      </div>
    </ContainerModal>
  );
};

export default ModalReserveWithUser;
