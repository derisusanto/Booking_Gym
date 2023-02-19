import * as yup from 'yup';

const phoneRegExp = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g;

//member
export const memberSchema = yup.object().shape({
	childName: yup.string().required('name required'),
	email: yup
		.string()
		.email('Please enter a valid email')
		.required('email required'),
	phoneNumber: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('require'),
	gender: yup.string().required('Select one of gender'),
	birthPlace: yup.string().required('required'),
	birthDate: yup.string().required('required'),
	medicalRecord: yup.string(),
	Address: yup.string().required('required'),
	reasonsTraining: yup.string()
});
//trainer
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
