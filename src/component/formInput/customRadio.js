import { useField } from 'formik';
import { Radio } from 'antd';
import { IsNullOrEmpty } from '../../utils/IsNullOrEmpety';

const CustomRadio = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<div className="checkbox">
				<label>{label}</label>
				<Radio
					{...field}
					{...props}
					// onChange={getFieldProps('currState').onChange}
					// onChange={e => setValue(e, `${props.name}`)}
					className={meta.touched && meta.error ? 'input-error' : ''}
				/>
				{/* <span>I accept the terms of service</span> */}
			</div>

			{/* {meta.touched && meta.error && <div className="error">{meta.error}</div>} */}
		</>
	);
};
export default CustomRadio;
