import { createStore } from 'redux';

// Definir el estado inicial
const initialState = {
  nombre: '',
  fechaNacimiento: null,
  edad: ''
};

// Definir las acciones
const SET_NOMBRE = 'SET_NOMBRE';
const SET_FECHA_NACIMIENTO = 'SET_FECHA_NACIMIENTO';
const SET_EDAD = 'SET_EDAD';

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOMBRE:
      return {
        ...state,
        nombre: action.payload
      };
    case SET_FECHA_NACIMIENTO:
      return {
        ...state,
        fechaNacimiento: action.payload
      };
    case SET_EDAD:
      return {
        ...state,
        edad: action.payload
      };
    default:
      return state;
  }
};

// Crear el store
const store = createStore(reducer);

// Acciones
export const setNombre = (nombre) => ({
  type: SET_NOMBRE,
  payload: nombre
});

export const setFechaNacimiento = (fechaNacimiento) => ({
  type: SET_FECHA_NACIMIENTO,
  payload: fechaNacimiento
});

export const setEdad = (edad) => ({
  type: SET_EDAD,
  payload: edad
});

// Exportar el store por defecto
export default store;
