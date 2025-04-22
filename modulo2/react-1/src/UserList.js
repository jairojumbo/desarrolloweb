import React from 'react';
import { List } from 'antd';
import User from './User';

const UserList = ({ users }) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={users}
      renderItem={(user) => (
        <List.Item>
          <User name={user} />
        </List.Item>
      )}
    />
  );
};

export default UserList;
