import React, { useState, createContext } from 'react';
import { Button, Select, Form, Input, Layout } from 'antd';

const { Header, Content, Footer } = Layout;

// Contexto para el tema
const ThemeContext = createContext('light');

// Tema en objetos de estilo
const themes = {
  light: {
    background: '#fff',
    color: '#000',
    buttonBg: '#1890ff',
    buttonColor: '#fff',
    formItemLabelColor: '#000', // Color de las etiquetas (label) en tema light
    inputTextColor: '#000', // Color del texto en los inputs para el tema light
  },
  dark: {
    background: '#000',
    color: '#fff',
    buttonBg: '#fff',
    buttonColor: '#000',
    formItemLabelColor: '#fff', // Color de las etiquetas (label) en tema dark
    inputTextColor: '#fff', // Color del texto en los inputs para el tema dark
  },
  blue: {
    background: '#e6f7ff',
    color: '#1890ff',
    buttonBg: '#1890ff',
    buttonColor: '#fff',
    formItemLabelColor: '#1890ff', // Color de las etiquetas (label) en tema blue
    inputTextColor: '#1890ff', // Color del texto en los inputs para el tema blue
  },
};

function App() {
  const [theme, setTheme] = useState('light');

  const handleChangeTheme = (value) => {
    setTheme(value);
  };

  const currentTheme = themes[theme];

  return (
    <ThemeContext.Provider value={theme}>
      <Layout style={{ minHeight: '100vh', backgroundColor: currentTheme.background }}>
        <Header style={{ padding: 0, backgroundColor: currentTheme.background }}>
          <div style={{ padding: '16px' }}>
            <Select defaultValue="light" style={{ width: 120 }} onChange={handleChangeTheme}>
              <Select.Option value="light">Light</Select.Option>
              <Select.Option value="dark">Dark</Select.Option>
              <Select.Option value="blue">Blue</Select.Option>
            </Select>
          </div>
        </Header>

        <Content style={{ padding: '20px', backgroundColor: currentTheme.background }}>
          <div style={{ maxWidth: 600, margin: '0 auto', color: currentTheme.color }}>
            <Form>
              <Form.Item
                label="Nombre"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                style={{ color: currentTheme.formItemLabelColor }} // Cambiamos el color de la etiqueta
              >
                <Input
                  placeholder="Escribe tu nombre"
                  style={{
                    color: currentTheme.inputTextColor,
                    backgroundColor: currentTheme.background,
                  }}
                />
              </Form.Item>
              <Form.Item
                label="Correo"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                style={{ color: currentTheme.formItemLabelColor }} // Cambiamos el color de la etiqueta
              >
                <Input
                  placeholder="Escribe tu correo"
                  style={{
                    color: currentTheme.inputTextColor,
                    backgroundColor: currentTheme.background,
                  }}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 18, offset: 6 }}>
                <Button
                  type="primary"
                  block
                  style={{
                    backgroundColor: currentTheme.buttonBg,
                    color: currentTheme.buttonColor,
                    borderColor: currentTheme.buttonBg,
                  }}
                >
                  Enviar
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center', backgroundColor: currentTheme.background }}>
          Aplicación con tema {theme}
        </Footer>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
