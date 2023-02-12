import * as yup from 'yup';

//Category
export const categorySchema = yup.object().shape({
	category: yup.string().required('category required')
});
//Class
export const classSchema = yup.object().shape({
	name: yup.string('Please enter a valid email').required('name required'),
	description: yup
		.string('Please enter a valid description')
		.required('descrition required'),
	// activity: yup.string().required('Required'),
	start_age: yup
		.number()
		.typeError('age must be a number')
		.positive('age must be greater than zero')
		.required('age is required'), // .string()
	// // .oneOf(['designer', 'developer', 'manager', 'other'], 'Invalid Job Type')
	// .required('Required'),
	end_age: yup
		.number()
		.typeError('age must be a number')
		.positive('age must be greater than zero')
		.required('age is required'), // .string()
	// // .oneOf(['designer', 'developer', 'manager', 'other'], 'Invalid Job Type')
	// .required('Required'),
	gender: yup
		.string()
		.oneOf(['all', 'male', 'female'], 'please choose this one')
	// .required('Required')
});

//Location
export const locationSchema = yup.object().shape({
	name: yup.string('Please enter a valid email').required('name required'),
	description: yup
		.string('Please enter a valid description')
		.required('descrition required'),
	address: yup.string().required('required'),
	start_age: yup
		.number()
		.typeError('age must be a number')
		.positive('age must be greater than zero')
		.required('age is required'), // .string()

	end_age: yup
		.number()
		.typeError('age must be a number')
		.positive('age must be greater than zero')
		.required('age is required')
		.moreThan(yup.ref('start_age'))
});

//Room
export const roomSchema = yup.object().shape({
	name: yup.string().required('name required'),
	type: yup.string().required('type required'),
	capacity: yup
		.number()
		.typeError('capacity must be a number')
		.positive('capacity must be greater than zero')
		.required('capacity is required'), // .string()
	location: yup.string().required('Required')
});
