import React, { useState, useEffect } from 'react';
import TableComponent from '../../../component/table/TableData';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import { FormAddRole } from './formAddRole';
import { FormEditRole } from './formEditRole';
import { message } from 'antd';
import { ICON } from '../../../assets/icons/icons';

import './role.scss';
import {
	listRole,
	createRole,
	deleteRole,
	getRoleById,
	putRole
} from '../../../service/setting';

const User = () => {
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			render: (value, item, index) => (page - 1) * 10 + index + 1
		},

		{
			title: 'Role',
			dataIndex: 'role'
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
							showRole(item.id);
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
		addRole: false,
		editRole: false,
		hidden: false
	};

	const [state, setState] = useState({
		addRole: false,
		editRole: false,
		hidden: false
	});

	const [dataRole, setDataRole] = useState([]);
	const [dataRoleById, setDataRoleById] = useState({});
	const [page, setPage] = useState(1);

	const [query, setQuery] = useState('');
	const keys = ['role'];
	const search = data => {
		return data.filter(item =>
			keys.some(key => item[key].toLowerCase().includes(query))
		);
	};

	useEffect(() => {
		getlistRole();
	}, []);

	const getlistRole = () => {
		listRole()
			.then(res => {
				if (res.status === 200) {
					console.log(res);
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						id: item.id,
						role: item.nama
					}));
					setDataRole(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const addRole = () => {
		setState(prevState => ({
			...prevState,
			addRole: !prevState.addRole,
			hidden: !prevState.hidden
		}));
	};

	const onSubmit = (values, actions) => {
		createRole(values)
			.then(res => {
				if (res.status === 201) {
					getlistRole();
					setState(initialState);
					message.success('Add Role Success');
					actions.resetForm();
					actions.setSubmitting(false);
				}
			})
			.catch(err => {
				console.log(err);
				message.error(`${err?.message}`);
			});
	};

	const showRole = idRole => {
		getRoleById(idRole)
			.then(res => {
				if (res.status === 200) {
					console.log(res);
					const data = res.data.data;

					setDataRoleById({
						id: data.id,
						nama: data.nama,
						description: data.description
					});
					setState(prevState => ({
						...prevState,
						editRole: true,
						hidden: true
					}));
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onPut = (values, actions) => {
		putRole(dataRoleById.id, values)
			.then(res => {
				if (res.status === 200) {
					getlistRole();
					setState(initialState);
					message.success(`Edit Role Success`);
					actions.resetForm();
					actions.setSubmitting(false);
				}
			})
			.catch(err => {
				message.error(`${err.response?.data?.message}`);
			});
	};

	const onDelete = id => {
		deleteRole(id)
			.then(res => {
				if (res.status === 200) {
					message.error('Role Deleted');
					getlistRole();
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onCancelForm = () => {
		setState({
			addRole: false,
			editRole: false,
			hidden: false
		});
	};

	return (
		<React.Fragment>
			<div className={state.hidden ? 'd-none' : 'user'} id="user">
				<CustomInputHeader
					content={
						<React.Fragment>
							<button className="btn" onClick={addRole}>
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
					dataSource={search(dataRole)}
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
			{state.addRole && (
				<FormAddRole onCancelForm={onCancelForm} onSubmit={onSubmit} />
			)}
			{state.editRole && (
				<FormEditRole
					data={dataRoleById}
					onCancelForm={onCancelForm}
					onSubmit={onPut}
				/>
			)}
		</React.Fragment>
	);
};
export default User;
