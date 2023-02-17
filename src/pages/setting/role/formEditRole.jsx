import { Form, Formik } from 'formik';

import CustomInput from '../../../component/formInput/customInput';

import './role.scss';
import { roleSchema } from '../../../schemas/setting';

export const FormEditRole = ({ onSubmit, onCancelForm, data }) => {
	return (
		<div className="card-form-input">
			<Formik
				initialValues={data}
				enableReinitialize={true}
				validationSchema={roleSchema}
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

							<CustomInput
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
