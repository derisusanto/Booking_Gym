import React, { useEffect, useState } from 'react';
import { ICON } from '../../../assets/icons/icons';

import TableComponent from '../../../component/table/TableData';
import CustomInputHeader from '../../../component/customInputHeader/customInputHeader';

import './category.scss';
import {
	createCategory,
	deleteCategory,
	listCategory,
	putCategory
} from '../../../service/master';
import { message } from 'antd';

const Category = () => {
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			render: (value, item, index) => (page - 1) * 10 + index + 1
		},

		{
			title: 'Category',
			dataIndex: 'category',
			render: (record, item) =>
				item.isEdit ? (
					<input
						value={editValue}
						onChange={e => setEditValue(e.target.value)}
					/>
				) : (
					item.category
				)
		},

		{
			title: 'Action',
			dataIndex: 'id',
			key: 'x',
			responsive: ['sm'],
			align: 'end',
			render: (record, item) => (
				<React.Fragment>
					{item.isEdit ? (
						<div className="action-button">
							<ICON.EDIT
								width={30}
								onClick={() => {
									showCategoryId(item);
								}}
							/>
							<ICON.DELETE
								width={30}
								onClick={() => {
									onPutCategory(item.id);
								}}
							/>
						</div>
					) : (
						<div className="action-button">
							<ICON.EDIT
								width={30}
								onClick={() => {
									showCategoryId(item);
								}}
							/>
							<ICON.DELETE
								width={30}
								onClick={() => {
									onDelete(item.id);
								}}
							/>
						</div>
					)}
				</React.Fragment>
			)
		}
	];

	const [category, setCategory] = useState('');
	const [editValue, setEditValue] = useState('');

	const [dataCatagory, setDataCategory] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const [page, setPage] = useState(1);

	const [query, setQuery] = useState('');
	const keys = ['category'];

	useEffect(() => {
		getlistCategory();
	}, []);

	const search = data => {
		return data.filter(item =>
			keys.some(key => item[key].toLowerCase().includes(query))
		);
	};

	const getlistCategory = () => {
		listCategory()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						id: item.id,
						isEdit: false,
						category: item.nama
					}));
					setDataCategory(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onSubmit = e => {
		e.preventDefault();
		setIsLoading(true);

		const data = { nama: category };

		createCategory(data)
			.then(res => {
				if (res.status === 201) {
					getlistCategory(1);
					setCategory('');
					message.success('Add Category Success');
					setIsLoading(false);
				}
			})
			.catch(err => {
				console.log(err);
				setIsLoading(false);
			});
	};

	const showCategoryId = item => {
		const { key, isEdit, category } = item;

		let dataTemp = [...dataCatagory];
		setEditValue(category);

		const findData = dataTemp.findIndex(item => item.isEdit === true);
		if (findData > -1) {
			dataTemp[findData] = {
				...dataTemp[findData],
				isEdit: false
			};
		}
		let isEdited = true;
		if (isEdit) {
			isEdited = false;
		}
		dataTemp[key] = {
			...dataTemp[key],
			isEdit: isEdited
		};
		setDataCategory(dataTemp);
	};

	const onPutCategory = id => {
		const data = { nama: editValue };
		putCategory(id, data)
			.then(res => {
				if (res.status === 200) {
					getlistCategory();
					message.success(`Edit Category Success`);
				}
			})
			.catch(err => {
				console.log(err);
				message.error(`${err.response?.data?.message}`);
			});
	};

	const onDelete = id => {
		deleteCategory(id)
			.then(res => {
				if (res.status === 200) {
					message.error('Category Deleted');
					getlistCategory(1);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};
	return (
		<React.Fragment>
			<div id="category">
				<CustomInputHeader
					content={
						<React.Fragment>
							<input
								type="text"
								placeholder="create new category"
								value={category}
								onChange={e => setCategory(e.target.value)}
							/>
							<button className="btn" type="submit" onClick={onSubmit}>
								{isLoading ? 'Loading' : 'Save'}
							</button>
						</React.Fragment>
					}
				/>
				<div className="search-input">
					<input
						type="search"
						className="search"
						value={query}
						placeholder="search"
						onChange={e => setQuery(e.target.value.toLowerCase())}
					/>
				</div>
				<TableComponent
					columns={columns}
					dataSource={search(dataCatagory)}
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
export default Category;
