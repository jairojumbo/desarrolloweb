import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambiar la importación
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

// Obtener el contenedor raíz
const root = ReactDOM.createRoot(document.getElementById('root'));

// Usar createRoot para renderizar la aplicación
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
