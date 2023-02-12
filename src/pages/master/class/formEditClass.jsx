import { Form, Formik } from 'formik';

import { Col, Row } from 'antd';
import CustomInput from '../../../component/formInput/customInput';
import CustomSelect from '../../../component/formInput/customSelect';
import CustomRadio from '../../../component/formInput/customRadio';
import { classSchema } from '../../../schemas/index';

import './class.scss';

export const FormEditClass = ({ onSubmit, onCancelForm }) => {
	return (
		<div className="card-form-input">
			<Formik
				initialValues={{
					name: 'Deri',
					description: 'Class',
					trainer: 'lucy',
					activity: 'lucy',
					start_age: 'lucy',
					end_age: 'lucy',
					gender: 'all'
				}}
				validationSchema={classSchema}
				onSubmit={onSubmit}
			>
				{({ isSubmitting }) => (
					<Form className="form">
						<div className="form-input-class">
							<CustomInput
								label="Name"
								name="name"
								type="text"
								className="form-control"
								placeholder="Enter your email@"
							/>

							<CustomInput
								label="Description"
								name="description"
								type="text"
								placeholder="Enter your password"
							/>
							<Row gutter={16}>
								<Col span={12} md={12}>
									<CustomSelect
										label="Trainer"
										name="trainer"
										placeholder="Search to Select"
										options={[
											{
												value: 'jack',
												label: 'Jack'
											},
											{
												value: 'lucy',
												label: 'Lucy'
											},
											{
												value: 'yiminghe',
												label: 'Yiminghe'
											}
										]}
									/>
								</Col>
								<Col span={12} md={12}>
									<CustomSelect
										label="Activity"
										name="activity"
										placeholder="Please select a activity"
										options={[
											{
												value: 'jack',
												label: 'Jack'
											},
											{
												value: 'lucy',
												label: 'Lucy'
											},
											{
												value: 'Yiminghe',
												label: 'yiminghe'
											}
										]}
									/>
								</Col>
							</Row>
							<Row gutter={16}>
								<Col span={12} md={12}>
									<CustomSelect
										label="Age"
										name="start_age"
										placeholder="Please select a start age"
										options={[
											{
												value: 'jack',
												label: 'Jack'
											},
											{
												value: 'lucy',
												label: 'Lucy'
											},
											{
												value: 'Yiminghe',
												label: 'yiminghe'
											}
										]}
									/>
								</Col>
								<Col span={12} md={12}>
									<CustomSelect
										label="Age"
										name="end_age"
										placeholder="Please select a until age"
										options={[
											{
												value: 'jack',
												label: 'Jack'
											},
											{
												value: 'lucy',
												label: 'Lucy'
											},
											{
												value: 'Yiminghe',
												label: 'yiminghe'
											}
										]}
									/>
								</Col>
							</Row>

							<Row>
								<Col span={3}>
									<CustomRadio
										label="All"
										value="all"
										type="radio"
										name="gender"
									/>
								</Col>
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
						</div>
						<div className="bottom-confirm">
							<button
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
