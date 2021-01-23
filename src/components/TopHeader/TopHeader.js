import React from 'react';
import classes from './TopHeader.module.scss';

import { Select, Input } from 'antd';
import { NumberOutlined, UnorderedListOutlined, FilterOutlined, SearchOutlined } from '@ant-design/icons';

import CustomBtn from '../CustomBtn/CustomBtn';

const { Option } = Select;

function TopHeader({ handleTableSize }) {
	return (
		<div className={classes.topHeader}>
			<p className={classes.topHeader__text}>نوع ساختار</p>
			<Select size="large" className={classes.topHeader__option} defaultValue="default">
				<Option style={{ textAlign: 'right' }} value="default">
					( انتخاب نوع ساختار )
				</Option>
			</Select>

			<p className={classes.topHeader__text}>سایز جدول</p>
			<Select
				onChange={(e) => handleTableSize(e)}
				size="large"
				style={{ width: '100px' }}
				className={classes.topHeader__option}
				defaultValue="middle"
			>
				<Option style={{ textAlign: 'right' }} value="large">
					بزرگ
				</Option>
				<Option style={{ textAlign: 'right' }} value="middle">
					معمولی
				</Option>
				<Option style={{ textAlign: 'right' }} value="small">
					کوچک
				</Option>
			</Select>

			<p className={classes.topHeader__text}>کد</p>
			<Input
				type="number"
				className="mr-3"
				size="large"
				style={{ width: '170px', height: '40px' }}
				prefix={<NumberOutlined />}
			/>

			<p className={classes.topHeader__text}>عنوان</p>
			<Input
				type="text"
				className="mr-3"
				size="large"
				style={{ width: '170px', height: '40px' }}
				prefix={<UnorderedListOutlined />}
			/>

			<CustomBtn customClass="mr-5" color="grey" size="large" text="جستجو" icon={<SearchOutlined />} />
			<CustomBtn customClass="mr-3" color="grey" size="large" text="حذف فیلتر" icon={<FilterOutlined />} />
		</div>
	);
}

export default TopHeader;
