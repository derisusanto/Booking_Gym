import React from 'react';

import { Row, Col } from 'antd';
import { Form, Formik } from 'formik';
import CustomInput from '../../../component/formInput/customInput';
import CustomTextArea from '../../../component/formInput/customTextArea';
import CustomSelect from '../../../component/formInput/customSelect';
import { memberSchema } from '../../../schemas/userData';
import TitleComponent from '../../../component/titleComponent/titleComponent';
import './member.scss';
const FormEditMember = ({
	onSubmit,
	onCancelForm,
	data,
	listLocations,
	listCategories
}) => {
	return (
		<React.Fragment>
			<TitleComponent title="Edit Member" />
			<div className="card-form-input">
				<Formik
					initialValues={data}
					validationSchema={memberSchema}
					onSubmit={onSubmit}
				>
					{({ isSubmitting }) => (
						<Form className="form">
							<div className="form-input-class">
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
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</React.Fragment>
	);
};
export default FormEditMember;
