import React, { useState } from 'react';
import TableComponent from '../../../component/table/TableData';
import './room.scss';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import { FormEditRoom } from './formEditRoom';
import { FormAddRoom } from './formAddRoom';

const Room = () => {
	const [state, setState] = useState({
		addRoom: false,
		editRoom: false,
		hidden: false
	});

	const addRoom = () => {
		setState(prevState => ({
			...prevState,
			addRoom: !prevState.addRoom,
			hidden: !prevState.hidden
		}));
	};

	const showRoom = e => {
		setState(prevState => ({
			...prevState,
			editRoom: true,
			hidden: true
		}));
	};

	const onSubmit = values => {
		// e.preventDefault();
		console.log(values);
	};
	const onPut = values => {
		console.log(values);
	};

	const onDelete = values => {
		console.log(values);
	};

	const onCancelForm = () => {
		setState({
			addClass: false,
			editClass: false,
			hidden: false
		});
	};
	return (
		<React.Fragment>
			<div id="room" className={state.hidden ? 'd-none' : 'room'}>
				<CustomInputHeader
					content={
						<React.Fragment>
							<button className="btn" onClick={addRoom}>
								New
							</button>
							<input type="search" placeholder="Search" />
						</React.Fragment>
					}
				/>

				<TableComponent />
			</div>
			{state.addRoom && (
				<FormAddRoom onCancelForm={onCancelForm} onSubmit={e => onSubmit(e)} />
			)}
			{state.editRoom && (
				<FormEditRoom onSubmit={onPut} onCancelForm={onCancelForm} />
			)}
		</React.Fragment>
	);
};
export default Room;
