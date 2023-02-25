import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../../../component/table/TableData';

import { ICON } from '../../../assets/icons/icons';
import { listLocation } from '../../../service/master';
import TitleComponent from '../../../component/titleComponent/titleComponent';

// import './member.scss';

const ScheduleLocation = () => {
	const navigate = useNavigate();
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			render: (value, item, index) => (page - 1) * 10 + index + 1
		},

		{
			title: 'Location',
			dataIndex: 'location'
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
							showDataSchedule(item.id);
						}}
					/>
				</div>
			)
		}
	];

	const [dataLocation, setDataLocation] = useState([]);

	const [page, setPage] = useState(1);

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

	const getlistLocation = () => {
		listLocation()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						id: item.id,
						location: item.nama
					}));
					setDataLocation(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const showDataSchedule = idLocation => {
		navigate(`/Schedule/${idLocation}`);
	};

	return (
		<React.Fragment>
			<div id="member">
				<TitleComponent title="Schedule" />
				<TableComponent
					title=""
					columns={columns}
					dataSource={search(dataLocation)}
				/>
			</div>
		</React.Fragment>
	);
};
export default ScheduleLocation;
