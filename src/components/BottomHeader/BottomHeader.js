import React from 'react';
import classes from './BottomHeader.module.scss';

function BottomHeader() {
	return (
		<div className={classes.bottomHeader}>
			<img
				className="mr-3"
				alt="bottom-header-img"
				src={require('../../img/bottom-header.png')}
				style={{ width: '30px' }}
			/>
			<p className="m-0 mr-3"> تعریف سطح </p>
			<img
				className="mr-3"
				alt="bottom-header-img"
				src={require('../../img/bottom-header.png')}
				style={{ width: '30px' }}
			/>
			<p className="m-0 mr-3"> تعریف زیرمجموعه </p>

			<div className={classes.bottomHeader__signin}>
				<button className={classes.bottomHeader__btn}>
					<p style={{ fontWeight: 'bold' }} className="m-0">
						خروج
					</p>
					<img
						className="mr-1"
						alt="bottom-header-img"
						src={require('../../img/logout.png')}
						style={{ width: '30px' }}
					/>
				</button>
				<button style={{ marginRight: '2em' }} className={classes.bottomHeader__btn}>
					<p style={{ fontWeight: 'bold' }} className="m-0">
						آپلود اکسل
					</p>
					<img
						className="mr-1"
						alt="bottom-header-img"
						src={require('../../img/excel.png')}
						style={{ width: '30px' }}
					/>
				</button>
			</div>
		</div>
	);
}

export default BottomHeader;
