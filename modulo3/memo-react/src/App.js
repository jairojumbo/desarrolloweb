import React, { useState } from 'react';
import { Button, Input, List, Card, Typography, Space } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import ExpensiveComponent from './ExpensiveComponent'

const { Title } = Typography;

function App() {
  // Estado para almacenar los elementos de la lista
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Función para agregar un nuevo elemento a la lista
  const addItem = () => {
    if (inputValue.trim() && !items.some(item => item.name === inputValue.trim())) {
      const newItem = { id: Date.now(), name: inputValue };
      setItems(prevItems => [...prevItems, newItem]);
      setInputValue('');
    } else {
      alert('El nombre ya existe en la lista');
    }
  };
  

  // Función para eliminar un elemento de la lista
  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card title="Agregar elementos a la lista" style={{ marginBottom: '20px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Escribe un nombre..."
            style={{ width: '80%' }}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={addItem}
            disabled={!inputValue.trim()}
          >
            Agregar
          </Button>
        </Space>
      </Card>

      <Title level={3}>Lista de Elementos</Title>

      {/* Renderizamos la lista con el componente ExpensiveComponent dentro de cada ítem */}
      <List
        bordered
        dataSource={items}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <Button 
                type="danger" 
                icon={<DeleteOutlined />} 
                onClick={() => removeItem(item.id)}
              >
                Eliminar
              </Button>
            ]}
          >
            <ExpensiveComponent data={[item]} /> {/* Renderizamos ExpensiveComponent dentro de la lista */}
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
