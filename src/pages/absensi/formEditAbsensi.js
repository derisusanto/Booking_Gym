import { Form, Formik } from 'formik';
import CustomInput from '../../component/formInput/customInput';
import { absensiSchema } from '../../schemas';

export const FromEditbsensi = ({ onSubmit, data }) => {
	return (
		<div className="formInput-absensi">
			<Formik
				initialValues={{ email: data.email, password: data.password }}
				validationSchema={absensiSchema}
				onSubmit={onSubmit}
			>
				{({ isSubmitting }) => (
					<Form className="form">
						<CustomInput
							label="Email"
							name="email"
							type="email"
							className="form-control"
							placeholder="Enter your email@"
						/>

						<CustomInput
							label="Password"
							name="password"
							type={'text'}
							placeholder="Enter your password"
						/>

						<button
							disabled={isSubmitting}
							type="submit"
							className="btn-signin"
						>
							{isSubmitting ? 'Loading ..' : 'Sign In'}
						</button>
						<a href="/member/registered">create account ?</a>
					</Form>
				)}
			</Formik>
		</div>
	);
};
