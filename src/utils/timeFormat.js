export const FormatTime = value => {
	let temp = new Date(value);
	try {
		let time = temp?.toLocaleTimeString('en-US', { hour12: false });
		return time;
	} catch (err) {
		return value;
	}
};
