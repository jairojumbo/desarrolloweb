import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import ThemedComponent from './components/ThemedComponent';
import LoginForm from './components/LoginForm';
import { Layout, ConfigProvider } from 'antd';
import { theme as antdTheme } from 'antd';

const { Header, Content, Footer } = Layout;

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'light' ? antdTheme.defaultAlgorithm : antdTheme.darkAlgorithm,
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: '24px',
          background: theme === 'light' ? '#1890ff' : '#1f1f1f'
        }}>
          MyApp
        </Header>

        <Content style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: theme === 'light' ? '#fff' : '#141414',
          transition: 'all 0.3s'
        }}>
          <ThemedComponent />
          <LoginForm />
        </Content>

        <Footer style={{
          textAlign: 'center',
          background: theme === 'light' ? '#f0f2f5' : '#1f1f1f',
          color: theme === 'light' ? '#000' : '#aaa'
        }}>
          UTE ©2025 Created by Jairo Jumbo
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
