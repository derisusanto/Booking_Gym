import './signup.scss';
import { Form, Formik } from 'formik';
import { signupSchema } from '../../../schemas';
import CustomInput from '../../../component/formInput/customInput';
import CustomTextArea from '../../../component/formInput/customTextArea';
import CustomSelect from '../../../component/formInput/customSelect';

const ScreenSignup = ({ onSubmit }) => {
	return (
		<div className="form-signup" id="form-signup">
			<div className="box-signup">
				<div className="title-form-signup">Sign Up</div>
				<Formik
					initialValues={{
						childName: '',
						gender: '',
						birthPlace: '',
						birthDate: '',
						Address: '',
						phoneNumber: '',
						medicalRecord: '',
						reasonsTraining: '',
						email: '',
						classType: ''
					}}
					validationSchema={signupSchema}
					onSubmit={onSubmit}
				>
					{({ isSubmitting }) => (
						<Form className="form">
							<CustomInput
								label="Child Name"
								name="childName"
								type="text"
								className="form-control"
								placeholder="Enter your fullname"
							/>

							<CustomSelect
								label="Gender"
								name="gender"
								placeholder="Search to Select"
								options={[
									{
										value: 'Male',
										label: 'Male'
									},
									{
										value: 'Female',
										label: 'Female'
									}
								]}
							/>
							{/* <ErrorMessage name="gender" /> */}

							<CustomInput
								label="Place of Birth"
								name="birthPlace"
								type="text"
								className="form-control"
								placeholder="Place Of Birth"
							/>
							<CustomInput
								label="Child Birth Date"
								name="birthDate"
								type="date"
								className="form-control"
								placeholder="081 xxx xxx xxx"
							/>
							<CustomInput
								label="Email"
								name="email"
								type="email"
								className="form-control"
								placeholder="Email"
							/>
							<CustomInput
								label="Phone Number"
								name="phoneNumber"
								type="text"
								className="form-control"
								placeholder="08x xxx xxx xxx"
							/>

							<CustomTextArea
								label="Address"
								name="Address"
								type="text"
								className="form-control"
								placeholder="Address"
							/>
							<CustomTextArea
								label="Medical Record (if you have)"
								name="medicalRecord"
								type="text"
								className="form-control"
								placeholder="Medical Record"
							/>
							<CustomTextArea
								label="Reasons to Follow Gymnastics Training"
								name="reasonsTraining"
								type="text"
								className="form-control"
								placeholder="Reasons to Follow Gymnastics Training"
							/>
							{/* <CustomInput
								label="Reasons of Joining Gymnastics / Parkour"
								name="reasonsJoining"
								type="text"
								className="form-control"
								placeholder="Reasons of Joining Gymnastics / Parkour "
							/> */}
							<CustomSelect
								label="Class Type"
								name="classType"
								placeholder="please select one class"
								options={[
									{
										value: 'SV',
										label: 'SV ( Single Visit )'
									},
									{
										value: 'PS',
										label: 'PS ( Private Session)'
									},
									{
										value: 'PG',
										label: 'PG ( Private Gymnastics)'
									},
									{
										value: 'GP',
										label: 'GP ( Group Gymnastics)'
									}
								]}
							/>

							{/* <div className="terms">
								<CustomCheckbox
									label="All"
									value="all"
									// type="radio"
									name="gender"
								/>
								<a>I accept the terms of service</a>
							</div> */}

							<button
								disabled={isSubmitting}
								type="submit"
								className="btn-signup"
							>
								{isSubmitting ? 'Loading ...' : 'Sign Up'}
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
export default ScreenSignup;
