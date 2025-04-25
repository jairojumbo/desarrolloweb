import React from 'react';
import { Card } from 'antd';

export default function HeavyComponent() {
  return (
    <Card title="Video Descargado - Docker" style={{ width: 600, margin: 'auto' }}>
      <video width="100%" autoPlay loop muted controls>
        <source src="/docker.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
    </Card>
  );
}
