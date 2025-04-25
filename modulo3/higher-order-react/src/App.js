import React from 'react';
import { Layout } from 'antd';
import UserProfile from './UserProfile';
import withLogging from './withLogging';

const { Header, Content } = Layout;

// Envolvemos UserProfile con el HOC
const UserProfileWithLogging = withLogging(UserProfile);

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: 'white', textAlign: 'center', fontSize: '24px' }}>
        Mi Aplicación de Usuario
      </Header>
      <Content style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <div>
          <UserProfileWithLogging name="Juan Pérez" age={30} />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
