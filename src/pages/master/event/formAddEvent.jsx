import { Form, Formik } from 'formik';

import { Col, Row } from 'antd';
import CustomTextArea from '../../../component/formInput/customTextArea';
import CustomInput from '../../../component/formInput/customInput';

import { eventSchema } from '../../../schemas/master_schema';
import './event.scss';

export const FormAddEvent = ({ onSubmit, onCancelForm }) => {
	return (
		<div className="card-form-input">
			<Formik
				initialValues={{
					nama: '',
					startDate: '',
					endDate: '',
					biaya: '',
					lokasi: '',
					description: ''
				}}
				validationSchema={eventSchema}
				onSubmit={onSubmit}
			>
				{({ isSubmitting }) => (
					<Form className="form">
						<div className="form-input-class">
							<CustomInput
								label="Event Name"
								name="nama"
								type="text"
								className="form-control"
								placeholder="event name"
							/>

							<Row gutter={16}>
								<Col span={12} md={12}>
									<CustomInput
										label="Start Date"
										name="startDate"
										type="date"
										className="form-control"
										placeholder="start date"
									/>
								</Col>
								<Col span={12} md={12}>
									<CustomInput
										label="End Date"
										name="endDate"
										type="date"
										className="form-control"
										placeholder="end date"
									/>
								</Col>
							</Row>

							<Row gutter={16}>
								<Col span={12} md={12}>
									<CustomInput
										label="Price"
										name="biaya"
										type="text"
										className="form-control"
										placeholder="IDR ..."
									/>
								</Col>
								<Col span={12} md={12}>
									<CustomInput
										label="Location"
										name="lokasi"
										type="text"
										className="form-control"
										placeholder="location"
									/>
								</Col>
							</Row>

							<CustomTextArea
								label="Description"
								name="description"
								type="text"
								placeholder="decriptions"
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
