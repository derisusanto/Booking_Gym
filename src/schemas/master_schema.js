import * as yup from 'yup';

//Category
export const categorySchema = yup.object().shape({
	nama: yup.string().required('category required')
});
//Class
export const classSchema = yup.object().shape({
	nama: yup.string('Please enter a valid email').required('name required'),
	categoryId: yup.string().required('Select one of activity'),
	description: yup
		.string('Please enter a valid description')
		.required('descrition required'),
	// activity: yup.string().required('Required'),
	startAge: yup
		.number()
		.typeError('age must be a number')
		.positive('age must be greater than zero')
		.required('age is required'), // .string()

	endAge: yup
		.number()
		.typeError('age must be a number')
		.positive('age must be greater than zero')
		.required('age is required'), // .string()
	startAge: yup
		.number()
		.typeError('age must be a number')
		.positive('age must be greater than zero')
		.required('age is required'), // .string()
	durasi: yup.string().required('Select one of duration'),
	gender: yup.string().required('please select one a gender')
});

//Location
export const locationSchema = yup.object().shape({
	nama: yup.string().required('please insert location name'),
	alamat: yup.string().required('please insert address'),
	code: yup.string().required('please insert location code'),
	startTime: yup.string().required('please insert start time'),
	endTime: yup.string().required('please insert end time')
});

//Room
export const roomSchema = yup.object().shape({
	nama: yup.string().required('please insert room name'),
	type: yup.string().required('please insert type'),
	capacity: yup
		.number()
		.typeError('capacity must be a number')
		.positive('capacity must be greater than zero')
		.required('capacity is required'),
	locationId: yup.number().required('select one a location')
});

//Room
export const eventSchema = yup.object().shape({
	nama: yup.string().required('please insert event name'),
	startDate: yup.string().required('please insert start date'),
	endDate: yup.string().required('please insert end date'),
	biaya: yup
		.number()
		.typeError('price must be a number')
		.positive('price must be greater than zero')
		.required('price is required'),
	lokasi: yup.string().required('please insert location'),
	description: yup.string().required('please insert a description')
});
