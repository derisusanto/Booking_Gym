import React, { useState, useEffect } from 'react';
import TableComponent from '../../../component/table/TableData';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import { message } from 'antd';
import { ICON } from '../../../assets/icons/icons';

import {
	createTrainer,
	deleteTrainer,
	getTrainerById,
	listTrainer,
	putTrainer
} from '../../../service/userData';
import { FormAddTrainer } from './formAddTrainer';
import { FormEditTrainer } from './formEditTrainer';

// import './class.scss';
const Trainer = () => {
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			render: (value, item, index) => (page - 1) * 10 + index + 1
		},

		{
			title: 'Trainer',
			dataIndex: 'trainer'
		},

		{
			title: 'Action',
			dataIndex: 'id',
			key: 'x',
			responsive: ['sm'],
			align: 'end',
			render: (record, item) => (
				<div className="action-button">
					<ICON.EDIT
						width={30}
						onClick={() => {
							showTrainer(item.id);
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
		addTrainer: false,
		editTrainer: false,
		hidden: false
	};

	const [state, setState] = useState({
		addTrainer: false,
		editTrainer: false,
		hidden: false
	});

	const [dataTrainer, setDataTrainer] = useState([]);

	const [dataTrainerById, setDataTrainerById] = useState({});
	const [page, setPage] = useState(1);

	const [query, setQuery] = useState('');
	const keys = ['trainer'];
	const search = data => {
		return data.filter(item =>
			keys.some(key => item[key].toLowerCase().includes(query))
		);
	};

	useEffect(() => {
		getlistTrainer();
	}, []);

	const getlistTrainer = () => {
		listTrainer()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						id: item.id,
						trainer: item.nama
					}));
					setDataTrainer(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const addTrainer = () => {
		setState(prevState => ({
			...prevState,
			addTrainer: !prevState.addTrainer,
			hidden: !prevState.hidden
		}));
	};

	const onSubmit = (values, actions) => {
		createTrainer(values)
			.then(res => {
				if (res.status === 201) {
					getlistTrainer();
					setState(initialState);
					message.success('Add Trainer Success');
					actions.resetForm();
					actions.setSubmitting(false);
				}
			})
			.catch(err => {
				console.log(err);
				message.error(`${err?.message}`);
			});
	};

	const showTrainer = idTrainer => {
		getTrainerById(idTrainer)
			.then(res => {
				if (res.status === 200) {
					const data = res.data.data;

					setDataTrainerById({
						id: data.id,
						nama: data.nama,
						email: data.email,
						phoneNumber: data.phoneNumber,
						accountNumber: data.accountNumber,
						bankAccount: data.bankAccount,
						birthPlace: data.birthPlace,
						birthDate: data.birthDate,
						contactPerson: data.contactPerson,
						gender: data.gender
					});
					setState(prevState => ({
						...prevState,
						editTrainer: true,
						hidden: true
					}));
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onPut = (values, actions) => {
		putTrainer(dataTrainerById.id, values)
			.then(res => {
				if (res.status === 200) {
					getlistTrainer();
					actions.resetForm();
					actions.setSubmitting(false);
					setState(initialState);
					message.success(`Edit Trainer Success`);
				}
			})
			.catch(err => {
				message.error(`${err.response?.data?.message}`);
			});
	};

	const onDelete = id => {
		deleteTrainer(id)
			.then(res => {
				if (res.status === 200) {
					message.error('Trainer Deleted');
					getlistTrainer();
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
			<div className={state.hidden ? 'd-none' : 'trainer'} id="trainer">
				<CustomInputHeader
					content={
						<React.Fragment>
							<button className="btn" onClick={addTrainer}>
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
					dataSource={search(dataTrainer)}
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
			{state.addTrainer && (
				<FormAddTrainer onCancelForm={onCancelForm} onSubmit={onSubmit} />
			)}
			{state.editTrainer && (
				<FormEditTrainer
					data={dataTrainerById}
					onCancelForm={onCancelForm}
					onSubmit={onPut}
				/>
			)}
		</React.Fragment>
	);
};
export default Trainer;
