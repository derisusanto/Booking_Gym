import React, { useState, useEffect } from 'react';
import TableComponent from '../../../component/table/TableData';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import { FormAddEvent } from './formAddEvent';
import { FormEditEvent } from './formEditEvent';

import { message } from 'antd';
import { ICON } from '../../../assets/icons/icons';

import {
	createEvent,
	getEventById,
	listEvent,
	putEvent,
	deleteEvent
} from '../../../service/master';

import './event.scss';
import { SimpleCurrency } from '../../../utils/simpleCurrency';
import TitleComponent from '../../../component/titleComponent/titleComponent';

const Event = () => {
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
							showEvent(item.id);
						}}
					/>
					<ICON.DELETE
						width={30}
						onClick={() => {
							onDelete(item.id);
						}}
					/>
				</div>
			)
		}
	];

	const initialState = {
		addEvent: false,
		editEvent: false,
		hidden: false
	};

	const [state, setState] = useState({
		addEvent: false,
		editEvent: false,
		hidden: false
	});

	const [dataEvent, setDataEvent] = useState([]);
	const [dataEventById, setDataEventById] = useState({});
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
						price: SimpleCurrency(item.biaya)
					}));
					setDataEvent(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const addEvent = () => {
		setState(prevState => ({
			...prevState,
			addEvent: !prevState.addEvent,
			hidden: !prevState.hidden
		}));
	};

	const onSubmit = (values, actions) => {
		createEvent(values)
			.then(res => {
				if (res.status === 201) {
					getlistEvent();
					setState(initialState);
					message.success('Add Event Success');
					actions.resetForm();
					actions.setSubmitting(false);
				}
			})
			.catch(err => {
				message.error(`${err?.message}`);
				actions.setSubmitting(false);
			});
	};

	const showEvent = idEvent => {
		getEventById(idEvent)
			.then(res => {
				if (res.status === 200) {
					const data = res.data.data;

					setDataEventById({
						id: data.id,
						nama: data.nama,
						startDate: data.startDate,
						endDate: data.endDate,
						biaya: data.biaya,
						lokasi: data.lokasi,
						description: data.description
					});
					setState(prevState => ({
						...prevState,
						editClass: true,
						hidden: true
					}));
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onPut = (values, actions) => {
		putEvent(dataEventById.id, values)
			.then(res => {
				if (res.status === 200) {
					getlistEvent();
					setState(initialState);
					message.success(`Edit Event Success`);
					actions.resetForm();
					actions.setSubmitting(false);
				}
			})
			.catch(err => {
				message.error(`${err.response?.data?.message}`);
				actions.setSubmitting(false);
			});
	};

	const onDelete = id => {
		deleteEvent(id)
			.then(res => {
				if (res.status === 200) {
					message.error('Event Deleted');
					getlistEvent();
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onCancelForm = () => {
		setState({
			addEvent: false,
			editClass: false,
			hidden: false
		});
	};

	return (
		<React.Fragment>
			<div className={state.hidden ? 'd-none' : 'event'} id="event">
				<TitleComponent title="Event" />
				<CustomInputHeader
					content={
						<React.Fragment>
							<button className="btn" onClick={addEvent}>
								New
							</button>
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
			{state.addEvent && (
				<FormAddEvent
					onCancelForm={onCancelForm}
					listCategory={[]}
					onSubmit={onSubmit}
				/>
			)}
			{state.editClass && (
				<FormEditEvent
					data={dataEventById}
					onCancelForm={onCancelForm}
					onSubmit={onPut}
				/>
			)}
		</React.Fragment>
	);
};
export default Event;
