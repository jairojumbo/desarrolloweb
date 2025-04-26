// App.js
import React from 'react';
import { Form, Input, Button } from 'antd';
import { useRef } from 'react';

function App() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const focusNameInput = () => {
    nameInputRef.current.focus();
  };

  const focusEmailInput = () => {
    emailInputRef.current.focus();
  };

  const onFinish = (values) => {
    console.log('Formulario enviado:', values);
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', padding: 20 }}>
      <h2 style={{ textAlign: 'center' }}>Mi App</h2>

      <Form
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item 
          label="Nombre" 
          name="nombre" 
          rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
        >
          <Input ref={nameInputRef} placeholder="Ingresa tu nombre" />
        </Form.Item>

        <Form.Item 
          label="Correo electrónico" 
          name="correo" 
          rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}
        >
          <Input ref={emailInputRef} placeholder="Ingresa tu correo" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Iniciar Sesión
          </Button>
        </Form.Item>
      </Form>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
        <Button onClick={focusNameInput}>Enfocar Nombre</Button>
        <Button onClick={focusEmailInput}>Enfocar Correo</Button>
      </div>
    </div>
  );
}

export default App;
