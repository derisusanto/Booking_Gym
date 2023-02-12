import { Form, Formik } from 'formik';

import CustomInput from '../../../component/formInput/customInput';
import CustomSelect from '../../../component/formInput/customSelect';
import { roomSchema } from '../../../schemas/master_schema';

import './room.scss';

export const FormEditRoom = ({ onSubmit, onCancelForm }) => {
	return (
		<div className="card-form-input">
			<Formik
				initialValues={{
					name: '',
					type: '',
					capacity: '',
					location: ''
				}}
				validationSchema={roomSchema}
				onSubmit={onSubmit}
			>
				{({ isSubmitting }) => (
					<Form className="form">
						<div className="form-input-room">
							<CustomInput
								label="Name"
								name="name"
								type="text"
								className="form-control"
								placeholder="Name"
							/>

							<CustomInput
								label="Type"
								name="type"
								type="text"
								placeholder="Type"
							/>
							<CustomInput
								label="Capacity"
								name="capacity"
								type="text"
								placeholder="Capacity"
							/>
							<CustomSelect
								label="Location"
								name="location"
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
