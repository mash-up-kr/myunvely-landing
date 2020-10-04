import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import User from 'models/User';
import AdminLayout from 'components/AdminLayout';
import fetchApi from 'utils/fetchApi';

const AdminIndexPage = () => {
	const [users, setUsers] = useState();

	useEffect(() => {
		const callingService = async () => {
			const res = await fetchApi('admin/users');
			setUsers(
				res.map((user: User) => {
					return { key: user.id, ...user };
				}),
			);
		};
		callingService();
	}, []);

	return (
		<AdminLayout>
			<Table dataSource={users} columns={columns} />
		</AdminLayout>
	);
};

export default AdminIndexPage;

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Email',
		dataIndex: 'email',
		key: 'email',
	},
	{
		title: 'Role',
		dataIndex: 'role',
		key: 'role',
	},
];
