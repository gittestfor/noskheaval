import React from 'react';
import CustomBtn from '../CustomBtn/CustomBtn';

function ModalFooter({ handleCancel }) {
	return (
		<div className="d-flex align-items-center justify-content-center">
			<CustomBtn color="#ff3535" text="حذف شود" onClick={handleCancel} />{' '}
			<CustomBtn color="#cccccc" text="بازگشت" onClick={handleCancel} />
		</div>
	);
}

export default ModalFooter;
