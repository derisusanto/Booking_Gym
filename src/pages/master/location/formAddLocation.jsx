import { Form, Formik } from 'formik';

import { Col, Row } from 'antd';
import CustomInput from '../../../component/formInput/customInput';
import { locationSchema } from '../../../schemas/master_schema';
import './location.scss';

export const FormAddLocation = ({ onSubmit, onCancelForm }) => {
	return (
		<div className="card-form-input">
			<Formik
				initialValues={{
					name: '',
					description: '',
					start_age: '',
					end_age: '',
					address: ''
				}}
				validationSchema={locationSchema}
				onSubmit={onSubmit}
			>
				{({ isSubmitting }) => (
					<Form className="form">
						<div className="form-input">
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
							<CustomInput
								label="Address"
								name="address"
								type="text"
								placeholder="Address"
							/>
							<div>
								<label>Operational Hour</label>
								<Row gutter={16}>
									<Col span={12} md={12}>
										<CustomInput
											label=""
											name="start_age"
											type="text"
											placeholder="Start Age"
										/>
									</Col>
									<Col span={12} md={12}>
										<CustomInput
											label=""
											name="end_age"
											type="text"
											placeholder="End Age"
										/>
									</Col>
								</Row>
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
