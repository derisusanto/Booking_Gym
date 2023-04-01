import './signup.scss';
import { Form, Formik } from 'formik';
import { signupSchema } from '../../../schemas';
import CustomInput from '../../../component/formInput/customInput';
import CustomTextArea from '../../../component/formInput/customTextArea';
import CustomSelect from '../../../component/formInput/customSelect';

import { Col, Row } from 'antd';
import { ICON } from '../../../assets/icons/icons';
import { IMAGE } from '../../../assets/images/images';

const ScreenSignup = ({ onSubmit, listLocations, listCategories }) => {
	return (
		<div className="form-signup" id="form-signup">
			<div className="wrapper">
				<div className="box-signup">
					<div className="title-logo">
						<ICON.COMPANY />
						<h3>Sign Up</h3>
					</div>
					<Formik
						initialValues={{
							childName: '',
							gender: '',
							birthPlace: '',
							birthDate: '',
							Address: '',
							motherName: '',
							fatherName: '',
							phoneNumber: '',
							medicalRecord: '',
							reasonsTraining: '',
							email: '',
							categoryId: '',
							locationId: ''
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
									placeholder="enter your fullname"
								/>

								<Row gutter={[8, 12]}>
									<Col span={12} md={12} sm={24}>
										<CustomInput
											label="Place of Birth"
											name="birthPlace"
											type="text"
											className="form-control"
											placeholder="place of birth"
										/>
									</Col>
									<Col span={12} md={12} sm={24}>
										<CustomInput
											label="Child Birth Date"
											name="birthDate"
											type="date"
											className="form-control"
										/>
									</Col>
								</Row>
								<Row gutter={[8, 12]}>
									<Col span={12} md={12} sm={24}>
										<CustomInput
											label="Email"
											name="email"
											type="email"
											className="form-control"
											placeholder="email"
										/>
									</Col>
									<Col span={12} md={12} sm={24}>
										<CustomInput
											label="Phone Number"
											name="phoneNumber"
											type="text"
											className="form-control"
											placeholder="08- --- --- ---"
										/>
									</Col>
								</Row>
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
								<Row gutter={[8, 12]}>
									<Col span={12} md={12} sm={24}>
										{' '}
										<CustomInput
											label="Father Name"
											name="fatherName"
											type="text"
											className="form-control"
											placeholder="father name"
										/>
									</Col>
									<Col span={12} md={12} sm={24}>
										<CustomInput
											label="Mother Name"
											name="motherName"
											type="text"
											className="form-control"
											placeholder="mother name"
										/>
									</Col>
								</Row>
								<Row gutter={[8, 12]}>
									<Col span={12} md={12} sm={24}>
										<CustomSelect
											label="Category"
											name="categoryId"
											placeholder="Choose Category"
											options={listCategories}
										/>
									</Col>
									<Col span={12} md={12} sm={24}>
										<CustomSelect
											label="Location"
											name="locationId"
											placeholder="Choose Location"
											options={listLocations}
										/>
									</Col>
								</Row>

								<CustomTextArea
									label="Address"
									name="Address"
									type="text"
									className="form-control"
									placeholder="address"
								/>
								<CustomTextArea
									label="Medical Record (if you have)"
									name="medicalRecord"
									type="text"
									className="form-control"
									placeholder="medical record"
								/>
								<CustomTextArea
									label="Reasons to Follow Gymnastics Training"
									name="reasonsTraining"
									type="text"
									className="form-control"
									placeholder="reasons to follow gymnastics training"
								/>

								<button
									disabled={isSubmitting}
									type="submit"
									className="btn-signup"
								>
									{isSubmitting ? 'Loading ...' : 'Sign Up'}
								</button>

								<span>
									Do you have account? <a href="/">Login</a>
								</span>
							</Form>
						)}
					</Formik>
				</div>
			</div>

			<div className="image-wrapper">
				<img src={IMAGE.SIGNIN.IMG} alt={IMAGE.SIGNIN.alt} />
			</div>
		</div>
	);
};
export default ScreenSignup;
