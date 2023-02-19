import { Modal } from 'antd';

export const CustomModal = ({
	title,
	show,
	content,
	onHide,
	footer = null
}) => {
	return (
		<Modal
			title={title}
			style={{ top: 20 }}
			open={show}
			onCancel={onHide}
			footer={footer}
			maskClosable={false}
		>
			{content}
		</Modal>
	);
};
