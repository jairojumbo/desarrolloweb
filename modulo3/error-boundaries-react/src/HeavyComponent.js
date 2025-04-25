import React, { useState, useEffect } from 'react';
import { Card, Spin, Alert } from 'antd';

export default function HeavyComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const videoUrl = '/docker.mp4'; // Ruta al video
    const fetchVideo = async () => {
      try {
        const response = await fetch(videoUrl);
        if (!response.ok) {
          throw new Error('Error al descargar el video');
        }
        const videoBlob = await response.blob();
        const videoObjectUrl = URL.createObjectURL(videoBlob);
        setVideoUrl(videoObjectUrl);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchVideo();
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <Spin tip="Descargando video..." size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="Error"
        description={`No se pudo descargar el video: ${error}`}
        type="error"
        showIcon
      />
    );
  }

  return (
    <Card title="Video Descargado" bordered={false} style={{ width: 600, margin: 'auto' }}>
      <video width="100%" autoPlay loop muted controls>
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
    </Card>
  );
}
