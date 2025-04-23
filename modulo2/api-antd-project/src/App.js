import React, { Component } from 'react';
import { Table, Spin, message, Typography } from 'antd'; // Importamos los componentes necesarios de Ant Design
import TableColumns from './TableColumns'; // Importamos la configuración de las columnas

const { Title } = Typography;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true, // Indicador de carga
    };
    this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
  }

  // 1. Montaje: Se ejecuta una vez cuando el componente es montado
  componentDidMount() {
    this.fetchData();
  }

  // 2. Actualización: Se ejecuta cuando el componente se actualiza.
  componentDidUpdate(prevProps, prevState) {
    // Si el estado de los datos cambia, mostramos un mensaje de actualización
    if (prevState.data !== this.state.data) {
      message.success('Los datos se actualizaron correctamente');
    }
  }

  // 3. Desmontaje: Se ejecuta antes de que el componente sea desmontado
  componentWillUnmount() {
    // Aquí puedes limpiar cualquier recurso, como cancelar peticiones en curso.
    console.log('El componente se está desmontando');
  }

  // Función para obtener los datos de la API
  fetchData = () => {

    this.setState({ loading: true });

    fetch(this.apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ data, loading: false });
      })
      .catch(error => {
        message.error('Error al cargar los datos');
        this.setState({ loading: false });
      });
  };

  render() {
    const { data, loading } = this.state;

    const paginationConfig = {
      pageSize: 5,  // Establecer el número de elementos por página
      total: data.length,  // Establecer el número total de elementos (por ejemplo, la longitud de los datos)
    };

    return (
      <div style={{ padding: '20px' }}>
        <Title level={2}>
          Lista de Usuarios</Title>
          {/* Si los datos están cargando, mostramos un Spinner de Ant Design */}
        {loading ? (
          <Spin size="large" />
        ) :  (
          <Table pagination={paginationConfig} dataSource={data} columns={TableColumns} rowKey="id" />
        )}
      </div>
    );
  }
}

export default App;
