import React, { useEffect, useState } from 'react';
import TableComponent from '../../../component/table/TableData';
import './location.scss';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import { FormEditLocation } from './formEditLocation';
import { FormAddLocation } from './formAddLocation';
import {
	listLocation,
	createLocation,
	deleteLocation,
	getLocationById,
	putLocation
} from '../../../service/master';

import { ICON } from '../../../assets/icons/icons';
import { message } from 'antd';

const Location = () => {
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			render: (value, item, index) => (page - 1) * 10 + index + 1
		},
		{
			title: 'location',
			dataIndex: 'location'
		},

		{
			title: 'Operational Hour',
			dataIndex: 'operationalHour'
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
							showLocation(item.id);
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

	const [dataLocation, setDataLocation] = useState([]);
	const [dataLocationById, setDataLocationById] = useState({});
	const [page, setPage] = useState(1);

	const initialState = {
		addLocation: false,
		editLocation: false,
		hidden: false
	};

	const [state, setState] = useState({
		addLocation: false,
		editLocation: false,
		hidden: false
	});

	const [query, setQuery] = useState('');
	const keys = ['location'];
	const search = data => {
		return data.filter(item =>
			keys.some(key => item[key].toLowerCase().includes(query))
		);
	};

	useEffect(() => {
		getlistLocation();
	}, []);

	const addLocation = () => {
		setState(prevState => ({
			...prevState,
			addLocation: !prevState.addLocation,
			hidden: !prevState.hidden
		}));
	};

	const getlistLocation = () => {
		listLocation()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						id: item.id,
						location: item.nama,
						operationalHour: `${item.startTime} - ${item.endTime}`
					}));
					setDataLocation(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onSubmit = (values, actions) => {
		createLocation(values)
			.then(res => {
				if (res.status === 201) {
					actions.resetForm();
					actions.setSubmitting(false);
					setState(initialState);
					message.success('Add Class Success');
					getlistLocation();
				}
			})
			.catch(err => {
				actions.setSubmitting(false);
				message.error(`${err.response?.data?.message}`);
			});
	};
	const showLocation = idLocation => {
		getLocationById(idLocation)
			.then(res => {
				if (res.status === 200) {
					const data = res.data.data;

					setDataLocationById({
						id: data.id,
						nama: data.nama,
						code: data.code,
						alamat: data.alamat,
						startTime: data.startTime,
						endTime: data.endTime
					});
					setState(prevState => ({
						...prevState,
						editLocation: true,
						hidden: true
					}));
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onPut = (values, actions) => {
		putLocation(dataLocationById.id, values)
			.then(res => {
				if (res.status === 200) {
					getlistLocation();
					setState(initialState);
					message.success(`Edit Location Success`);
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
		deleteLocation(id)
			.then(res => {
				if (res.status === 200) {
					message.error('Location Deleted');
					getlistLocation();
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
			<div id="location" className={state.hidden ? 'd-none' : 'location'}>
				<CustomInputHeader
					content={
						<React.Fragment>
							<button className="btn" onClick={addLocation}>
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
					dataSource={search(dataLocation)}
					pagination={{
						onChange: e => setPage(e),
						showSizeChanger: true
					}}
				/>
			</div>
			{state.addLocation && (
				<FormAddLocation
					onCancelForm={onCancelForm}
					onSubmit={e => onSubmit(e)}
				/>
			)}
			{state.editLocation && (
				<FormEditLocation
					data={dataLocationById}
					onSubmit={onPut}
					onCancelForm={onCancelForm}
				/>
			)}
		</React.Fragment>
	);
};
export default Location;
