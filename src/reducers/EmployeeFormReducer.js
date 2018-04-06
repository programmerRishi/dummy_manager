import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
   } from '../actions/types';

const INITIAL_STATE =
{
  name: '',
  shift: '',
  phone: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
    /* The square brackets used here are not array they are key interpretation.
    The key is decided at runtime.
     if prop is 'name' then,
     [action.payload.prop]: acion.payload.value  becomes name: action.payload.value
    */
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
