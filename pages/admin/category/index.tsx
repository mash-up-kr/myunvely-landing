import React, { useCallback } from "react";
import { Table, Button } from "antd";

import AdminLayout from "components/AdminLayout";
import Category from "models/Category";

const AdminCategoryListPage = () => {
  const handleDelete = useCallback(
    (id: number) => () => {
      console.log(id);
      // TODO: DELETE
    },
    [],
  );

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 50,
    },
    {
      title: "용품명",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "평균 주기",
      dataIndex: "averageCycle",
      key: "averageCycle",
      width: 120,
    },
    {
      title: "삭제",
      dataIndex: "id",
      key: "delete",
      width: 100,
      render: (id: number) => (
        <Button onClick={handleDelete(id)} danger>
          삭제
        </Button>
      ),
    },
  ];

  return (
    <AdminLayout>
      <Table dataSource={dataSource} columns={columns} />
    </AdminLayout>
  );
};

export default AdminCategoryListPage;

const dataSource: Category[] = [
  {
    id: 1,
    name: "Mike",
    averageCycle: 32,
  },
  {
    id: 2,
    name: "John",
    averageCycle: 42,
  },
];
