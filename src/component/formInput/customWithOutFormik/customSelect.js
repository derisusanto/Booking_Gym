import React from 'react';
import { Select } from 'antd';
import { IsNullOrEmpty } from '../../../utils/IsNullOrEmpety';

const CustomSelect = ({ label, onChange, options = [], value }) => {
	return (
		<div className="form-input" id="form-select">
			<label>{label}</label>
			<Select
				showSearch
				placeholder="Select a person"
				optionFilterProp="children"
				onChange={onChange}
				onSearch={onChange}
				// value={value}
				filterOption={(input, option) =>
					(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
				}
				options={options}
			/>
		</div>
	);
};
export default CustomSelect;
