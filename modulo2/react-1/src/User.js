import React from 'react';
import { Card } from 'antd';

const User = ({ name }) => {
  return (
    <Card className="user-card" style={{ marginBottom: '10px' }} hoverable>
      <h2>{name}</h2>
    </Card>
  );
};

export default User;
