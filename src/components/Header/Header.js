import React from 'react';
import classes from './Header.module.scss';

function Header() {
	const view = `مشاهده`;
	const sorted = `بر اساس`;
	const textone = `سطح بندی ساختار`;
	const texttwo = `تعریف شده`;
	return (
		<div className={classes.header}>
			<div className={classes.header__text__container}>
				<p className={classes.header__text}>سطح بندی انواع ساختار</p>
				<p className={classes.header__desc}>
					<span style={{ color: '#cccccc' }}>{view}</span> {textone}
					<span style={{ color: '#cccccc' }}> {sorted}</span> {texttwo}
				</p>
			</div>
			<img alt="logo" className={classes.header__logo} src={require('../../img/logo.png')} />
		</div>
	);
}

export default Header;
