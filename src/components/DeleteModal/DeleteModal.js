import React from 'react';
import { Modal } from 'antd';
import ModalFooter from '../ModalFooter/ModalFooter';

function DeleteModal({ handleCancel, handleOk, modalVisible, modalName }) {
	return (
		<Modal
			visible={modalVisible}
			onOk={handleOk}
			onCancel={handleCancel}
			footer={[ <ModalFooter handleCancel={handleCancel} /> ]}
		>
			<p className="m-0 text-center mt-5">آیا از حذف {modalName} مطمئن هستید ؟</p>
		</Modal>
	);
}

export default DeleteModal;
