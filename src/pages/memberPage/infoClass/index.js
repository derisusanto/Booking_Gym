import React, { useState, useEffect } from 'react';
import TableComponent from '../../../component/table/TableData';

import { message } from 'antd';
import { ICON } from '../../../assets/icons/icons';

// import {
// 	createClass,
// 	deleteClass,
// 	getClassById,
// 	listCategory,
// 	listClass,
// 	putClass
// } from '../../../service/master';

// import './class.scss';

import TitleComponent from '../../../component/titleComponent/titleComponent';
import { listInfoClass } from '../../../service/member';
const InfoClass = () => {
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
			title: 'Trainer',
			dataIndex: 'trainer'
		},

		{
			title: 'Location',
			dataIndex: 'location'
		},

		{
			title: 'Time',
			dataIndex: 'time'
		}
	];

	let memberId = localStorage.getItem('ljk2345d');
	const [dataClass, setDataClass] = useState([]);

	const [page, setPage] = useState(1);

	const [query, setQuery] = useState('');
	const keys = ['class'];
	const search = data => {
		return data.filter(item =>
			keys.some(key => item[key].toLowerCase().includes(query))
		);
	};

	useEffect(() => {
		getlistInfoClass(memberId);
	}, []);

	const getlistInfoClass = memberId => {
		listInfoClass(memberId)
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((list, index) => ({
						key: index,
						class: list.class.nama,
						trainer: list.trainer.nama,
						location: list.location.nama,
						time: `${list.startTime?.slice(0, 5)} - ${list.endTime?.slice(
							0,
							5
						)} `
					}));

					setDataClass(dataTemp);
				}
			})
			.catch(err => {
				message.error(`${err.message}`);
			});
	};

	return (
		<React.Fragment>
			<TitleComponent title="Info Class" />
			<div className="class" id="class">
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
		</React.Fragment>
	);
};
export default InfoClass;
