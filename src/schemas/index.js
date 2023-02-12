import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const phoneRegExp = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g;
export const signinSchema = yup.object().shape({
	email: yup
		.string()
		.email('Please enter a valid email')
		.required('email required'),
	//   age: yup.number().positive().integer().required("Required"),
	password: yup
		.string()
		.min(5)
		.matches(passwordRules, { message: 'Please create a stronger password' })
		.required('password required')
	// confirmPassword: yup
	// 	.string()
	// 	.oneOf([yup.ref('password'), null], 'Passwords must match')
	// 	.required('Required')
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
	gender: yup.string().required('Select one of the above button'),
	placeBirth: yup.string().required('required'),
	childBirth: yup.string().required('required'),
	formalSchool: yup.string().required('required'),
	parentsName: yup.string().required('required'),
	address: yup.string().required('required'),
	reasonsJoining: yup.string().required('required'),
	preferredTime: yup.string().required('Select one of the above button')
	// childName: '',
	// email: '',
	// phoneNumber: '',
	// gender: '',
	// placeBirth: '',
	// childBirth: '',
	// formalSchool: '',
	// parentsName: '',
	// formalSchool: '',
	// address: '',
	// reasonsJoining: '',
	// prefrredTime: ''
	// password: yup
	// 	.string()
	// 	.min(5)
	// 	.matches(passwordRules, { message: 'Please create a stronger password' })
	// 	.required('password required'),
	// confirmPassword: yup
	// 	.string()
	// 	.oneOf([yup.ref('password'), null], 'Passwords must match')
	// 	.required('required')
});

export const absensiSchema = yup.object().shape({
	email: yup
		.string()
		.email('Please enter a valid email')
		.required('email required'),
	//   age: yup.number().positive().integer().required("Required"),
	password: yup
		.string()
		.min(5)
		.matches(passwordRules, { message: 'Please create a stronger password' })
		.required('password required')
	// confirmPassword: yup
	// 	.string()
	// 	.oneOf([yup.ref('password'), null], 'Passwords must match')
	// 	.required('Required')
});

export const oneSchema = yup.object().shape({
	data: yup.string().required(true)
});

export const classSchema = yup.object().shape({
	name: yup.string('Please enter a valid email').required('name required'),
	description: yup
		.string('Please enter a valid description')
		.required('descrition required'),
	trainer: yup.string().required('Required'),
	activity: yup.string().required('Required'),
	start_age: yup
		.string()
		// .oneOf(['designer', 'developer', 'manager', 'other'], 'Invalid Job Type')
		.required('Required'),
	end_age: yup
		.string()
		// .oneOf(['designer', 'developer', 'manager', 'other'], 'Invalid Job Type')
		.required('Required'),
	gender: yup
		.string()
		.oneOf(['all', 'male', 'female'], 'please choose this one')
	// .required('Required')
});
// jobType: yup
// .string()
// .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
// .required("Required"),

// export const advancedSchema = yup.object().shape({
// 	username: yup
// 		.string()
// 		.min(3, 'Username must be at least 3 characters long')
// 		.required('Required'),
// 	jobType: yup
// 		.string()
// 		.oneOf(['designer', 'developer', 'manager', 'other'], 'Invalid Job Type')
// 		.required('Required'),
// 	acceptedTos: yup.boolean().oneOf([true], 'Please accept the terms of service')
// });
