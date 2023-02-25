import React from 'react';
import TitleComponent from '../../component/titleComponent/titleComponent';
import './dashboard.scss';

const Dashboard = () => {
	return (
		<React.Fragment>
			<TitleComponent title="Dashboard" />
			<div id="dashboard"></div>
		</React.Fragment>
	);
};
export default Dashboard;
