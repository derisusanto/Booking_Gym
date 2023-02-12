import { Form, Formik } from 'formik';
import { oneSchema } from '../../schemas/index';

import CustomInput from '../../component/formInput/customInput';

import './customHeader.scss';

const CustomInputHeader = ({ content, position }) => {
	return (
		<div className={`header-component ${position}`}>
			{content}
			{/* <Formik
				initialValues={{ data: '' }}
				validationSchema={oneSchema}
				onSubmit={onInput}
			>
				{({ isSubmitting }) => (
					<Form className="custom-input">
						<CustomInput
							name="data"
							type="text"
							className="form-control"
							placeholder={placeholder}
						/>

						<button
							disabled={isSubmitting}
							type="submit"
							className="btn-signin"
						>
							{isSubmitting ? 'Loading ..' : 'Save'}
						</button>
					</Form>
				)}
			</Formik> */}
		</div>
	);
};
export default CustomInputHeader;
