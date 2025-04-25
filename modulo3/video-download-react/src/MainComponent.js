import React, { Suspense, lazy, useState } from 'react';
import { Button, Progress, Spin } from 'antd';

// Carga diferida de HeavyComponent
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function MainComponent() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showHeavy, setShowHeavy] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setProgress(0);

    // Simular progreso de descarga
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          setShowHeavy(true);
          return 100;
        }
        return prev + 10; // Incrementa de 10 en 10
      });
    }, 300);
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Descarga de Video - Docker</h1>

      {!isDownloading && !showHeavy && (
        <Button type="primary" onClick={handleDownload}>
          Descargar Video
        </Button>
      )}

      {isDownloading && (
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <p>Descargando video...</p>
          <Progress type="circle" percent={progress} width={120} />
        </div>
      )}

      {showHeavy && (
        <Suspense fallback={<Spin tip="Cargando video..." size="large" />}>
          <div style={{ marginTop: 24 }}>
            <HeavyComponent />
          </div>
        </Suspense>
      )}
    </div>
  );
}

export default MainComponent;
