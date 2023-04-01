import React, { useState, useEffect } from 'react';
import TableComponent from '../../../component/table/TableData';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import { FormEditUser } from './formEditUser';
import { FormAddUser } from './formAddUser';
import { message } from 'antd';
import { ICON } from '../../../assets/icons/icons';

import { listLocation } from '../../../service/master';
import {
	createUser,
	deleteUser,
	getUserById,
	listUser,
	listUserLocation,
	putUser
} from '../../../service/setting';

import './user.scss';

const User = () => {
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			render: (value, item, index) => (page - 1) * 10 + index + 1
		},

		{
			title: 'User',
			dataIndex: 'user'
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
							showUser(item.id);
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
		addUser: false,
		editUser: false,
		hidden: false
	};

	const [state, setState] = useState({
		addUser: false,
		editUser: false,
		hidden: false
	});

	const [dataLocations, setDataLocations] = useState([]);
	const [dataUser, setDataUser] = useState([]);
	const [dataUserById, setDataUserById] = useState({});
	const [page, setPage] = useState(1);

	const [query, setQuery] = useState('');
	const keys = ['user'];
	const search = data => {
		return data.filter(item =>
			keys.some(key => item[key].toLowerCase().includes(query))
		);
	};

	useEffect(() => {
		getlistLocations();
		getlistUser();
	}, []);

	const getlistLocations = () => {
		listUserLocation()
			.then(res => {
				if (res.status === 200) {
					console.log(res);
					const dataTemp = res.data.data.map(item => ({
						label: item.nama,
						value: item.id
					}));
					setDataLocations(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const getlistUser = () => {
		listUser()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						id: item.id,
						user: item.nama
					}));
					setDataUser(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const addUser = () => {
		setState(prevState => ({
			...prevState,
			addUser: !prevState.addUser,
			hidden: !prevState.hidden
		}));
	};

	const onSubmit = (values, actions) => {
		createUser(values)
			.then(res => {
				if (res.status === 201) {
					getlistUser();
					setState(initialState);
					message.success('Add User Success');
					actions.resetForm();
					actions.setSubmitting(false);
				}
			})
			.catch(err => {
				console.log(err);
				message.error(`${err?.message}`);
			});
	};

	const showUser = idUser => {
		getUserById(idUser)
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					const data = res.data.data;

					setDataUserById({
						id: data.id,
						nama: data.nama,
						email: data.email,
						locationId: data.location?.id,
						phoneNumber: data.phoneNumber
					});
					setState(prevState => ({
						...prevState,
						editUser: true,
						hidden: true
					}));
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onPut = (values, actions) => {
		putUser(dataUserById.id, values)
			.then(res => {
				if (res.status === 200) {
					getlistUser();
					setState(initialState);
					message.success(`Edit User Success`);
					actions.resetForm();
					actions.setSubmitting(false);
				}
			})
			.catch(err => {
				message.error(`${err.response?.data?.message}`);
			});
	};

	const onDelete = id => {
		deleteUser(id)
			.then(res => {
				if (res.status === 200) {
					message.error('User Deleted');
					getlistUser();
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onCancelForm = () => {
		setState({
			addUser: false,
			editUser: false,
			hidden: false
		});
	};

	return (
		<React.Fragment>
			<div className={state.hidden ? 'd-none' : 'user'} id="user">
				<CustomInputHeader
					content={
						<React.Fragment>
							<button className="btn" onClick={addUser}>
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
					dataSource={search(dataUser)}
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
			{state.addUser && (
				<FormAddUser
					onCancelForm={onCancelForm}
					listLocation={dataLocations}
					onSubmit={onSubmit}
				/>
			)}
			{state.editUser && (
				<FormEditUser
					data={dataUserById}
					listLocation={dataLocations}
					onCancelForm={onCancelForm}
					onSubmit={onPut}
				/>
			)}
		</React.Fragment>
	);
};
export default User;
