export const IsNullOrEmpty = val => {
	return (
		val === '' ||
		val === undefined ||
		val === 'undefined' ||
		val === ' ' ||
		val === null ||
		val === 'null' ||
		val.length === 0
	);
};
