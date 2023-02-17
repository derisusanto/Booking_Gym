import { Form, Formik } from 'formik';

import { Col, Row } from 'antd';
import CustomInput from '../../../component/formInput/customInput';
import CustomSelect from '../../../component/formInput/customSelect';
import { userSchema } from '../../../schemas/setting';

import './user.scss';

export const FormAddUser = ({ onSubmit, onCancelForm, listLocation }) => {
	return (
		<div className="card-form-input">
			<Formik
				initialValues={{
					nama: '',
					email: '',
					phoneNumber: '',
					locationId: ''
				}}
				validationSchema={userSchema}
				onSubmit={onSubmit}
			>
				{({ isSubmitting }) => (
					<Form className="form">
						<div className="form-input-class">
							<CustomInput
								label="Name"
								name="nama"
								type="text"
								className="form-control"
								placeholder="class name"
							/>
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
									<CustomInput
										label="Phone Number"
										name="phoneNumber"
										type="text"
										placeholder="phone number"
									/>
								</Col>
							</Row>

							<CustomSelect
								label="Location"
								name="locationId"
								placeholder="please select one location"
								options={listLocation}
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
