import React, { useState, useCallback } from 'react';
import { Table, Button } from 'antd';
import styled from '@emotion/styled';

import AdminLayout from 'components/AdminLayout';
import Product from 'models/Product';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import ProductModifyModal from 'components/ProductModifyModal';

const AdminProductListPage = () => {
	const [isModalShown, setIsModalShown] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined);
	const [data] = useState(dataSource);

	const handleDelete = useCallback(
		(id: number) => () => {
			console.log(id);
			// TODO: DELETE
		},
		[dataSource],
	);

	const handleModify = useCallback((product: Product) => {
		console.log(product);
		// TODO: MODIFY
	}, []);

	const handleModalShow = useCallback(
		(id: number) => () => {
			setIsModalShown(true);
			setSelectedProduct(data.find(d => d.id === id));
		},
		[selectedProduct, data],
	);

	const columns = [
		{
			title: '이미지',
			dataIndex: 'imageUrl',
			key: 'imageUrl',
			width: 200,
			render: (imageUrl: string) => <ProductImage alt={imageUrl} src={imageUrl} />,
		},
		{
			title: '카테고리',
			dataIndex: 'category',
			key: 'category',
			width: 150,
		},
		{
			title: '제품명',
			dataIndex: 'name',
			key: 'name',
			width: 200,
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
			width: 60,
		},
		{
			title: '가격',
			dataIndex: 'price',
			key: 'price',
			width: 100,
			render: (price: number) => price.toLocaleString(),
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
			<Table dataSource={dataSource} columns={columns} />
			{isModalShown && (
				<ProductModifyModal
					visible={isModalShown}
					product={selectedProduct}
					onSubmit={handleModify}
					onClose={() => setIsModalShown(false)}
				/>
			)}
		</AdminLayout>
	);
};

export default AdminProductListPage;

const dataSource: Product[] = [
	{
		id: 1,
		category: '면도기',
		name: '면도기01',
		description: '짱짱 좋은 면도기',
		cycle: 40,
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Maquinilla_de_afeitar_desechable.JPG/250px-Maquinilla_de_afeitar_desechable.JPG',
		price: 1500,
	},
	{
		id: 2,
		category: '면도기',
		name: '면도기01',
		description: '짱짱 좋은 면도기',
		cycle: 40,
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Maquinilla_de_afeitar_desechable.JPG/250px-Maquinilla_de_afeitar_desechable.JPG',
		price: 1500,
	},
	{
		id: 3,
		category: '면도기',
		name: '면도기01',
		description: '짱짱 좋은 면도기',
		cycle: 40,
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Maquinilla_de_afeitar_desechable.JPG/250px-Maquinilla_de_afeitar_desechable.JPG',
		price: 1500,
	},
	{
		id: 4,
		category: '면도기',
		name: '면도기01',
		description: '짱짱 좋은 면도기',
		cycle: 40,
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Maquinilla_de_afeitar_desechable.JPG/250px-Maquinilla_de_afeitar_desechable.JPG',
		price: 1500,
	},
];

const ProductImage = styled.img`
	width: 100%;
`;
