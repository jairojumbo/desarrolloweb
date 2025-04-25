import React, { useState } from 'react';
import {  Button, ConfigProvider, Layout, Switch, Form, Input, theme, Select, DatePicker, Checkbox } from 'antd';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import './App.css';

const { Header, Content } = Layout;

function App() {

  const getInitTheme = () => {
    const savedtheme = localStorage.getItem('theme');
    return savedtheme ? savedtheme === 'dark' : true;
  }

  const [isDarkMode, setIsDarkMode] = useState(getInitTheme);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const newtheme = !isDarkMode ? 'dark' : 'ligth';
    localStorage.setItem('theme', newtheme);
  };

  return (
    <>
      <ConfigProvider
          theme={{
            algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
          }}
      >

          <Layout style={{ height: '100vh', padding: 20, 
            background: isDarkMode ? '#000' : '#FFF' }}>

            <Header style={{
                    textAlign: 'center',
                    background: isDarkMode ? '#000' : '#FFF',
                    color: isDarkMode ? '#FFF' : '#000',
                    padding: '1rem 0',
                    marginBottom: 10
                }}>
              <h2>Formulario de Datos</h2>
            </Header>
            <Content style={{
                  background:  isDarkMode ? '#000' : '#FFF',
                }}>
                <LightModeOutlinedIcon fontSize='small'/>
                <Switch checked={isDarkMode} onChange={toggleTheme}/>
                <DarkModeOutlinedIcon fontSize='small'/>

                <Button type='primary' style={{marginBottom: 20, marginLeft: 20}} onClick={toggleTheme}>
                  Cambiar a tema { isDarkMode ? 'claro' : 'oscuro' }
                </Button>

                <Form 
                  >
                  <Form.Item 
                    label="Nombre"
                    name="name"
                    rules={[{ required: true, message: 'Por favor ingresa tu nombre'}]}>
                      <Input />
                  </Form.Item>

                  <Form.Item
                    label="Correo"
                    name="correo"
                    rules={[{ required: true, message: 'Por favor ingresa un correo'}]}>
                      <Input />
                  </Form.Item>

                  <Form.Item
                    label="Genero"
                    name="genero"
                    rules={[{ required: true, message: 'Por favor seleccione su genero'}]}>
                    <Select placeholder="Seleccione su genero">
                      <Select.Option value="masculino">Masculino</Select.Option>
                      <Select.Option value="femenino">Femenino</Select.Option>
                      <Select.Option value="otro">Otros</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Fecha de Nacimiento"
                    name="fechanac"
                    rules={[{ required: true, message: 'Por favor ingrese su fecha de nacimiento'}]}>
                      <DatePicker />
                  </Form.Item>

                  <Form.Item
                    name="terminos"
                    valuePropName='checked'
                    rules={[{ required: true, message: 'Debe aceptar los terminos y condiciones'}]}>
                      <Checkbox>
                        Aceptar términos y condiciones
                      </Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button type='primary' htmlType='submit'>
                      Enviar
                    </Button>
                  </Form.Item>

                </Form>

                
                

            </Content>

          </Layout>

      </ConfigProvider>
    </>
  );
}

export default App;
