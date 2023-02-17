import '../formInput.scss';
import { Input } from 'antd';
const CustomInput = ({ label, ...props }) => {
	return (
		<div className="form-input" id="form-input">
			<label>{label}</label>
			<Input
				{...props}
				// className={meta.touched && meta.error ? 'input-error' : ''}
			/>

			{/* {meta.touched && meta.error && <div className="error">{meta.error}</div>} */}
		</div>
	);
};
export default CustomInput;
