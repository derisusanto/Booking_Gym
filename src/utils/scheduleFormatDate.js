export const getFormattedDate = (dateString, hour) => {
	var date = new Date(dateString);
	var time = hour.split(':');
	var h = parseInt(time[0]);
	var m = parseInt(time[1]);
	var s = parseInt(time[2]);
	date.setHours(h, m, s); // Set hours, minutes and seconds
	return date.toString();
};
