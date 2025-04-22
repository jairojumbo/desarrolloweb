import React from 'react';
import { DatePicker, Button, Layout, Typography } from 'antd';

import UserList from './UserList';

const { Title } = Typography;

function App(props) {

  const users = ['Ana', 'Carlos', 'Marta', 'Luis', 'Jairo'];

  return (
    <>
      <div>
        <h2>Nombre: {props.nombre}</h2>
      </div>
      <div>
        <h2>Apellido: {props.apellido}</h2>
      </div>
      <div>
        <DatePicker />
      </div>
      <div>
        <Button type="primary">Aceptar</Button>
        <Button type="primary">Aceptar</Button>
        <Button type="primary">Aceptar</Button>
        <Button type="primary">Aceptar</Button>
        <Button type="primary">Aceptar</Button>
      </div>

      <Layout style={{ padding: '10px' }}>
        <Title level={1}>Lista de Usuarios</Title>
        <UserList users={users}/>
      </Layout>

    </>
  );
}

export default App;
