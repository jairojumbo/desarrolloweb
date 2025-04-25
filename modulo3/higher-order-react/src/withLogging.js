import React from 'react';

function withLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Componente ${WrappedComponent.name} montado`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withLogging;
