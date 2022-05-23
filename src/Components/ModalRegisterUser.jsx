import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import ButtonBase from './ButtonBase';
import ContainerModal from './ContainerModal';
import { FormRegisterUserSchema } from '../validation/validate.reservationSchemas';
import { ContextApp } from '../store/Store';
import types from '../store/context.types';
import api from '../API/handlerApi';

const ModalRegisterUser = () => {
  const { state, dispatch } = useContext(ContextApp);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormRegisterUserSchema),
  });

  const createUser = async (data) => {
    const form = {
      data,
      data_reservation: state.data_reservation,
    };
    const response = await api.saveNewUser(form);

    if (response.data.success) {
      reset();
      dispatch({
        type: types.TOGGLE_MODAL_REGISTER_USER,
        payload: false,
      });

      return dispatch({ type: types.TOGGLE_MODAL_SUCCESS, payload: true });
    }

    dispatch({
      type: types.TOGGLE_MODAL_REGISTER_USER,
      payload: false,
    });

    dispatch({ type: types.TOGGLE_MODAL_ERROR, payload: true });
  };

  const closeModal = () => {
    dispatch({ type: types.TOGGLE_MODAL_REGISTER_USER, payload: false });
  };

  return (
    <ContainerModal>
      <div className="w-3/5 h-95vh bg-black flex justify-center items-center space-x-5 drop-shadow-2xl rounded-lg relative z-50">
        <spa
          onClick={closeModal}
          className="text-2xl absolute text-white top-2 right-2 cursor-pointer z-50"
        >
          X
        </spa>
        <div className="w-3/5 h-full center_flex bg-register_bg bg-cover bg-center bg-no-repeat" />
        <form
          onSubmit={handleSubmit(createUser)}
          className="w-2/5 h-full text-base text-white flex flex-col justify-between space-y-3 p-3 relative"
        >
          <h1 className="text-2xl font-bold">Registro</h1>
          <div className="w-95%">
            <label className="text-white">Nombre</label>
            <input
              {...register('name')}
              type="text"
              className="w-full h-8 bg-gray_input text-gray_text outline-0 p-2"
            />
            {errors?.name?.message && (
              <p className="text-red_base text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="w-95%">
            <label className="text-white">Apellido</label>
            <input
              {...register('last_name')}
              type="text"
              className="w-full h-8 bg-gray_input text-gray_text outline-0 p-2"
            />
            {errors?.last_name?.message && (
              <p className="text-red_base text-sm">
                {errors.last_name.message}
              </p>
            )}
          </div>
          <div className="w-95%">
            <label className="text-white">Correo electónico</label>
            <input
              {...register('email')}
              type="email"
              className="w-full h-8 bg-gray_input text-gray_text outline-0 p-2"
            />
            {errors?.email?.message && (
              <p className="text-red_base text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="w-95%">
            <label className="text-white">Teléfono</label>
            <input
              {...register('phone')}
              type="text"
              className="w-full h-8 bg-gray_input text-gray_text outline-0 p-2"
            />
            {errors?.phone?.message && (
              <p className="text-red_base text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div className="w-95%">
            <label className="text-white">Contraseña</label>
            <input
              {...register('password')}
              type="password"
              className="w-full h-8 bg-gray_input text-gray_text outline-0 p-2"
            />
            {errors?.password?.message && (
              <p className="text-red_base text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="w-95%">
            <label className="text-white">Repetir contraseña</label>
            <input
              {...register('password_two')}
              type="password"
              className="input_form w-full h-6"
            />
            {errors?.password_two?.message && (
              <p className="text-red_base text-sm">
                {errors.password_two.message}
              </p>
            )}
          </div>
          <div className="w-1/2">
            <ButtonBase label="Guardar" classes={'1/2'} />
          </div>
        </form>
      </div>
    </ContainerModal>
  );
};

export default ModalRegisterUser;
