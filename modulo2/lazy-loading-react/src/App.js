// App.jsx
import React from 'react';
import LazyImage from './LazyImage';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <p>Haz scroll hacia abajo para cargar las imágenes...</p>
      <div style={{ height: '1000px' }}></div>

      <LazyImage src="https://via.placeholder.com/400x300?text=Imagen+1" alt="Imagen 1" />
      <LazyImage src="https://via.placeholder.com/400x300?text=Imagen+2" alt="Imagen 2" />
      <LazyImage src="https://via.placeholder.com/400x300?text=Imagen+3" alt="Imagen 3" />
    </div>
  );
};

export default App;
