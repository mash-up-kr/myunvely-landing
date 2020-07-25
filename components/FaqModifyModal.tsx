import React, { useCallback } from 'react';
import Faq from 'models/Faq';
import { Modal, Input, Form, notification } from 'antd';

interface FaqModifyModalProps {
	visible: boolean;
	faq?: Faq;
	onSubmit: (faq: Faq) => void;
	onClose: () => void;
}

const FaqModifyModal = (props: FaqModifyModalProps) => {
	const { visible, faq, onSubmit, onClose } = props;
	const [form] = Form.useForm();

	const handleOk = useCallback(() => {
		form
			.validateFields()
			.then(values => {
				form.resetFields();
				onSubmit(values as Faq);
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
		<Modal title={`FAQ 수정 - ${faq?.title}`} visible={visible} onOk={handleOk} onCancel={onClose}>
			<Form form={form} initialValues={faq} layout="vertical">
				<Form.Item hidden name="id" />
				<Form.Item name="title" label="제목" rules={[{ required: true, message: '필수값입니다.' }]}>
					<Input />
				</Form.Item>
				<Form.Item
					name="description"
					label="설명"
					rules={[{ required: true, message: '필수값입니다.' }]}
				>
					<Input.TextArea rows={5} />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default FaqModifyModal;
