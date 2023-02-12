import React from 'react';
import { ICON } from '../../../assets/icons/icons';

import TableComponent from '../../../component/table/TableData';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import './category.scss';

const Category = () => {
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
							// showClass(record);
						}}
					/>
					<ICON.DELETE
						width={30}
						onClick={() => {
							// onDelete(record);
						}}
					/>
				</div>
			)
		}
	];

	const onSubmit = values => {
		// e.preventDefault();
		console.log(values);
	};
	return (
		<React.Fragment>
			<div id="category">
				<CustomInputHeader
					content={
						<React.Fragment>
							<input type="text" placeholder="create new category" />
							<button className="btn" type="submit" onClick={onSubmit}>
								Save
							</button>
						</React.Fragment>
					}
				/>
				<div className="search-input">
					<input type="search" className="search" placeholder="search" />
				</div>
				<TableComponent columns={columns} />
			</div>
		</React.Fragment>
	);
};
export default Category;
