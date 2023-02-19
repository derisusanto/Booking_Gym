import React from 'react';
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
	deleteMemberOnSchedule
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
					/>
				)
			}
			footer={
				<div className="bottom-confirm">
					<button className="btn-cancel" onClick={onHide}>
						Close
					</button>
					{isFormBooking ? (
						<button className="btn-confirm" onClick={onCreate}>
							Save
						</button>
					) : (
						<button className="btn-confirm" onClick={onHide}>
							Save
						</button>
					)}
				</div>
			}
		/>
	);
};
export default Form;
