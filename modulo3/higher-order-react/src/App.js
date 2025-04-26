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
          <UserProfileWithLogging name="Juan Pérez 1" age={30} />
          <UserProfileWithLogging name="Juan Pérez 2" age={25} />
          <UserProfileWithLogging name="Juan Pérez 3" age={20} />
          <UserProfileWithLogging name="Juan Pérez 4" age={15} />
          <UserProfileWithLogging name="Juan Pérez 5" age={18} />
          <UserProfileWithLogging name="Juan Pérez 6" age={24} />
          <UserProfileWithLogging name="Juan Pérez 7" age={22} />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
