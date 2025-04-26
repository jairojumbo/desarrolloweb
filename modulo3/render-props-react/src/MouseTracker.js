import React from 'react';

class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    this.setState({ x: event.clientX, y: event.clientY });
    console.log("x: ", event.clientX, " y: ", event.clientY);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          border: '2px solid #1890ff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)} {/* Usamos el Render Props */}
      </div>
    );
  }
}

export default MouseTracker;
