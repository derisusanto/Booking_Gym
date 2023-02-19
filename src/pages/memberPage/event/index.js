import React, { useState, useEffect } from 'react';
import TableComponent from '../../../component/table/TableData';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import { ICON } from '../../../assets/icons/icons';

import './event.scss';
import { SimpleCurrency } from '../../../utils/simpleCurrency';
import { listEventMemberById } from '../../../service/member';

const EventMember = () => {
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			render: (value, item, index) => (page - 1) * 10 + index + 1
		},

		{
			title: 'Event',
			dataIndex: 'event'
		},
		{
			title: 'Start Date',
			dataIndex: 'startDate'
		},
		{
			title: 'End Date',
			dataIndex: 'endDate'
		},
		{
			title: 'Price',
			dataIndex: 'price',
			render: (record, item) => <span>Rp {item.price}</span>
		},
		{
			title: 'Description',
			dataIndex: 'description'
		},

		{
			title: 'Action',
			dataIndex: 'id',
			key: 'x',
			responsive: ['sm'],
			align: 'center',
			render: (record, item) => (
				<div className="action-button">
					<ICON.EDIT
						width={30}
						onClick={() => {
							// showEvent(item.id);
						}}
					/>
				</div>
			)
		}
	];

	const userId = localStorage.getItem('userId');
	const [dataEvent, setDataEvent] = useState([]);
	const [page, setPage] = useState(1);

	const [query, setQuery] = useState('');
	const keys = ['event'];
	const search = data => {
		return data.filter(item =>
			keys.some(key => item[key].toLowerCase().includes(query))
		);
	};

	useEffect(() => {
		getlistEvent();
	}, []);

	const getlistEvent = () => {
		listEventMemberById(userId)
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						id: item.id,
						event: item.nama,
						startDate: item.startDate,
						endDate: item.endDate,
						price: SimpleCurrency(item.biaya),
						description: item.description
					}));
					setDataEvent(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<React.Fragment>
			<div className="event" id="event">
				<CustomInputHeader
					position="one-right"
					content={
						<React.Fragment>
							<input
								type="search"
								placeholder="Search"
								value={query}
								onChange={e => setQuery(e.target.value.toLowerCase())}
							/>
						</React.Fragment>
					}
				/>
				<TableComponent
					columns={columns}
					dataSource={search(dataEvent)}
					pagination={{
						// pageSize: 25,
						onChange: e => setPage(e),
						showSizeChanger: true
						// onChangePage(current) {
						// 	setPage(current + 1);
						// }
					}}
				/>
			</div>
		</React.Fragment>
	);
};
export default EventMember;
