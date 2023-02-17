import React from 'react';
import { Select } from 'antd';

const CustomSelect = ({ label, onChange, options = [] }) => {
	return (
		<div className="form-input" id="form-select">
			<label>{label}</label>
			<Select
				showSearch
				placeholder="Select a person"
				optionFilterProp="children"
				onChange={onChange}
				onSearch={onChange}
				// value={!IsNullOrEmpty(value) ? value : undefined}
				filterOption={(input, option) =>
					(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
				}
				options={options}
			/>
		</div>
	);
};
export default CustomSelect;
