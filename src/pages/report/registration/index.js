import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../../../component/table/TableData';

// import { ICON } from '../../assets/icons/icons';

// import TitleComponent from '../../component/titleComponent/titleComponent';
// import { listScheduleLocation } from '../../service/schedule';
import { listReportRegistration } from '../../../service/report';
import formatOldDate, { FormatDate } from '../../../utils/timeFormat';

// import './member.scss';

const ReportRegistration = props => {
	const navigate = useNavigate();
	const memberId = localStorage.getItem('ljk2345d');
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			render: (value, item, index) => (page - 1) * 10 + index + 1
		},

		{
			title: 'Name',
			dataIndex: 'name'
		},

		{
			title: 'Category',
			dataIndex: 'category'
		},
		{
			title: 'Register Date',
			dataIndex: 'registerDate'
		},
		{
			title: 'Payment Date',
			dataIndex: 'paymentDate'
		},
		{
			title: 'Price',
			dataIndex: 'jumlahBayar'
		},
		{
			title: 'Status',
			dataIndex: 'paymentStatus'
		}
	];

	const [dataRegistration, setDataRegistration] = useState([]);

	const [page, setPage] = useState(1);

	useEffect(() => {
		getListRegistration();
	}, []);

	const getListRegistration = () => {
		listReportRegistration(props.idLocation)
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						name: item.childName,
						category: item.category,
						registerDate: formatOldDate(item.registerDate),
						paymentDate: item.paymentDate || '-',
						jumlahBayar: item.jumlahBayar,
						paymentStatus: item.paymentStatus
					}));

					setDataRegistration(dataTemp);
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
				dataSource={dataRegistration}
				pagination={{
					onChange: e => setPage(e),
					showSizeChanger: true
				}}
			/>
		</React.Fragment>
	);
};
export default ReportRegistration;
