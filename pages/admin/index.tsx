import React, { useEffect, useState } from "react";
import { Table } from "antd";

import AdminLayout from "components/AdminLayout";
import fetchApi from "utils/fetchApi";

const AdminIndexPage = () => {
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    const callingService = async () => {
      const res = await fetchApi("https://pokeapi.co/api/v2/pokemon/ditto");

      setResult(res);
    };
    callingService();
  }, []);

  return (
    <AdminLayout>
      <Table dataSource={dataSource} columns={columns} />
    </AdminLayout>
  );
};

export default AdminIndexPage;

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
