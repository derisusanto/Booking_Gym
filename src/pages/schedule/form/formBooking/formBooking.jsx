import React from 'react';
import { Row, Col } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import CustomCheckbox from '../../../../component/formInput/customWithOutFormik/customCheckbox';
import CustomInput from '../../../../component/formInput/customWithOutFormik/customInput';
import CustomSelect from '../../../../component/formInput/customWithOutFormik/customSelect';

import './formBooking.scss';

const FormBooking = ({ listClass, onSelectClass, onCheckRepeat }) => {
	return (
		<div id="form-booking">
			<CustomSelect
				name="categoryId"
				label="Choose Category"
				placeholder="please select one class"
				onChange={onSelectClass}
				options={listClass}
			/>
			<CustomSelect
				name="classId"
				label="Choose Class"
				placeholder="please select one class"
				onChange={onSelectClass}
				options={listClass}
			/>

			<CustomCheckbox name="repeat" label="Repeat" onChange={onCheckRepeat} />

			<Row gutter={16}>
				<Col span={12} md={12}>
					<CustomSelect
						name="classId"
						label="Choose Class"
						placeholder="please select one class"
						onChange={onSelectClass}
						options={listClass}
					/>
				</Col>
				<Col span={12} md={12}>
					<CustomInput
						label="Location Code"
						name="date"
						type="date"
						className="form-control"
						placeholder="location code"
					/>
				</Col>
			</Row>
			<div className="booking-time-info">
				<div className="icon">
					<ClockCircleOutlined style={{ fontSize: '50px', color: 'hotpink' }} />
				</div>
				<div className="booking-tim-description">
					<span>Thursday. December 5 12:00pm - 1:00pm</span>
					<span>Time zone - Does not repeat</span>
				</div>
			</div>
		</div>
	);
};
export default FormBooking;
