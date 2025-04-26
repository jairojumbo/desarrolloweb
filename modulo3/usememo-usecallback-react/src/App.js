import React, { useState, useMemo, useCallback } from 'react';
import { Button, InputNumber, List, Typography } from 'antd';

const { Title } = Typography;

function App() {
  const [numbers, setNumbers] = useState([]);
  const [threshold, setThreshold] = useState(0);

  // useCallback para memorizar la función de agregar números
  const addRandomNumber = useCallback(() => {
    const newNumber = Math.floor(Math.random() * 100);
    setNumbers(prev => [...prev, newNumber]);
  }, []);

  // useMemo para memorizar los números que cumplen una condición
  const filteredNumbers = useMemo(() => {
    console.log('Filtrando números...'); // Para ver cuándo se recalcula
    return numbers.filter(num => num >= threshold);
  }, [numbers, threshold]);

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>Lista de Números Aleatorios</Title>

      <Button type="primary" onClick={addRandomNumber}>
        Agregar Número Aleatorio
      </Button>

      <div style={{ marginTop: 16 }}>
        <InputNumber
          min={0}
          max={100}
          value={threshold}
          onChange={setThreshold}
          placeholder="Filtrar mayor o igual que..."
          style={{ width: '100%' }}
        />
      </div>

      <List
        header={<div>Números filtrados (≥ {threshold})</div>}
        bordered
        dataSource={filteredNumbers}
        renderItem={item => (
          <List.Item>
            {item}
          </List.Item>
        )}
        style={{ marginTop: 24 }}
      />
    </div>
  );
}

export default App;
