import React, { useCallback, useState } from 'react';
import { Table, Button } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

import AdminLayout from 'components/AdminLayout';
import Faq from 'models/Faq';
import FaqModifyModal from 'components/FaqModifyModal';

const AdminFaqListPage = () => {
	const [isModalShown, setIsModalShown] = useState(false);
	const [selectedFaq, setSelectedFaq] = useState<Faq | undefined>(undefined);
	const [data] = useState(dataSource);

	const handleDelete = useCallback(
		(id: number) => () => {
			console.log(id);
			// TODO: DELETE
		},
		[dataSource],
	);

	const handleModify = useCallback((faq: Faq) => {
		console.log(faq);
		// TODO: MODIFY
	}, []);

	const handleModalShow = useCallback(
		(id: number) => () => {
			setIsModalShown(true);
			setSelectedFaq(data.find(d => d.id === id));
		},
		[selectedFaq, data],
	);

	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
			width: 50,
		},
		{
			title: '제목',
			dataIndex: 'title',
			key: 'title',
			width: 400,
		},
		{
			title: '내용',
			dataIndex: 'description',
			key: 'description',
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
				<FaqModifyModal
					visible={isModalShown}
					faq={selectedFaq}
					onSubmit={handleModify}
					onClose={() => setIsModalShown(false)}
				/>
			)}
		</AdminLayout>
	);
};

export default AdminFaqListPage;

const dataSource: Faq[] = [
	{
		id: 1,
		title: '제목1',
		description: '설명1',
	},
	{
		id: 2,
		title: '제목2',
		description: '설명2',
	},
];
