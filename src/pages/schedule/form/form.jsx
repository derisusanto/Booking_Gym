import React from 'react';
import { Popconfirm } from 'antd';
import { CustomModal } from '../../../component/modal/customModal/customModal';

import FormBooking from './formBooking/formBooking';
import FormShowBooking from './formShowBooking/formShowBooking';

const Form = ({
	show,
	onHide,
	listCategory,
	listClass,
	listTrainer,
	listTime,
	startTime,
	endTime,
	isFormBooking,
	onSelectRepeat,
	onSelectTrainer,
	onSelectCategory,
	onUntilDate,
	onSelectClass,
	onCheckRepeat,
	onCreate,
	listMember,
	onCheckMember,
	onSetMember,
	members,
	detailSchedule,
	deleteMemberOnSchedule,
	isLoadingForm,
	onDeleteSchedule
}) => {
	return (
		<CustomModal
			show={show}
			onHide={onHide}
			title={isFormBooking ? 'Create Class' : 'Details Class'}
			content={
				isFormBooking ? (
					<FormBooking
						listCategory={listCategory}
						listClass={listClass}
						listTrainer={listTrainer}
						listTime={listTime}
						startTime={startTime}
						endTime={endTime}
						onSelectCategory={onSelectCategory}
						onSelectRepeat={onSelectRepeat}
						onSelectTrainer={onSelectTrainer}
						onUntilDate={onUntilDate}
						onSelectClass={onSelectClass}
						onCheckRepeat={onCheckRepeat}
					/>
				) : (
					<FormShowBooking
						listMember={listMember}
						onCheckMember={onCheckMember}
						onSetMember={onSetMember}
						detailSchedule={detailSchedule}
						members={members}
						deleteMemberOnSchedule={deleteMemberOnSchedule}
						isLoadingForm={isLoadingForm}
					/>
				)
			}
			footer={
				isFormBooking ? (
					<div className="bottom-confirm">
						<button className="btn-cancel" onClick={onHide}>
							Close
						</button>

						<button className="btn-confirm" onClick={onCreate}>
							Save
						</button>
					</div>
				) : (
					<div className="bottom-confirm">
						<Popconfirm
							title="Delete the task"
							description="Are you sure to delete this task?"
							okText="OK"
							cancelText="No"
							onConfirm={() => onDeleteSchedule(detailSchedule.scheduleId)}
						>
							<button className="btn-delete">Delete</button>
						</Popconfirm>

						<button className="btn-confirm" onClick={onHide}>
							Save
						</button>
					</div>
				)
			}
		/>
	);
};
export default Form;
