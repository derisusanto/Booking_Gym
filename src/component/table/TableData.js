import React from 'react';

import './table.scss';

// import {
// 	UserOutlined,
// 	EditTwoTone,
// 	DeleteFilled,
// 	EditOutlined
// } from '@ant-design/icons';

import { Table } from 'antd';

const TableComponent = ({ columns, dataSource, pagination }) => {
	return (
		<div id="table">
			<Table
				columns={columns}
				dataSource={dataSource}
				// bordered
				className="table-component"
				pagination={pagination}
			/>
		</div>
	);
};

export default TableComponent;
