// src/components/UserTable.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Spin, message, Typography } from 'antd';
import { fetchUsers } from '../redux/actions/userActions';
import TableColumns from '../columns/TableColumns';

const { Title } = Typography;

const UserTable = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) message.error(error);
    else if (data.length > 0) message.success('Datos cargados con éxito');
  }, [data, error]);

  const paginationConfig = {
    pageSize: 5,
    total: data.length,
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Lista de Usuarios</Title>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Table dataSource={data} columns={TableColumns} pagination={paginationConfig} rowKey="id" />
      )}
    </div>
  );
};

export default UserTable;
