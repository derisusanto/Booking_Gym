import React, { useEffect, useState } from 'react';
import TitleComponent from '../../component/titleComponent/titleComponent';
import './dashboard.scss';
import {
	Chart as ChartJS,
	ArcElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import TableComponent from '../../component/table/TableData';
import { ICON } from '../../assets/icons/icons';
import { listSummary } from '../../service/dashboard';

ChartJS.register(
	ArcElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const Dashboard = () => {
	const [listDataSummary, setListDataSummary] = useState({});

	useEffect(() => {
		getDataSummary();
	}, []);

	const columns = [
		{
			title: 'Tracking No',
			dataIndex: 'key'
			// render: (value, item, index) => (page - 1) * 10 + index + 1
		},

		{
			title: 'Class Name',
			dataIndex: 'category'
		},

		{
			title: 'Participant',
			dataIndex: 'category'
		},
		{
			title: 'Total Participant',
			dataIndex: 'category'
		},
		{
			title: 'Total Amount',
			dataIndex: 'category'
		}
	];

	const data = {
		labels: ['Artistik', 'Parkour', 'Ritmik'],
		datasets: [
			{
				// label: ['Artistik'],
				data: [12, 19, 3],
				backgroundColor: [
					'#FF69B4',
					'#03A89E',
					'#3A36DB'
					// 'rgba(75, 192, 192, 0.2)',
					// 'rgba(153, 102, 255, 0.2)',
					// 'rgba(255, 159, 64, 0.2)'
				],
				borderColor: ['#FF69B4', '#03A89E', '#3A36DB'],
				borderWidth: 1
			}
		]
	};

	const options = {
		responsive: 'true',
		plugins: {
			legend: {
				position: 'top'
			},
			title: {
				display: true,
				text: 'Report'
			}
		}
	};
	const labels = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'Aug',
		'September',
		'October',
		'Noverber',
		'December'
	];

	const dataBar = {
		labels,
		datasets: [
			{
				fill: true,
				label: 'Jumlah Siswa',
				data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)'
			}
		]
	};

	const getDataSummary = () => {
		listSummary().then(res => {
			if (res.status === 200) {
				setListDataSummary({
					activeMember: res.data.activeMember,
					activeClass: res.data.activeClass,
					newMember: res.data.newMember
				});
			}
		});
	};
	return (
		<React.Fragment>
			<TitleComponent title="Dashboard" />
			<div id="dashboard">
				<div className="top-report">
					<div className="card-report">
						<ICON.LOVE />
						<div className="content-value">
							<h3>{listDataSummary.newMember}</h3>
							<span>New Member</span>
						</div>
					</div>
					<div className="card-report">
						<ICON.GAME />
						<div className="content-value">
							<h3>{listDataSummary.activeClass}</h3>
							<span>Active Member</span>
						</div>
					</div>
					<div className="card-report">
						<ICON.CART />
						<div className="content-value">
							<h3>{listDataSummary.activeMember}</h3>
							<span>Active Class</span>
						</div>
					</div>
				</div>
				<div className="grafik">
					<div className="grafik-bar">
						<div className="title-chart">
							<span>Reports</span>
						</div>
						<Line data={dataBar} options={options} responsive="true" />
					</div>
					<div className="grafik-dougnut">
						<div className="title-chart">
							<span>Reports</span>
						</div>
						<div className="component">
							<Doughnut
								data={data}
								width={'30%'}
								height={'30%'}
								responsive="true"
								options={{
									borderRadius: 10,
									maintainAspectRatio: false,
									plugins: {
										legend: {
											position: 'bottom'
										}
									}
								}}
							/>
						</div>

						{/* </div> */}
					</div>
				</div>
				<div className="table-recent">
					<div className="title">
						<span>Recent Class</span>
					</div>

					<TableComponent columns={columns} />
				</div>
			</div>
		</React.Fragment>
	);
};
export default Dashboard;
