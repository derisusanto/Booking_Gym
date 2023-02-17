import { ErrorMessage, Form, Formik } from 'formik';

import { Col, Row } from 'antd';
import CustomInput from '../../../component/formInput/customInput';
import CustomSelect from '../../../component/formInput/customSelect';
import CustomRadio from '../../../component/formInput/customRadio';

import './trainer.scss';
import { trainerSchema } from '../../../schemas/userData';

export const FormEditTrainer = ({ onSubmit, onCancelForm, data }) => {
	return (
		<div className="card-form-input">
			<Formik
				enableReinitialize={true}
				initialValues={data}
				validationSchema={trainerSchema}
				onSubmit={onSubmit}
			>
				{({ isSubmitting }) => (
					<Form className="form">
						<div className="form-input-class">
							<CustomInput
								label="Trainer Name"
								name="nama"
								type="text"
								className="form-control"
								placeholder="trainer name"
							/>
							<Row gutter={16}>
								<Col span={8} md={8}>
									<CustomInput
										label="Birth Place"
										name="birthPlace"
										type="text"
										placeholder="birth place"
									/>
								</Col>
								<Col span={8} md={8}>
									<CustomInput
										label="Birth Date"
										name="birthDate"
										type="date"
										placeholder="birth date"
									/>
								</Col>
								<Col span={8} md={8}>
									{' '}
									<CustomInput
										label="Phone Number"
										name="phoneNumber"
										type="text"
										placeholder="phone number"
									/>
								</Col>
							</Row>
							<Row gutter={16}>
								<Col span={12} md={12}>
									<CustomInput
										label="Email"
										name="email"
										type="email"
										placeholder="email"
									/>
								</Col>
								<Col span={12} md={12}>
									{' '}
									<CustomInput
										label="Contact Person"
										name="contactPerson"
										type="text"
										placeholder="second number (emergency)"
									/>
								</Col>
							</Row>
							<Row gutter={16}>
								<Col span={12} md={12}>
									<CustomSelect
										label="Bank Account"
										name="bankAccount"
										placeholder="please select one category"
										options={[
											{ label: 'BCA', value: 'bca' },
											{ label: 'Mandiri', value: 'mandiri' }
										]}
									/>
								</Col>
								<Col span={12} md={12}>
									<CustomInput
										label="Account Number"
										name="accountNumber"
										type="text"
										placeholder="account bank number"
									/>
								</Col>
							</Row>
							<div>
								<label>Gender</label>

								<Row className="mt-2">
									<Col span={3}>
										<CustomRadio
											label="Male"
											type="radio"
											name="gender"
											value="male"
										/>
									</Col>
									<Col span={3}>
										<CustomRadio
											label="Female"
											type="radio"
											value="female"
											name="gender"
										/>
									</Col>
								</Row>
								<ErrorMessage name="gender" />
							</div>
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
