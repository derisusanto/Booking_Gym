import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../../../component/table/TableData';

// import { ICON } from '../../assets/icons/icons';

// import TitleComponent from '../../component/titleComponent/titleComponent';
// import { listScheduleLocation } from '../../service/schedule';
import {
	listPresensiTrainer,
	listReportRegistration
} from '../../../service/report';

// import './member.scss';

const ReportPresensiTrainer = props => {
	const navigate = useNavigate();
	const memberId = localStorage.getItem('ljk2345d');
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			render: (value, item, index) => (page - 1) * 10 + index + 1
		},

		{
			title: 'Coach',
			dataIndex: 'coach'
		},
		{
			title: 'Class',
			dataIndex: 'class'
		},
		{
			title: 'Class Date',
			dataIndex: 'classDate'
		}
	];

	const [dataPresensiTrainer, setDataPresensiTrainer] = useState([]);

	const [page, setPage] = useState(1);

	useEffect(() => {
		getListPresensiTrainer();
	}, []);

	const getListPresensiTrainer = () => {
		listPresensiTrainer(props.idLocation)
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						coach: item.trainers,
						class: item.nama,
						classDate: item.classDate
					}));
					setDataPresensiTrainer(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<React.Fragment>
			<TableComponent
				columns={columns}
				dataSource={dataPresensiTrainer}
				pagination={{
					onChange: e => setPage(e),
					showSizeChanger: true
				}}
			/>
		</React.Fragment>
	);
};
export default ReportPresensiTrainer;
