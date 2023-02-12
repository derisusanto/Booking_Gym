import React, { useState, useEffect } from 'react';
import { listClient } from '../../service/service';

import './table.scss';

import {
	UserOutlined,
	EditTwoTone,
	DeleteFilled,
	EditOutlined
} from '@ant-design/icons';

import { Table } from 'antd';

const TableComponent = ({ columns }) => {
	// const columns = [
	// 	{
	// 		title: 'No',
	// 		dataIndex: 'key',

	// 		render: (value, item, index) => (page - 1) * 10 + index + 1
	// 	},

	// 	{
	// 		title: 'Name',
	// 		dataIndex: 'name'
	// 	},
	// 	{
	// 		title: 'Tweak Point',
	// 		dataIndex: 'tweakPoint',
	// 		sorter: {
	// 			compare: (a, b) => a.tweakPoint - b.tweakPoint,
	// 			multiple: 3
	// 		},
	// 		responsive: ['md']
	// 	},
	// 	{
	// 		title: 'Action',
	// 		dataIndex: 'id',
	// 		key: 'x',
	// 		responsive: ['sm'],
	// 		render: record => (
	// 			<div
	// 				style={{ textAlign: 'center' }}
	// 				className="flex justify-content-center gap-2"
	// 			>
	// 				<button
	// 					className=""
	// 					style={{
	// 						backgroundColor: 'transparent',
	// 						border: 'none',
	// 						outline: 'none',
	// 						cursor: 'pointer'
	// 					}}
	// 					onClick={() => {
	// 						onDelete(record);
	// 					}}
	// 				>
	// 					<EditTwoTone twoToneColor="#eb2f96" />
	// 				</button>
	// 				<button
	// 					className=""
	// 					onClick={() => {
	// 						onDelete(record);
	// 					}}
	// 				>
	// 					<DeleteFilled style={{ color: 'red' }} />
	// 				</button>
	// 			</div>
	// 		)
	// 	}
	// ];

	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);

	const onDelete = record => {
		setData(pre => {
			return pre.filter(person => person.id !== record);
		});
	};

	useEffect(() => {
		getDataClient(14);
	}, []);

	const handlePage = e => {
		console.log(e);
	};

	const getDataClient = id => {
		listClient(id)
			.then(response => {
				if (response.status === 200) {
					const res = response.data?.data.map((i, key) => ({
						key: key,
						id: i.id,
						name: i.nama,
						tweakPoint: i.tweakPoint
					}));
					setData(res);
				}
			})
			.catch(err => {
				if (err) {
					console.log(err);
				}
			});
	};

	return (
		<div id="table">
			<Table
				columns={columns}
				dataSource={data}
				// bordered
				className="table-component"
				pagination={{
					// pageSize: 25,
					showSizeChanger: true,
					onChange(current) {
						setPage(current);
					}
				}}
			/>
		</div>
	);
};

export default TableComponent;
