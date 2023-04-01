import React, { useState, useEffect } from 'react';
import TableComponent from '../../../component/table/TableData';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import { FormEditClass } from './formEditClass';
import { FormAddClass } from './formAddClass';
import { message } from 'antd';
import { ICON } from '../../../assets/icons/icons';

import {
	createClass,
	deleteClass,
	getClassById,
	listCategory,
	listClass,
	putClass
} from '../../../service/master';

import './class.scss';
import { listDuration } from './listDuration';
import TitleComponent from '../../../component/titleComponent/titleComponent';
const Class = () => {
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			render: (value, item, index) => (page - 1) * 10 + index + 1
		},

		{
			title: 'Class',
			dataIndex: 'class'
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
							showClass(item.id);
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
		addClass: false,
		editClass: false,
		hidden: false
	};

	const [state, setState] = useState({
		addClass: false,
		editClass: false,
		hidden: false
	});

	const [dataCatagory, setDataCategory] = useState([]);
	const [dataClass, setDataClass] = useState([]);
	const [dataClassById, setDataClassById] = useState({});
	const [page, setPage] = useState(1);

	const [query, setQuery] = useState('');
	const keys = ['class'];
	const search = data => {
		return data.filter(item =>
			keys.some(key => item[key].toLowerCase().includes(query))
		);
	};

	useEffect(() => {
		getlistCategory();
		getlistClass();
	}, []);

	const getlistCategory = () => {
		listCategory()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map(item => ({
						label: item.nama,
						value: item.id
					}));
					setDataCategory(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const getlistClass = () => {
		listClass()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						id: item.id,
						class: item.nama
					}));
					setDataClass(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const addClass = () => {
		setState(prevState => ({
			...prevState,
			addClass: !prevState.addClass,
			hidden: !prevState.hidden
		}));
	};

	const onSubmit = (values, actions) => {
		createClass(values)
			.then(res => {
				if (res.status === 201) {
					setState(initialState);
					message.success('Add Class Success');
					actions.resetForm();
					actions.setSubmitting(false);
				}
			})
			.catch(err => {
				message.error(`${err?.message}`);
				actions.setSubmitting(false);
			});
	};

	const showClass = idClass => {
		getClassById(idClass)
			.then(res => {
				if (res.status === 200) {
					const data = res.data.data;

					setDataClassById({
						id: data.id,
						nama: data.nama,
						description: data.description,
						categoryId: data.category?.id,
						startAge: data.startAge,
						endAge: data.endAge,
						gender: data.gender,
						durasi: data.durasi
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
		putClass(dataClassById.id, values)
			.then(res => {
				if (res.status === 200) {
					getlistClass();
					setState(initialState);
					message.success(`Edit Class Success`);
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
		deleteClass(id)
			.then(res => {
				if (res.status === 200) {
					message.error('Class Deleted');
					getlistClass();
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
			<div className={state.hidden ? 'd-none' : 'class'} id="class">
				<TitleComponent title="Class" />
				<CustomInputHeader
					content={
						<React.Fragment>
							<button className="btn" onClick={addClass}>
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
					dataSource={search(dataClass)}
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
			{state.addClass && (
				<FormAddClass
					onCancelForm={onCancelForm}
					listCategory={dataCatagory}
					listDuration={listDuration}
					onSubmit={onSubmit}
				/>
			)}
			{state.editClass && (
				<FormEditClass
					data={dataClassById}
					listCategory={dataCatagory}
					listDuration={listDuration}
					onCancelForm={onCancelForm}
					onSubmit={onPut}
				/>
			)}
		</React.Fragment>
	);
};
export default Class;
