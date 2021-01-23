import React from 'react';
import { Button } from 'antd';

function CustomBtn({ icon, color, text, customClass, size, onClick }) {
	return (
		<Button
			className={customClass}
			style={{ background: color, border: 'none' }}
			type={'primary'}
			icon={icon}
			onClick={onClick}
			size={size || 'middle'}
		>
			{text}
		</Button>
	);
}

export default CustomBtn;
