import React from 'react';
import { Row, Col } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import CustomCheckbox from '../../../../component/formInput/customWithOutFormik/customCheckbox';
import CustomInput from '../../../../component/formInput/customWithOutFormik/customInput';
import CustomSelect from '../../../../component/formInput/customWithOutFormik/customSelect';

import './formBooking.scss';
import { FormatDate, FormatTime } from '../../../../utils/timeFormat';

const FormBooking = ({
	listCategory,
	listClass,
	listTrainer,
	listTime,
	startTime,
	endTime,
	onSelectRepeat,
	onSelectTrainer,
	onSelectCategory,
	onUntilDate,
	onSelectClass,
	onCheckRepeat
}) => {
	return (
		<div id="form-booking">
			<CustomSelect
				name="categoryId"
				label="Choose Category"
				placeholder="please select one class"
				onChange={onSelectCategory}
				options={listCategory}
			/>
			<CustomSelect
				name="classId"
				label="Choose Class"
				placeholder="please select one class"
				onChange={onSelectClass}
				options={listClass}
				value=""
			/>
			<CustomSelect
				name="trainerId"
				label="Choose Trainer"
				placeholder="please select one class"
				value={null}
				onChange={onSelectTrainer}
				options={listTrainer}
			/>

			<CustomCheckbox name="isRepeat" label="Repeat" onChange={onCheckRepeat} />

			<Row gutter={16}>
				<Col span={12} md={12}>
					<CustomSelect
						name="repeat"
						label="Choose Time"
						placeholder="please select one class"
						onChange={onSelectRepeat}
						options={listTime}
					/>
				</Col>
				<Col span={12} md={12}>
					<CustomInput
						label="Until Date"
						name="untilDate"
						type="date"
						className="form-control"
						placeholder="location code"
						onChange={onUntilDate}
					/>
				</Col>
			</Row>
			<div className="booking-time-info">
				<div className="icon">
					<ClockCircleOutlined style={{ fontSize: '50px', color: 'hotpink' }} />
				</div>
				<div className="booking-tim-description">
					<span>
						{FormatDate(startTime)} | {FormatTime(startTime)} -{' '}
						{FormatTime(endTime)}
					</span>
					<span>Time zone - Does not repeat</span>
				</div>
			</div>
		</div>
	);
};
export default FormBooking;
