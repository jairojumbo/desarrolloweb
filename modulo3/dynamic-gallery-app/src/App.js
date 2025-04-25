import React from 'react';
import { Layout, Row, Col, Image, Card } from 'antd';

// Componentes dinámicos
const HeaderComponent = () => (
  <div style={{ textAlign: 'center', fontSize: '24px', padding: '20px', color: 'white' }}>
    Galería de Imágenes
  </div>
);

const FooterComponent = () => (
  <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#001529', color: 'white' }}>
    © 2025 Galería de Imágenes
  </div>
);

const DefaultComponent = () => <div>Componente por defecto</div>;

const components = {
  header: HeaderComponent,
  footer: FooterComponent,
};

// Componente dinámico para elegir entre Header, Footer, o Default
function DynamicComponent({ type }) {
  const Component = components[type] || DefaultComponent;
  return <Component />;
}

// Datos de ejemplo de las imágenes (puedes sustituir con imágenes reales o rutas locales)
const images = [
  "./image.png",
  "./image.png",
  "./image.png",
  "./image.png",
  "./image.png",
  "./image.png",
  "./image.png",
  "./image.png",
  "./image.png",
  "./image.png",
];

const { Content } = Layout;

function App() {
  return (
    <Layout>
      {/* Header */}
      <Layout.Header style={{ backgroundColor: '#001529' }}>
        <DynamicComponent type="header" />
      </Layout.Header>

      {/* Content */}
      <Content style={{ padding: '50px' }}>
        <Row gutter={[16, 16]} justify="center">
          {images.map((image, index) => (
            <Col span={8} key={index}>
              <Card
                hoverable
                cover={<Image alt={`Imagen ${index + 1}`} src={image} />}
              >
                <Card.Meta title={`Imagen ${index + 1}`} />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      {/* Footer */}
      <Layout.Footer style={{ backgroundColor: '#001529' }}>
        <DynamicComponent type="footer" />
      </Layout.Footer>
    </Layout>
  );
}

export default App;
