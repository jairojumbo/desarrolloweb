import React from 'react';
import { Alert } from 'antd';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para renderizar la interfaz de "Error"
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio de reportes si es necesario
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px' }}>
          <Alert
            message="Error"
            description={`Algo salió mal: ${this.state.error.message}`}
            type="error"
            showIcon
          />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
