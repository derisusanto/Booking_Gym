import { Form, Formik } from 'formik';

import { Col, Row } from 'antd';
import CustomInput from '../../../component/formInput/customInput';
import CustomSelect from '../../../component/formInput/customSelect';
import CustomRadio from '../../../component/formInput/customRadio';
import { classSchema } from '../../../schemas/master_schema';

import './class.scss';

export const FormEditClass = ({
	onSubmit,
	onCancelForm,
	data,
	listCategory
}) => {
	return (
		<div className="card-form-input">
			<Formik
				enableReinitialize={true}
				initialValues={data}
				validationSchema={classSchema}
				onSubmit={onSubmit}
			>
				{({ isSubmitting }) => (
					<Form className="form">
						<div className="form-input-class">
							<CustomInput
								label="Class Name"
								name="nama"
								type="text"
								className="form-control"
								placeholder="class name"
							/>

							<CustomSelect
								label="Category"
								name="categoryId"
								value={data.categoryId}
								placeholder="please select one category"
								options={listCategory}
							/>

							<CustomInput
								label="Description"
								name="description"
								type="text"
								placeholder="decriptions"
							/>

							<Row gutter={16}>
								<Col span={12} md={12}>
									<CustomInput
										label="Start Age"
										name="startAge"
										type="text"
										placeholder="start Age"
									/>
								</Col>
								<Col span={12} md={12}>
									<CustomInput
										label="End Age"
										name="endAge"
										type="text"
										placeholder="end Age"
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
										value="male"
										name="gender"
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
