import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const phoneRegExp = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g;
export const signinSchema = yup.object().shape({
	email: yup
		.string()
		.email('Please insert a valid email')
		.required('please insert email'),

	password: yup
		.string()
		.min(5)
		// .matches(passwordRules, { message: 'Please insert a stronger password' })
		.required('please insert password')
});

export const signupSchema = yup.object().shape({
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
	reasonsTraining: yup.string().required('required'),
	classType: yup.string().required('Select one of the class')
});
