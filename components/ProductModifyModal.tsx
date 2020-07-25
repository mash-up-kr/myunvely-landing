import React, { useCallback } from 'react';
import Product from 'models/Product';
import { Modal, Input, Form, InputNumber, notification } from 'antd';

interface ProductModifyModalProps {
	visible: boolean;
	product?: Product;
	onSubmit: (category: Product) => void;
	onClose: () => void;
}

const ProductModifyModal = (props: ProductModifyModalProps) => {
	const { visible, product, onSubmit, onClose } = props;
	const [form] = Form.useForm();

	const handleOk = useCallback(() => {
		form
			.validateFields()
			.then(values => {
				form.resetFields();
				onSubmit(values as Product);
				onClose();
			})
			.catch(() => {
				notification.open({
					message: '오류 발생',
					description: '값을 확인해주세요.',
				});
			});
	}, []);

	return (
		<Modal
			title={`제품 수정 - ${product?.name}`}
			visible={visible}
			onOk={handleOk}
			onCancel={onClose}
		>
			<Form form={form} initialValues={product} layout="vertical">
				<Form.Item hidden name="id" />
				<Form.Item
					name="imageUrl"
					label="이미지"
					rules={[{ required: true, message: '필수값입니다.' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="category"
					label="카테고리"
					rules={[{ required: true, message: '필수값입니다.' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="name"
					label="용품명"
					rules={[{ required: true, message: '필수값입니다.' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="description"
					label="설명"
					rules={[{ required: true, message: '필수값입니다.' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item name="cycle" label="주기" rules={[{ required: true, message: '필수값입니다.' }]}>
					<InputNumber />
				</Form.Item>
				<Form.Item name="price" label="가격" rules={[{ required: true, message: '필수값입니다.' }]}>
					<InputNumber />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default ProductModifyModal;
