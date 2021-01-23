import React, { useState, Fragment } from 'react';
import classes from './TableComp.module.scss';

// Antd
import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

// Components
import CustomBtn from '../CustomBtn/CustomBtn';
import DeleteModal from '../DeleteModal/DeleteModal';

function TableComp({ tableSize }) {
	const [ modalVisible, setModal ] = useState(false);
	const [ modalName, setModalName ] = useState('');
	const [ data, setData ] = useState([
		{
			key: 1,
			id: '۱',
			name: 'ملزومات شخصی',
			code: '۱۲',
			date: '۱۳۹۹/۴/۱۲',
			author: 'نادر علیزاده',
			actions: 'ملزومات شخصی',
			children: [
				{
					key: 2,
					id: '۲',
					name: 'جواهر آلات',
					code: '۳۹',
					date: '۱۳۹۹/۴/۱۲',
					author: 'امیر جوادی',
					actions: 'جواهر آلات'
				},
				{
					key: 3,
					id: '۳',
					name: 'ساعت مچی کوارتز',
					code: '۳۲',
					date: '۱۳۹۹/۴/۱۲',
					author: 'علیرضا جعفری',
					actions: 'ساعت مچی کوارتز'
				},
				{
					key: 4,
					id: '۴',
					name: 'ملزومات تزیینی',
					code: '۳۰',
					date: '۱۳۹۹/۴/۱۲',
					author: 'فرناز داوودی',
					actions: 'ملزومات تزیینی',
					children: [
						{
							key: 5,
							id: '۵',
							date: '۱۳۹۹/۴/۱۲',
							name: 'ساعت مچی رولکس',
							code: '۲۰',
							author: 'مهناز رجبی',
							actions: 'ساعت مچی رولکس'
						}
					]
				}
			]
		},
		{
			id: '۶',
			key: 6,
			name: 'سنگ قیمتی',
			date: '۱۳۹۹/۴/۱۲',
			code: '۳۲۰',
			author: 'کامران اعظمی',
			actions: 'سنگ قیمتی'
		},
		{
			key: 7,
			id: '۲',
			name: 'جواهر آلات',
			code: '۳۹',
			date: '۱۳۹۹/۴/۱۲',
			author: 'امیر جوادی',
			actions: 'جواهر آلات'
		},
		{
			key: 8,
			id: '۳',
			name: 'ساعت مچی کوارتز',
			code: '۳۲',
			date: '۱۳۹۹/۴/۱۲',
			author: 'علیرضا جعفری',
			actions: 'ساعت مچی کوارتز'
		},
		{
			key: 9,
			id: '۴',
			name: 'ملزومات تزیینی',
			code: '۳۰',
			date: '۱۳۹۹/۴/۱۲',
			author: 'فرناز داوودی',
			actions: 'ملزومات تزیینی',
			children: [
				{
					key: 10,
					id: '۵',
					date: '۱۳۹۹/۴/۱۲',
					name: 'ساعت مچی رولکس',
					code: '۲۰',
					author: 'مهناز رجبی',
					actions: 'ساعت مچی رولکس'
				}
			]
		}
	]);
	const [ columns, setColumns ] = useState([
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
			render: (actions) => (
				<Fragment>
					<CustomBtn
						onClick={() => handleRemove(actions)}
						customClass="mr-3"
						text="حذف"
						size="middle"
						color="#ff3535"
						icon={<DeleteOutlined />}
					/>
					<CustomBtn customClass="mr-3" text="ویرایش" size="middle" color="#67b6ff" icon={<EditOutlined />} />
				</Fragment>
			)
		}
	]);

	const handleRemove = (actions) => {
		setModalName(actions);
		setModal(true);
	};

	const showModal = () => {
		setModal(true);
	};

	const handleOk = () => {
		setModal(false);
	};

	const handleCancel = () => {
		setModal(false);
	};
	return (
		<div style={{ paddingBottom: '2em' }}>
			<Table
				expandable={{
					expandIcon: (props) =>
						props.expandable ? props.expanded ? (
							<button
								onClick={(e) => props.onExpand(props.record, e)}
								className="ml-2"
								style={{ border: 'none', outline: 'none', background: 'none' }}
							>
								<img src={require('../../img/folder.png')} style={{ width: '20px' }} />
							</button>
						) : (
							<button onClick={(e) => props.onExpand(props.record, e)} className={classes.tableItemIcon}>
								<img src={require('../../img/folder.png')} style={{ width: '20px' }} />
							</button>
						) : (
							<button
								onClick={(e) => props.onExpand(props.record, e)}
								className={classes.tableItemIconSingle}
							>
								<img src={require('../../img/item.png')} style={{ width: '20px' }} />
							</button>
						)
				}}
				size={tableSize}
				bordered
				columns={columns}
				dataSource={data}
				pagination={false}
				className="mb-5"
			/>

			<DeleteModal
				showModal={showModal}
				handleCancel={handleCancel}
				handleOk={handleOk}
				modalName={modalName}
				modalVisible={modalVisible}
			/>
		</div>
	);
}

export default TableComp;
