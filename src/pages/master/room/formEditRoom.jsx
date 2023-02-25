import { Form, Formik } from 'formik';
import React from 'react';

import CustomInput from '../../../component/formInput/customInput';
import CustomSelect from '../../../component/formInput/customSelect';
import TitleComponent from '../../../component/titleComponent/titleComponent';
import { roomSchema } from '../../../schemas/master_schema';

import './room.scss';

export const FormEditRoom = ({
	onSubmit,
	onCancelForm,
	listLocation,
	data
}) => {
	return (
		<React.Fragment>
			<TitleComponent title="Edit Room" />

			<div className="card-form-input">
				<Formik
					enableReinitialize={true}
					initialValues={data}
					validationSchema={roomSchema}
					onSubmit={onSubmit}
				>
					{({ isSubmitting }) => (
						<Form className="form">
							<div className="form-input-room">
								<CustomInput
									label="Room Name"
									name="nama"
									type="text"
									className="form-control"
									placeholder="room name"
								/>

								<CustomInput
									label="Room Type"
									name="type"
									type="text"
									placeholder="room type"
								/>
								<CustomInput
									label="Capacity"
									name="capacity"
									type="text"
									placeholder="capacity"
								/>
								<CustomSelect
									label="Location"
									name="locationId"
									value={data.locationId}
									placeholder="please select location"
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
		</React.Fragment>
	);
};
