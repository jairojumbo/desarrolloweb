import React from 'react';
import { Card, Typography } from 'antd';

// Desestructuramos props
const { Title, Paragraph } = Typography;

function UserProfile({ name, age }) {
  return (
    <Card
      style={{ width: 300, margin: 'auto', marginTop: '20px' }}
      title="Perfil del Usuario"
      hoverable
    >
      <Typography>
        <Title level={4}>{name}</Title>
        <Paragraph>Edad: {age}</Paragraph>
      </Typography>
    </Card>
  );
}

export default UserProfile;
