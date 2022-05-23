import { createContext, useReducer } from 'react';
import contextTypes from './context.types';

export const ContextApp = createContext();

const INITIAL_STATE = {
  modal_select_type_reservation: false,
  modal_reserve_with_user: false,
  modal_register_user: false,
  modal_reservation_success: false,
  modal_reservation_error: false,

  // data reservation
  data_reservation: {},
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case contextTypes.SET_DATA_RESERVATION: {
      return {
        ...state,
        data_reservation: payload,
      };
    }

    case contextTypes.TOGGLE_MODAL_SELECT_TYPE_RESERVATION: {
      return {
        ...state,
        modal_select_type_reservation: payload,
      };
    }

    case contextTypes.TOGGLE_MODAL_RESERVE_WITH_USER: {
      return {
        ...state,
        modal_reserve_with_user: payload,
      };
    }

    case contextTypes.TOGGLE_MODAL_REGISTER_USER: {
      return {
        ...state,
        modal_register_user: payload,
      };
    }

    case contextTypes.TOGGLE_MODAL_SUCCESS: {
      return {
        ...state,
        modal_reservation_success: payload,
      };
    }

    case contextTypes.TOGGLE_MODAL_ERROR: {
      return {
        ...state,
        modal_reservation_error: payload,
      };
    }

    default:
      return { ...state };
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ContextApp.Provider value={{ state, dispatch }}>
      {children}
    </ContextApp.Provider>
  );
};

export default Store;
