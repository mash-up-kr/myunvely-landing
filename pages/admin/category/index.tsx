import React, { useCallback, useState } from 'react';
import { Table, Button } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

import AdminLayout from 'components/AdminLayout';
import Category from 'models/Category';
import CategoryModifyModal from 'components/CategoryModifyModal';

const AdminCategoryListPage = () => {
	const [isModalShown, setIsModalShown] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<Category | undefined>(undefined);
	const [data] = useState(dataSource);

	const handleDelete = useCallback(
		(id: number) => () => {
			console.log(id);
			// TODO: DELETE
		},
		[dataSource],
	);

	const handleModify = useCallback((category: Category) => {
		console.log(category);
		// TODO: MODIFY
	}, []);

	const handleModalShow = useCallback(
		(id: number) => () => {
			setIsModalShown(true);
			setSelectedCategory(data.find(d => d.id === id));
		},
		[selectedCategory, data],
	);

	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
			width: 50,
		},
		{
			title: '용품명',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '평균 주기',
			dataIndex: 'averageCycle',
			key: 'averageCycle',
			width: 120,
		},
		{
			title: '수정',
			dataIndex: 'id',
			key: 'modify',
			width: 50,
			render: (id: number) => (
				<Button onClick={handleModalShow(id)} type="primary">
					<EditFilled />
				</Button>
			),
		},
		{
			title: '삭제',
			dataIndex: 'id',
			key: 'delete',
			width: 50,
			render: (id: number) => (
				<Button onClick={handleDelete(id)} danger>
					<DeleteFilled />
				</Button>
			),
		},
	];

	return (
		<AdminLayout>
			<Table dataSource={data} columns={columns} />
			{isModalShown && (
				<CategoryModifyModal
					visible={isModalShown}
					category={selectedCategory}
					onSubmit={handleModify}
					onClose={() => setIsModalShown(false)}
				/>
			)}
		</AdminLayout>
	);
};

export default AdminCategoryListPage;

const dataSource: Category[] = [
	{
		id: 1,
		name: 'Mike',
		averageCycle: 32,
	},
	{
		id: 2,
		name: 'John',
		averageCycle: 42,
	},
];
