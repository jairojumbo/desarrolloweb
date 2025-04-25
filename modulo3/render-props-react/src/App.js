import React from 'react';
import { Card, Typography, Layout, Row, Col } from 'antd';
import MouseTracker from './MouseTracker';

const { Title } = Typography;
const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: 'white', fontSize: '24px', textAlign: 'center' }}>
        Seguimiento del Ratón
      </Header>
      <Content style={{ padding: '20px' }}>
        <Row justify="center">
          <Col span={12}>
            <Card
              title="Coordenadas del Ratón"
              bordered={false}
              style={{
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <MouseTracker
                render={({ x, y }) => (
                  <div>
                    <Title level={4}>El ratón está en:</Title>
                    <p>
                      <strong>X:</strong> {x} <br />
                      <strong>Y:</strong> {y}
                    </p>
                  </div>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
