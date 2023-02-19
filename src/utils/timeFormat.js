const options = {
	weekday: 'long',
	// year: 'numeric',
	month: 'long',
	day: 'numeric'
};

export const FormatDate = value => {
	try {
		let date = value?.toLocaleDateString('en-US', options);
		return date;
	} catch (err) {
		return value;
	}
};

export const FormatTime = value => {
	let temp = new Date(value);
	try {
		let time = temp?.toLocaleTimeString('en-US', { hour12: false });
		return time.slice(0, 5);
	} catch (err) {
		return value;
	}
};

const formatOldDate = data => {
	let date = new Date(data);
	let format =
		date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
	return format;
};
export default formatOldDate;
