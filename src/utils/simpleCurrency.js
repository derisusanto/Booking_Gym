export const SimpleCurrency = currencyValue => {
	try {
		let reverse = currencyValue?.toString().split('').reverse().join(''),
			ribuan = reverse.match(/\d{1,3}/g);
		ribuan = ribuan?.join('.').split('').reverse().join('');
		return ribuan;
	} catch (err) {
		return currencyValue;
	}
};
