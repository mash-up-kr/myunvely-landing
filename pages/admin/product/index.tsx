import React from "react";
import { Table } from "antd";

import AdminLayout from "components/AdminLayout";

const AdminProductListPage = () => {
  return (
    <AdminLayout>
      <Table dataSource={dataSource} columns={columns} />
    </AdminLayout>
  );
};

export default AdminProductListPage;

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
