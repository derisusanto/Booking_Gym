import * as yup from 'yup';
//member
// nama: '',
// gender: '',
// birthPlace: '',
// birthDate: '',
// email: '',
// contactPerson: '',
// phoneNumber: '',
// bankAccount: '',
// accountNumber: ''
//trainer
const phoneRegExp = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g;

export const trainerSchema = yup.object().shape({
	nama: yup.string().required('please insert trainer name'),
	email: yup
		.string()
		.email('Please enter a valid email')
		.required('please insert email'),
	phoneNumber: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('require'),
	contactPerson: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('require'),
	gender: yup.string().required('Select one of gender'),
	birthPlace: yup.string().required('required'),
	birthDate: yup.string().required('required'),
	accountNumber: yup
		.number()
		.typeError('account number must be a number')
		.positive('account number must be greater than zero')
		.required('account number is required'), // .string()

	bankAccount: yup.string().required('please insert acount bank')
});
