import React, { useContext, useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { AuthContext } from '../contexts/AuthContext';
import { loginUser } from '../api/authApi';
import RegisterForm from './RegisterForm';

function LoginForm() {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const [isRegistering, setIsRegistering] = useState(false); // Estado para mostrar registro

  const onFinish = async (values) => {
    try {
      const data = await loginUser(values.email, values.password);

      if (data.success) {
        login();
        localStorage.setItem('user', JSON.stringify(data.user));
        message.success('¡Inicio de sesión exitoso!');
      }
    } catch (error) {
      message.error(error.message || 'Correo o contraseña incorrectos');
    }
  };

  if (isAuthenticated) {
    return (
      <Card title="Bienvenido" style={{ width: 300, margin: 'auto', marginTop: 50, textAlign: 'center' }}>
        <p>Ya estás autenticado.</p>
        <Button danger onClick={logout}>Cerrar sesión</Button>
      </Card>
    );
  }

  if (isRegistering) {
    return <RegisterForm onBackToLogin={() => setIsRegistering(false)} />;
  }

  return (
    <Card title="Inicio de Sesión" style={{ width: 300, margin: 'auto', marginTop: 50 }}>
      <Form name="login" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Por favor ingrese su correo!' }]}
        >
          <Input placeholder="Correo" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}
        >
          <Input.Password placeholder="Contraseña" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Iniciar sesión
          </Button>
        </Form.Item>

        <Form.Item style={{ textAlign: 'center' }}>
          <Button type="link" onClick={() => setIsRegistering(true)}>
            ¿No tienes cuenta? Regístrate
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default LoginForm;
