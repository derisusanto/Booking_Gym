import { useField } from 'formik';
import './formInput.scss';
import { Input } from 'antd';
const CustomTextArea = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className="form-input" id="form-input-textarea">
			<label>{label}</label>
			<Input.TextArea
				{...field}
				{...props}
				className={meta.touched && meta.error ? 'input-error' : ''}
			/>

			{meta.touched && meta.error && <div className="error">{meta.error}</div>}
		</div>
	);
};
export default CustomTextArea;
