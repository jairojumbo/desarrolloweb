import React, { Suspense } from 'react';

// Cargar LazyImage de manera diferida
const LazyImage = React.lazy(() => import('./LazyImage'));

const App = () => {
  const imageUrls = [
    './paisaje.jpg',
    './paisaje.jpg',
    './paisaje.jpg',
    './paisaje.jpg',
    './paisaje.jpg',
    './paisaje.jpg',
    './paisaje.jpg',
    './paisaje.jpg',
    './paisaje.jpg',
    './paisaje.jpg',
    './paisaje.jpg',
  ];

  return (
    <div style={{ padding: '20px', height: '200vh' }}>
      <h1>Cargar las imágenes...</h1>

      {/* React Suspense para manejar el estado de carga de los componentes perezosos */}S
      <Suspense fallback={<div>Cargando...</div>}>
        {imageUrls.map((src, index) =>
          React.createElement(
            'div',
            { key: index, style: { marginBottom: '20px' } },
            React.createElement(LazyImage, {
              src: src,
              alt: 'Imagen ' + (index + 1),
              style: { width: '50%', height: 'auto' },
            })
          )
        )}
      </Suspense>
    </div>
  );
};

export default App;
