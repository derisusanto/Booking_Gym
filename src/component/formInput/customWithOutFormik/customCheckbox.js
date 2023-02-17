import { Checkbox } from 'antd';

const CustomCheckbox = ({ onChange, label }) => {
	return (
		<div className="checkbox">
			<Checkbox onChange={onChange}>{label}</Checkbox>
		</div>
	);
};
export default CustomCheckbox;
