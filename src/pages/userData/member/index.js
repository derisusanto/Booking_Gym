import React, { useEffect, useState } from 'react';
import TableComponent from '../../../component/table/TableData';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import { ICON } from '../../../assets/icons/icons';
import { message } from 'antd';

import './member.scss';
import {
	deleteMember,
	getMemberById,
	listMember,
	putMember
} from '../../../service/userData';
import FormEditMember from './formEditMember';
import { listCategory, listLocation } from '../../../service/master';

const NewRegister = () => {
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			render: (value, item, index) => (page - 1) * 10 + index + 1
		},

		{
			title: 'Member',
			dataIndex: 'member'
		},
		{
			title: 'Email',
			dataIndex: 'email'
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
							showMember(item.id);
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

	const [dataMember, setDataMember] = useState([]);
	const [dataMemberById, setDataMemberById] = useState({});

	const [listLocations, setListLocations] = useState([]);
	const [listCategories, setListCategories] = useState([]);

	const [page, setPage] = useState(1);

	const initialState = {
		addMember: false,
		editMember: false,
		hidden: false
	};
	const [state, setState] = useState({
		addMember: false,
		editMember: false,
		hidden: false
	});

	const [query, setQuery] = useState('');
	const keys = ['member', 'email'];
	const search = data => {
		return data.filter(item =>
			keys.some(key => item[key].toLowerCase().includes(query))
		);
	};

	useEffect(() => {
		getlistMember();
		getlistLocations();
		getlistCategories();
	}, []);

	const getlistMember = () => {
		listMember()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						id: item.id,
						member: item.childName,
						email: item.email
					}));
					setDataMember(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const getlistLocations = () => {
		listLocation()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map(item => ({
						label: item.nama,
						value: item.id
					}));
					setListLocations(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};
	const getlistCategories = () => {
		listCategory()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map(item => ({
						label: item.nama,
						value: item.id
					}));
					setListCategories(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const showMember = idMember => {
		getMemberById(idMember)
			.then(res => {
				if (res.status === 200) {
					const data = res.data.data;

					setDataMemberById(data);
					setState(prevState => ({
						...prevState,
						editMember: true,
						hidden: true
					}));
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onCancelForm = () => {
		setState({
			editMember: false,
			hidden: false
		});
	};

	const onPut = (values, actions) => {
		putMember(dataMemberById.id, values)
			.then(res => {
				if (res.status === 200) {
					getlistMember();
					actions.resetForm();
					actions.setSubmitting(false);
					setState(initialState);
					message.success(`Edit Member Success`);
				}
			})
			.catch(err => {
				message.error(`${err.response?.data?.message}`);
			});
	};

	const onDelete = id => {
		deleteMember(id)
			.then(res => {
				if (res.status === 200) {
					message.error('Member Deleted');
					getlistMember();
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<React.Fragment>
			<div className={state.hidden ? 'd-none' : 'member'} id="member">
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
					dataSource={search(dataMember)}
					pagination={{
						onChange: e => setPage(e),
						showSizeChanger: true
					}}
				/>
			</div>
			{state.editMember && (
				<FormEditMember
					data={dataMemberById}
					listLocations={listLocations}
					listCategories={listCategories}
					onCancelForm={onCancelForm}
					onSubmit={onPut}
				/>
			)}
		</React.Fragment>
	);
};
export default NewRegister;
