import React, { useState } from 'react';
import TableComponent from '../../../component/table/TableData';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import './member.scss';

const NewRegister = () => {
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
		}
	];

	const [state, setState] = useState({
		addClass: false,
		editClass: false,
		hidden: false
	});

	const addClass = () => {
		setState(prevState => ({
			...prevState,
			addClass: !prevState.addClass,
			hidden: !prevState.hidden
		}));
	};
	return (
		<React.Fragment>
			<div className={state.hidden ? 'd-none' : 'member'} id="class">
				<CustomInputHeader
					position="one-right"
					content={
						<React.Fragment>
							{/* <button className="btn" onClick={addClass}>
								New
							</button> */}
							<input type="search" placeholder="Search" />
						</React.Fragment>
					}
				/>
				<TableComponent columns={columns} />
			</div>
		</React.Fragment>
	);
};
export default NewRegister;
