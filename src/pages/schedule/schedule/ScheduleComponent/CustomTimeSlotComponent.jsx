import React from 'react';
// import { FormatTime } from '../../../utils/timeFormat';
import './custom.scss';

const CustomTimeSlotComponent = timeSlot => {
	const FormatTime = value => {
		try {
			let time = value?.toLocaleTimeString('en-US', { hour12: false });
			return time.slice(0, 5);
		} catch (err) {
			return value;
		}
	};
	return <div id="slot-wrapper">{FormatTime(timeSlot.value).slice(0, 5)}</div>;
};

export default React.memo(CustomTimeSlotComponent);
