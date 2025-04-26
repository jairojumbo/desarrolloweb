import React, { useReducer } from 'react';
import { Button, Card, Space, Typography } from 'antd';

const { Title } = Typography;

// Estado inicial
const initialState = { count: 0 };

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unknown action');
  }
}

// Componente principal
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Card
      style={{ width: 300, margin: 'auto', marginTop: 50, textAlign: 'center' }}
    >
      <Title level={2}>Contador</Title>
      <Title level={3}>{state.count}</Title>
      <Space>
        <Button type="primary" onClick={() => dispatch({ type: 'increment' })}>
          Incrementar
        </Button>
        <Button danger onClick={() => dispatch({ type: 'decrement' })}>
          Decrementar
        </Button>
      </Space>
    </Card>
  );
}

export default App;
