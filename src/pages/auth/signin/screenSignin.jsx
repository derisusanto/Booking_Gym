import './signin.scss';
import { Form, Formik } from 'formik';
import { signinSchema } from '../../../schemas';
import CustomInput from '../../../component/formInput/customInput';

const ScreenSignin = ({ onSubmit, isEyes, onSetIsEyes }) => {
	return (
		<div className="form-signin" id="form-signin">
			<div className="box-signin">
				<div className="title-form-signin">Sign In</div>
				<Formik
					initialValues={{ email: '', password: '' }}
					validationSchema={signinSchema}
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
								type={isEyes ? 'text' : 'password'}
								placeholder="Enter your password"
							/>

							<div className="form-cehckbox">
								<input
									type="checkbox"
									id="checkbox-signin"
									checked={isEyes}
									onChange={onSetIsEyes}
								/>
								<label htmlFor="checbox-signin">show password</label>
							</div>

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
		</div>
	);
};
export default ScreenSignin;
