import React, { useState } from 'react';
import TableComponent from '../../../component/table/TableData';
import './location.scss';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import { FormEditLocation } from './formEditLocation';
import { FormAddLocation } from './formAddLocation';

const Location = () => {
	const [state, setState] = useState({
		addLocation: false,
		editLocation: false,
		hidden: false
	});

	const addLocation = () => {
		setState(prevState => ({
			...prevState,
			addLocation: !prevState.addLocation,
			hidden: !prevState.hidden
		}));
	};

	const showLocation = e => {
		setState(prevState => ({
			...prevState,
			editLocation: true,
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
			<div id="location" className={state.hidden ? 'd-none' : 'location'}>
				<CustomInputHeader
					content={
						<React.Fragment>
							<button className="btn" onClick={addLocation}>
								New
							</button>
							<input type="search" placeholder="Search" />
						</React.Fragment>
					}
				/>

				<TableComponent />
			</div>
			{state.addLocation && (
				<FormAddLocation
					onCancelForm={onCancelForm}
					onSubmit={e => onSubmit(e)}
				/>
			)}
			{state.editLocation && (
				<FormEditLocation onSubmit={onPut} onCancelForm={onCancelForm} />
			)}
		</React.Fragment>
	);
};
export default Location;
