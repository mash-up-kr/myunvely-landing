import React, { useCallback } from 'react';
import Category from 'models/Category';
import { Modal, Input, Form, InputNumber, notification } from 'antd';

interface CategoryModifyModalProps {
	visible: boolean;
	category?: Category;
	onSubmit: (category: Category) => void;
	onClose: () => void;
}

const CategoryModifyModal = (props: CategoryModifyModalProps) => {
	const { visible, category, onSubmit, onClose } = props;
	const [form] = Form.useForm();

	const handleOk = useCallback(() => {
		form
			.validateFields()
			.then(values => {
				form.resetFields();
				onSubmit(values as Category);
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
			title={`카테고리 수정 - ${category?.name}`}
			visible={visible}
			onOk={handleOk}
			onCancel={onClose}
		>
			<Form form={form} initialValues={category} layout="vertical">
				<Form.Item hidden name="id" />
				<Form.Item
					name="name"
					label="용품명"
					rules={[{ required: true, message: '필수값입니다.' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="averageCycle"
					label="평균 주기"
					rules={[{ required: true, message: '필수값입니다.' }]}
				>
					<InputNumber />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default CategoryModifyModal;
