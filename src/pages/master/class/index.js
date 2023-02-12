import React, { useState } from 'react';
import TableComponent from '../../../component/table/TableData';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import { FormEditClass } from './formEditClass';
import { FormAddClass } from './formAddClass';

import './class.scss';
import { ICON } from '../../../assets/icons/icons';
const Class = () => {
	const columns = [
		{
			title: 'No',
			dataIndex: 'key'
			// render: (value, item, index) => (page - 1) * 10 + index + 1
		},

		{
			title: 'Name',
			dataIndex: 'name'
		},
		{
			title: 'Class Name',
			dataIndex: 'tweakPoint',
			sorter: {
				compare: (a, b) => a.tweakPoint - b.tweakPoint,
				multiple: 3
			},
			responsive: ['md']
		},
		{
			title: 'Action',
			dataIndex: 'id',
			key: 'x',
			responsive: ['sm'],
			align: 'center',
			render: record => (
				<div
					style={{
						display: 'flex',
						gap: '10px',
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<ICON.EDIT
						width={30}
						onClick={() => {
							showClass(record);
						}}
					/>
					<ICON.DELETE
						width={30}
						onClick={() => {
							onDelete(record);
						}}
					/>
				</div>
			)
		}
	];

	const [state, setState] = useState({
		addClass: false,
		editClass: false,
		hidden: false
	});

	const [dataClass, setDataClass] = useState({
		email: 'deri@gmail.com',
		password: '1234Aa'
	});

	const addClass = () => {
		setState(prevState => ({
			...prevState,
			addClass: !prevState.addClass,
			hidden: !prevState.hidden
		}));
	};

	const showClass = e => {
		console.log(e);
		setState(prevState => ({
			...prevState,
			editClass: true,
			hidden: true
		}));
	};

	const onSubmit = (values, action) => {
		console.log('sini');
		console.log('values', values);
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
			<div className={state.hidden ? 'd-none' : 'class'} id="class">
				<CustomInputHeader
					content={
						<React.Fragment>
							<button className="btn" onClick={addClass}>
								New
							</button>
							<input type="search" placeholder="Search" />
						</React.Fragment>
					}
				/>
				<TableComponent columns={columns} />
			</div>
			{state.addClass && (
				<FormAddClass onCancelForm={onCancelForm} onSubmit={e => onSubmit(e)} />
			)}
			{state.editClass && (
				<FormEditClass onSubmit={onPut} onCancelForm={onCancelForm} />
			)}
		</React.Fragment>
	);
};
export default Class;
