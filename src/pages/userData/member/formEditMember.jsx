import './member.scss';
import { Form, Formik } from 'formik';
import { signupSchema } from '../../../schemas';
import CustomInput from '../../../component/formInput/customInput';
import CustomTextArea from '../../../component/formInput/customTextArea';
import CustomSelect from '../../../component/formInput/customSelect';
import { memberSchema } from '../../../schemas/userData';

const FormEditMember = ({ onSubmit, onCancelForm, data }) => {
	return (
		<div className="card-form-input">
			<Formik
				initialValues={data}
				validationSchema={memberSchema}
				onSubmit={onSubmit}
			>
				{({ isSubmitting }) => (
					<Form className="form">
						<div className="form-input-member">
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
								placeholder="place of birth place"
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
						</div>

						<div className="bottom-confirm">
							<button
								disabled={isSubmitting}
								type="submit"
								className="btn-cancel"
								onClick={onCancelForm}
							>
								Cancel
							</button>
							<button
								disabled={isSubmitting}
								type="submit"
								className="btn-confirm"
							>
								{isSubmitting ? 'Loading ..' : 'Save'}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
export default FormEditMember;
