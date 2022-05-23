import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import reservationSchema from '../validation/validate.reservationSchemas';
import types from '../store/context.types';
import { ContextApp } from '../store/Store';
import ButtonBase from './ButtonBase';

const FormReservation = () => {
  const date = new Date();

  const { state, dispatch } = useContext(ContextApp);
  const [dateReserve, setDateReserve] = useState(date);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(reservationSchema),
  });

  const handleSelectDateReserve = (date) => setDateReserve(date);

  const handleSavingReservation = (data) => {
    if (!dateReserve) {
      return toast.error('Debe seleccionar una fecha.');
    }

    if (data.reservation_time === 'none') {
      return setError('reservation_time', {
        message: 'Debe seleccionar una hora',
      });
    }

    data.dateReservation = dateReserve.toISOString().split('T')[0];

    dispatch({
      type: types.TOGGLE_MODAL_SELECT_TYPE_RESERVATION,
      payload: true,
    });
    dispatch({ type: types.SET_DATA_RESERVATION, payload: data });
  };

  return (
    <form
      onSubmit={handleSubmit(handleSavingReservation)}
      className="w-3/5 mx-auto center_flex flex-col space-y-5"
    >
      <h1 className="text-4xl font-bold text-red_base">
        Visita JH Carne en Vara a la Llanera
      </h1>
      <p className="text-left">
        Si deseas vivir la experiencia llanera de nuestro restaurante en
        kendall, solo debes rellenar tus datos y realizar una reservación
        totalmente gratis
      </p>
      <div className="input_form_container">
        <label className="font-bold">Cantidad de personas</label>
        <input
          type="number"
          min={1}
          className="input_form"
          {...register('amount_people')}
        />
        {errors?.amount_people?.message && (
          <p className="text-red_base text-sm">
            {errors.amount_people.message}
          </p>
        )}
      </div>
      <div className="input_form_container">
        <label className="font-bold">fecha:</label>
        <DatePicker
          selected={dateReserve}
          onChange={(date) => handleSelectDateReserve(date)}
          startDate={date}
          minDate={date}
          className="input_form"
        />
        {/* <input type="date" className="input_form" /> */}
      </div>
      <div className="input_form_container">
        <label className="font-bold">Horario</label>
        <input type="text" className="input_form" />
      </div>
      <div className="input_form_container">
        <label className="font-bold">Hora</label>
        <select className="input_form" {...register('reservation_time')}>
          <option value="none">Seleccionar hora</option>
          <option value="8am">8 am</option>
          <option value="9am">9 am</option>
          <option value="10am">10 am</option>
          <option value="11am">11 am</option>
          <option value="12pm">12 pm</option>
          <option value="1pm">1 pm</option>
          <option value="2pm">2 pm</option>
          <option value="3pm">3 pm</option>
          <option value="4pm">4 pm</option>
          <option value="5pm">5 pm</option>
          <option value="6pm">6 pm</option>
        </select>
        {errors?.reservation_time?.message && (
          <p className="text-red_base text-sm">
            {errors.reservation_time.message}
          </p>
        )}
      </div>
      <div className="input_form_container">
        <ButtonBase label="Guardar" />
      </div>
    </form>
  );
};

export default FormReservation;
