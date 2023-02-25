import React from 'react';
import { Form, Formik } from 'formik';
import { Col, Row } from 'antd';
import CustomInput from '../../../component/formInput/customInput';
import CustomSelect from '../../../component/formInput/customSelect';
import { listTime } from './listTime';
import { locationSchema } from '../../../schemas/master_schema';
import TitleComponent from '../../../component/titleComponent/titleComponent';
import './location.scss';

export const FormAddLocation = ({ onSubmit, onCancelForm }) => {
	return (
		<React.Fragment>
			<TitleComponent title="Location" />
			<div className="card-form-input">
				<Formik
					initialValues={{
						nama: '',
						code: '',
						startTime: '',
						endTime: '',
						alamat: ''
					}}
					validationSchema={locationSchema}
					onSubmit={onSubmit}
				>
					{({ isSubmitting }) => (
						<Form className="form">
							<div className="form-input">
								<CustomInput
									label="Location Name"
									name="nama"
									type="text"
									className="form-control"
									placeholder="location"
								/>
								<CustomInput
									label="Location Code"
									name="code"
									type="text"
									className="form-control"
									placeholder="location code"
								/>

								<CustomInput
									label="Address"
									name="alamat"
									type="text"
									placeholder="please input anddress"
								/>
								<div>
									<label>Operational Hour</label>
									<Row gutter={16}>
										<Col span={12} md={12}>
											<CustomSelect
												label=""
												name="startTime"
												type="text"
												options={listTime}
												placeholder="start time"
											/>
										</Col>
										<Col span={12} md={12}>
											<CustomSelect
												label=""
												name="endTime"
												type="text"
												options={listTime}
												placeholder="end Time"
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
		</React.Fragment>
	);
};
