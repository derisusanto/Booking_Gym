import { Form, Formik } from 'formik';

import CustomInput from '../../../component/formInput/customInput';
import { roleSchema } from '../../../schemas/setting';

import './role.scss';

export const FormAddRole = ({ onSubmit, onCancelForm, listCategory }) => {
	return (
		<div className="card-form-input">
			<Formik
				initialValues={{
					nama: '',
					descritions: ''
				}}
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
