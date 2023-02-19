import React, { useState, useEffect } from 'react';
import TableComponent from '../../../component/table/TableData';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import { message } from 'antd';
import { ICON } from '../../../assets/icons/icons';

import { listEvent } from '../../../service/master';

import './infoEvent.scss';
import { SimpleCurrency } from '../../../utils/simpleCurrency';
import { memberRegistEvent } from '../../../service/member';
import { DetailEvent } from './detailEvent/detailEvent';

const InfoEventMember = () => {
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
			render: (record, item, index) => (
				<div className="action-button">
					<ICON.EDIT width={30} onClick={() => showDetailEvent(index)} />
				</div>
			)
		}
	];

	const initialState = {
		showEvent: false,
		hidden: false
	};

	const [state, setState] = useState({
		showEvent: false
	});

	const [dataEvent, setDataEvent] = useState([]);
	const [detailEvent, setDetailEvent] = useState({});
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
		listEvent()
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

	const showDetailEvent = index => {
		let tempEvent = [...dataEvent];
		setDetailEvent(tempEvent[index]);
		setState(prevState => ({
			...prevState,
			showEvent: !prevState.showEvent
		}));
	};

	const registEvent = eventId => {
		const memberId = localStorage.getItem('userId');
		const data = {
			memberId: memberId,
			eventId: eventId
		};
		memberRegistEvent(data)
			.then(res => {
				if (res.status === 200) {
					message.success('Registered Event Success');
					getlistEvent();
					setState({ ...state, showEvent: false });
				}
			})
			.catch(err => {
				message.error('Regstered Event Failed');
				console.log(err);
			});
	};

	return (
		<React.Fragment>
			<div className="info-event" id="info-event">
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
			{state.showEvent && (
				<DetailEvent
					show={state.showEvent}
					data={detailEvent}
					onHide={() => setState({ ...state, showEvent: false })}
					onRegister={registEvent}
				/>
			)}
		</React.Fragment>
	);
};
export default InfoEventMember;
