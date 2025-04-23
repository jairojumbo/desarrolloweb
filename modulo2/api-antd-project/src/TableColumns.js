const TableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Correo electrónico',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Ciudad',
      dataIndex: 'address',
      key: 'city',
      render: (address) => address.city, // Extraemos la ciudad del objeto de dirección
    },
  ];
  
  export default TableColumns;
  