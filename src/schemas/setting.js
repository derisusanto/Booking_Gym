import * as yup from 'yup';

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const phoneRegExp = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g;

//user
export const userSchema = yup.object().shape({
	nama: yup.string().required('please insert a name'),
	email: yup
		.string()
		.email('please insert a valid email')
		.required('please insert a valid email'),

	phoneNumber: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('please insert a phone number'),
	locationId: yup.string().required('Select one of activity')
});

//Role
export const roleSchema = yup.object().shape({
	nama: yup.string().required('please insert a name'),
	description: yup.string()
});
