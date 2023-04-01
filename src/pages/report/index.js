import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DatePicker, Space } from 'antd';
import TableComponent from '../../component/table/TableData';

import { ICON } from '../../assets/icons/icons';

import TitleComponent from '../../component/titleComponent/titleComponent';
import { listScheduleLocation } from '../../service/schedule';
import ReportRegistration from './registration';
import ReportPresensiTrainer from './presensi_trainer';

import './report.scss';
import ReportPresensiSiswa from './presensi_siswa';

const ListReport = () => {
	const navigate = useNavigate();
	const { titlePath, id } = useParams();

	const memberId = localStorage.getItem('ljk2345d');
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
					{/* <ICON.EDIT
						width={30}
						onClick={() => {
							showDataReport(item.id);
						}}
					/> */}
				</div>
			)
		}
	];

	const activeButton = [
		{ id: 1, title: 'Registration', isActive: false },
		{ id: 2, title: 'Presensi Siswa', isActive: false },
		{ id: 3, title: 'Presensi Trainer', isActive: false }
	];

	const [listButton, setListButton] = useState(activeButton);
	// const [dataLocation, setDataLocation] = useState([]);

	const [page, setPage] = useState(1);

	const [query, setQuery] = useState('');
	const keys = ['location'];
	const search = data => {
		return data.filter(item =>
			keys.some(key => item[key].toLowerCase().includes(query))
		);
	};

	useEffect(() => {
		const findIndexTitle = listButton.findIndex(
			item => item.title === titlePath
		);
		checkButtonActive(titlePath, findIndexTitle);
	}, [titlePath]);

	const checkButtonActive = (titlePath, index) => {
		let titleTemp = [...listButton];

		const findIndexTrue = titleTemp.findIndex(item => item.isActive === true);

		if (findIndexTrue > -1) {
			titleTemp[findIndexTrue] = {
				...titleTemp[findIndexTrue],
				isActive: false
			};
		}

		titleTemp[index] = {
			...titleTemp[index],
			isActive: true
		};

		setListButton(titleTemp);
		navigate(`/Report/List/${titlePath}/${id}`);
	};

	const onChange = (date, dateString) => {
		// console.log(date, dateString);
		// console.log(date.toLocalDateString());
		console.log(dateString);
		// console.log(new Date(date._d).format('YYYY-MM-DD'));
	};

	return (
		<React.Fragment>
			<div id="list-report">
				<TitleComponent title={`Report ${titlePath}`} />
				<div className="button-header">
					<div className="list-button">
						{listButton.map((button, index) => {
							return (
								<button
									className={button.isActive ? 'active ' : null}
									onClick={() => checkButtonActive(button.title, index)}
									key={index}
								>
									{button.title}
								</button>
							);
						})}
					</div>
					<DatePicker onChange={onChange} picker="month" />
				</div>

				{titlePath === 'Registration' ? (
					<ReportRegistration idLocation={id} />
				) : titlePath === 'Presensi Trainer' ? (
					<ReportPresensiTrainer idLocation={id} />
				) : (
					<ReportPresensiSiswa idLocation={id} />
				)}
			</div>
		</React.Fragment>
	);
};
export default ListReport;
