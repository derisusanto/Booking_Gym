import React from 'react';
import './custom.scss';

const CustomHeader = toolbar => {
	const dayArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	const format = new Date(toolbar.date);

	let date = format.getDate();
	const dayName = dayArr[format.getDay()];

	var d1 = new Date().toLocaleDateString(undefined, options);
	var d2 = format.toLocaleDateString(undefined, options);
	var selectedDate = d1 === d2;

	return (
		<React.Fragment>
			<div className={`component-header ${selectedDate && 'active'}`}>
				<label>{dayName}</label>
				<div className="date">{date}</div>
			</div>
		</React.Fragment>
	);
};

export default React.memo(CustomHeader);
