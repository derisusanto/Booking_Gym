import { useField } from 'formik';
import './formInput.scss';
import { Select } from 'antd';

const CustomSelect = ({ label, ...props }) => {
	const [field, meta, helpers] = useField(props);
	const { setValue } = helpers;

	return (
		<div className="form-input" id="form-select">
			<label>{label}</label>
			<Select
				{...field}
				{...props}
				placeholder={props.placeholder}
				options={props.options}
				onChange={e => setValue(e, `${props.name}`)}
				showSearch
				value={props.value ? props.value : undefined}
				onBlur={meta.touched}
				optionFilterProp="children"
				filterOption={(input, option) => (option?.label ?? '').includes(input)}
				filterSort={(optionA, optionB) =>
					(optionA?.label ?? '')
						.toLowerCase()
						.localeCompare((optionB?.label ?? '').toLowerCase())
				}
				// className={meta.touched && meta.error ? 'input-error' : ''}
			/>
			{meta.touched && meta.error && <div className="error">{meta.error}</div>}
		</div>
	);
};
export default CustomSelect;
