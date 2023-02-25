import React, { useState, useEffect } from 'react';
import TableComponent from '../../../component/table/TableData';
import './room.scss';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';
import { ICON } from '../../../assets/icons/icons';
import { message } from 'antd';

import { FormEditRoom } from './formEditRoom';
import { FormAddRoom } from './formAddRoom';
import {
	createRoom,
	deleteRoom,
	getRoomById,
	listLocation,
	listRoom,
	putRoom
} from '../../../service/master';
import TitleComponent from '../../../component/titleComponent/titleComponent';

const Room = () => {
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			render: (value, item, index) => (page - 1) * 10 + index + 1
		},
		{
			title: 'Room',
			dataIndex: 'room'
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
							showRoom(item.id);
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

	const [dataRoom, setDataRoom] = useState([]);
	const [dataLocation, setDataLocation] = useState([]);
	const [dataRoomById, setDataRoomById] = useState({});
	const [page, setPage] = useState(1);

	const initialState = {
		addRoom: false,
		editRoom: false,
		hidden: false
	};

	const [state, setState] = useState({
		addRoom: false,
		editRoom: false,
		hidden: false
	});

	const [query, setQuery] = useState('');
	const keys = ['room'];
	const search = data => {
		return data.filter(item =>
			keys.some(key => item[key].toLowerCase().includes(query))
		);
	};

	useEffect(() => {
		getlistRoom();
		getlistLocation();
	}, []);

	const addRoom = () => {
		setState(prevState => ({
			...prevState,
			addRoom: !prevState.addRoom,
			hidden: !prevState.hidden
		}));
	};

	const getlistLocation = () => {
		listLocation()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map(item => ({
						value: item.id,
						label: item.nama
					}));
					setDataLocation(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const getlistRoom = () => {
		listRoom()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						id: item.id,
						room: item.nama
					}));
					setDataRoom(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onSubmit = (values, actions) => {
		createRoom(values)
			.then(res => {
				if (res.status === 201) {
					actions.resetForm();
					actions.setSubmitting(false);
					setState(initialState);
					message.success('Add Room Success');
					getlistRoom();
				}
			})
			.catch(err => {
				console.log(err);
				actions.setSubmitting(false);
			});
	};

	const showRoom = idRoom => {
		getRoomById(idRoom)
			.then(res => {
				if (res.status === 200) {
					const data = res.data.data;

					setDataRoomById({
						id: data.id,
						nama: data.nama,
						type: data.type,
						capacity: data.capacity,
						locationId: data.location?.id
					});
					setState(prevState => ({
						...prevState,
						editRoom: true,
						hidden: true
					}));
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onPut = (values, actions) => {
		putRoom(dataRoomById.id, values)
			.then(res => {
				if (res.status === 200) {
					getlistRoom();
					setState(initialState);
					message.success(`Edit Room Success`);
					actions.resetForm();
					actions.setSubmitting(false);
				}
			})
			.catch(err => {
				actions.setSubmitting(false);
				message.error(`${err.response?.data?.message}`);
			});
	};

	const onDelete = id => {
		deleteRoom(id)
			.then(res => {
				if (res.status === 200) {
					message.error('Room Deleted');
					getlistRoom();
				}
			})
			.catch(err => {
				console.log(err);
			});
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
				<TitleComponent title="Room" />
				<CustomInputHeader
					content={
						<React.Fragment>
							<button className="btn" onClick={addRoom}>
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
					dataSource={search(dataRoom)}
					pagination={{
						onChange: e => setPage(e),
						showSizeChanger: true
					}}
				/>
			</div>
			{state.addRoom && (
				<FormAddRoom
					onCancelForm={onCancelForm}
					onSubmit={onSubmit}
					listLocation={dataLocation}
				/>
			)}
			{state.editRoom && (
				<FormEditRoom
					data={dataRoomById}
					listLocation={dataLocation}
					onSubmit={onPut}
					onCancelForm={onCancelForm}
				/>
			)}
		</React.Fragment>
	);
};
export default Room;
