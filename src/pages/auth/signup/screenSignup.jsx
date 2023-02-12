import './signup.scss';
import { Form, Formik, ErrorMessage } from 'formik';
import { signupSchema } from '../../../schemas';
import CustomInput from '../../../component/formInput/customInput';
import CustomTextArea from '../../../component/formInput/customTextArea';
import CustomSelect from '../../../component/formInput/customSelect';
import CustomRadio from '../../../component/formInput/customRadio';
import CustomCheckbox from '../../../component/formInput/customCheckbox';

const ScreenSignup = ({ onSubmit, isEyes, onSetIsEyes }) => {
	return (
		<div className="form-signin" id="form-signin">
			<div className="box-signin">
				<div className="title-form-signin">Sign Up</div>
				<Formik
					initialValues={{
						childName: '',
						email: '',
						phoneNumber: '',
						gender: '',
						placeBirth: '',
						childBirth: '',
						formalSchool: '',
						parentsName: '',
						formalSchool: '',
						address: '',
						reasonsJoining: '',
						preferredTime: ''
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
								name="placeBirth"
								type="text"
								className="form-control"
								placeholder="Place Of Birth"
							/>
							<CustomInput
								label="Child Birth Date"
								name="childBirth"
								type="date"
								className="form-control"
								placeholder="081 xxx xxx xxx"
							/>
							<CustomTextArea
								label="Address"
								name="address"
								type="text"
								className="form-control"
								placeholder="Address"
							/>

							{/* <CustomInput
								label="Name of Childs's Formal School"
								name="formalSchool"
								type="text"
								className="form-control"
								placeholder="Formal School"
							/> */}
							{/* <CustomInput
								label="Parent's Name"
								name="parentsName"
								type="text"
								className="form-control"
								placeholder="Parent's Name"
							/> */}
							<CustomInput
								label="Phone Number"
								name="phoneNumber"
								type="text"
								className="form-control"
								placeholder="08x xxx xxx xxx"
							/>
							<CustomInput
								label="Email"
								name="email"
								type="email"
								className="form-control"
								placeholder="Email"
							/>
							<CustomTextArea
								label="Medical Record (if you have)"
								name="address"
								type="text"
								className="form-control"
								placeholder="Medical Record"
							/>
							<CustomTextArea
								label="Reasons to Follow Gymnastics Training"
								name="address"
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
								name="preferredTime"
								placeholder="Select a person"
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

							<div className="terms">
								<CustomCheckbox
									label="All"
									value="all"
									type="radio"
									name="gender"
								/>
								<a>I accept the terms of service</a>
							</div>

							<button
								disabled={isSubmitting}
								type="submit"
								className="btn-signin"
							>
								Sign Up
							</button>
							<a href="/signin">signin!</a>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
export default ScreenSignup;
