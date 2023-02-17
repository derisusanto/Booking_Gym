import React from 'react';
import { CustomModal } from '../../../component/modal/customModal/customModal';

import FormBooking from './formBooking/formBooking';
import FormShowBooking from './formShowBooking/formShowBooking';

const Form = ({
	show,
	onHide,
	listClass,
	isFormBooking,
	onSelectClass,
	onCheckRepeat,
	onCreate
}) => {
	return (
		<CustomModal
			show={show}
			onHide={onHide}
			title={isFormBooking ? 'Create Class' : 'Details Class'}
			content={
				isFormBooking ? (
					<FormBooking
						listClass={listClass}
						onSelectClass={onSelectClass}
						onCheckRepeat={onCheckRepeat}
					/>
				) : (
					<FormShowBooking />
				)
			}
			footer={
				<div className="bottom-confirm">
					<button className="btn-cancel" onClick={onHide}>
						Close
					</button>
					<button className="btn-confirm" onClick={onCreate}>
						Save
					</button>
				</div>
			}
		/>
	);
};
export default Form;
