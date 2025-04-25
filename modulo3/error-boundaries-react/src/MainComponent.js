import React, { Suspense, lazy } from 'react';
import { Layout, Button, Spin } from 'antd';
import ErrorBoundary from './ErrorBoundary';

// Carga diferida del HeavyComponent (simulación de descarga de video)
const HeavyComponent = lazy(() => import('./HeavyComponent'));

const { Header, Content } = Layout;

function MainComponent() {
  // Función que activa la descarga del video
  const handleDownload = () => {
    // Crear un enlace invisible para hacer la descarga
    const link = document.createElement('a');
    link.href = '/docker.mp4'; // Ruta al video en la carpeta 'public'
    link.download = 'docker.mp4'; // Nombre del archivo que se descargará
    link.click(); // Simula un clic para iniciar la descarga
  };

  return (
    <Layout>
      <Header style={{ color: 'white', fontSize: '24px' }}>Simulador de Descarga de Video</Header>
      <Content style={{ padding: '20px' }}>
        <Button type="primary" onClick={handleDownload}>
          Descargar Video
        </Button>

        <ErrorBoundary>
          <Suspense fallback={<Spin tip="Cargando..." size="large" />}>
            <HeavyComponent />
          </Suspense>
        </ErrorBoundary>
      </Content>
    </Layout>
  );
}

export default MainComponent;
