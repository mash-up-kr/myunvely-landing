import React from 'react';
import { Table } from 'antd';

import AdminLayout from 'components/AdminLayout';

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
		key: '1',
		category: '면도기',
		name: '면도기01',
		description: '짱짱 좋은 면도기',
		cycle: 40,
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Maquinilla_de_afeitar_desechable.JPG/250px-Maquinilla_de_afeitar_desechable.JPG',
		pirce: 1500,
	},
	{
		key: '2',
		category: '면도기',
		name: '면도기01',
		description: '짱짱 좋은 면도기',
		cycle: 40,
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Maquinilla_de_afeitar_desechable.JPG/250px-Maquinilla_de_afeitar_desechable.JPG',
		pirce: 1500,
	},
	{
		key: '3',
		category: '면도기',
		name: '면도기01',
		description: '짱짱 좋은 면도기',
		cycle: 40,
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Maquinilla_de_afeitar_desechable.JPG/250px-Maquinilla_de_afeitar_desechable.JPG',
		pirce: 1500,
	},
	{
		key: '4',
		category: '면도기',
		name: '면도기01',
		description: '짱짱 좋은 면도기',
		cycle: 40,
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Maquinilla_de_afeitar_desechable.JPG/250px-Maquinilla_de_afeitar_desechable.JPG',
		pirce: 1500,
	},
];

const columns = [
	{
		title: '이미지',
		dataIndex: 'imageUrl',
		key: 'imageUrl',
		render: (imageUrl: string) => <img alt={imageUrl} src={imageUrl} />,
	},
	{
		title: '카테고리',
		dataIndex: 'category',
		key: 'category',
	},
	{
		title: '제품명',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: '설명',
		dataIndex: 'description',
		key: 'description',
	},
	{
		title: '주기',
		dataIndex: 'cycle',
		key: 'cycle',
	},
	{
		title: '가격',
		dataIndex: 'pirce',
		key: 'pirce',
	},
];
