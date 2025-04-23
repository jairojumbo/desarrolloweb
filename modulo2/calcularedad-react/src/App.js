import React, { useState } from 'react';
import { DatePicker, Button, Input, Form, message } from 'antd';  // Importar componentes de Ant Design

function App() {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [edad, setEdad] = useState('');

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDateChange = (date, dateString) => {
    setFechaNacimiento(dateString);
  };

  const calcularEdad = (fechaNacimiento) => {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

    let años = hoy.getFullYear() - nacimiento.getFullYear();
    let meses = hoy.getMonth() - nacimiento.getMonth();
    let días = hoy.getDate() - nacimiento.getDate();

    if (meses < 0) {
      años--;
      meses += 12;
    }

    if (días < 0) {
      meses--;
      const ultimoMes = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
      días += ultimoMes.getDate();
    }

    return `${años} años, ${meses} meses, ${días} días`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nombre || !fechaNacimiento) {
      message.error("Por favor, ingrese todos los campos.");
    } else {
      const edadCalculada = calcularEdad(fechaNacimiento);
      setEdad(edadCalculada);
      alert(`El nombre ingresado es: ${nombre}\nFecha de nacimiento: ${fechaNacimiento}\nEdad: ${edadCalculada}`);
    }
  };

  return (
    <div style={{ padding: '50px' }}>
      <Form onSubmitCapture={handleSubmit} layout="vertical">
        <Form.Item label="Nombre" required>
          <Input 
            type="text" 
            value={nombre} 
            onChange={handleChange} 
            placeholder="Ingrese su nombre"
          />
        </Form.Item>

        <Form.Item label="Fecha de nacimiento" required>
          <DatePicker 
            onChange={handleDateChange} 
            style={{ width: '100%' }} 
            placeholder="Seleccione su fecha de nacimiento" 
          />
        </Form.Item>

        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            style={{ width: '100%' }}
          >
            Enviar
          </Button>
        </Form.Item>

        {edad && (
          <div style={{ marginTop: '20px', fontSize: '16px', fontWeight: 'bold' }}>
            Edad: {edad}
          </div>
        )}
      </Form>
    </div>
  );
}

export default App;
