import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const incrementar = () => setCount( count + 1 );
  const decrementar = () => setCount( count - 1 );

  useEffect(() => {
      document.title = `Has hecho clic ${count} veces`;
  } , [count]);

  const handleClick = () => {
    alert('!Boton preciosado!');
  };
  
  return (
    <div className="App">
      <h1> Contador {count} </h1>
      <Button 
        type='primary'
        onClick={incrementar}
        style={{ marginRight: '10px' }}>Incrementar</Button>
      <Button type='primary' onClick={decrementar} style={{ marginRight: '10px' }}>Decrementar</Button>

      <Button type='primary' onClick={handleClick} > Presiona Aquí </Button>
    </div>
  );
}

export default App; 
