import React, { Fragment } from 'react';
import CustomBtn from './components/CustomBtn/CustomBtn';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
export const columns = [
	{
		title: 'نام',
		dataIndex: 'name',
		key: 'name',
		width: '20%',
		align: 'right'
	},
	{
		title: 'آیدی',
		dataIndex: 'id',
		key: 'id',
		align: 'center'
	},
	{
		title: 'کد',
		dataIndex: 'code',
		key: 'code',
		align: 'center'
	},
	{
		title: 'ثبت کننده',
		dataIndex: 'author',
		key: 'author'
	},
	{
		title: 'تاریخ',
		dataIndex: 'date',
		key: 'date',
		align: 'center'
	},
	{
		title: 'عملیات',
		dataIndex: 'actions',
		key: 'actions',
		render: () => (
			<Fragment>
				<CustomBtn customClass="mr-3" text="حذف" size="middle" color="#ff3535" icon={<DeleteOutlined />} />
				<CustomBtn customClass="mr-3" text="ویرایش" size="middle" color="#67b6ff" icon={<EditOutlined />} />
			</Fragment>
		)
	}
];
