import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../../../component/table/TableData';

// import { ICON } from '../../assets/icons/icons';

// import TitleComponent from '../../component/titleComponent/titleComponent';
// import { listScheduleLocation } from '../../service/schedule';
import { listPresensiSiswa } from '../../../service/report';

// import './member.scss';

const ReportPresensiSiswa = props => {
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
			title: 'Class',
			dataIndex: 'class'
		},
		{
			title: 'Class Date',
			dataIndex: 'classDate'
		}
	];

	const [dataPresensiSiswa, setDataPresensiSiswa] = useState([]);

	const [page, setPage] = useState(1);

	useEffect(() => {
		getListRegistration();
	}, []);

	const getListRegistration = () => {
		listPresensiSiswa(props.idLocation)
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						name: item.childName,
						class: item.nama,
						classDate: item.classDate
					}));
					setDataPresensiSiswa(dataTemp);
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
				dataSource={dataPresensiSiswa}
				pagination={{
					onChange: e => setPage(e),
					showSizeChanger: true
				}}
			/>
		</React.Fragment>
	);
};
export default ReportPresensiSiswa;
