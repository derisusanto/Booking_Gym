import React, { useEffect, useState } from 'react';
import TableComponent from '../../component/table/TableData';
import CustomInputHeader from '../../component/customInputHeader/customInputHeader';
import { CheckOutlined, FileImageOutlined } from '@ant-design/icons';

import './newRegister.scss';
import {
	changeClientTobeMember,
	listNewMember
} from '../../service/listRegistration';
import { message, Image } from 'antd';

const NewRegister = () => {
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			render: (value, item, index) => (page - 1) * 10 + index + 1
		},

		{
			title: 'Child Name',
			dataIndex: 'nama'
		},
		{
			title: 'Gender',
			dataIndex: 'gender'
		},
		{
			title: 'Email',
			dataIndex: 'email'
		},
		{
			title: 'Phone Number',
			dataIndex: 'phoneNumber',
			// sorter: {
			// 	compare: (a, b) => a.tweakPoint - b.tweakPoint,
			// 	multiple: 3
			// },
			responsive: ['md']
		},
		{
			title: 'Payment Recipt',
			dataIndex: 'photo',
			align: 'center',
			render: (record, item) => (
				<div className="action-button">
					<button
						style={{
							width: '40px',
							height: '40px',
							borderRadius: '100%',
							border: 'none'
						}}
						onClick={() => setVisible(true)}
					>
						<FileImageOutlined />
						<Image
							style={{
								display: 'none'
							}}
							preview={{
								visible,

								src: item.photo,
								onVisibleChange: value => {
									setVisible(value);
								}
							}}
						/>
					</button>
				</div>
			)
		},

		{
			title: 'Action',
			dataIndex: 'id',
			key: 'x',
			responsive: ['sm'],
			align: 'center',
			render: (record, item) => (
				<div className="action-button">
					<button
						className="confirm-client"
						onClick={() => confirmClient(item.id)}
					>
						Confirm <CheckOutlined />
					</button>
				</div>
			)
		}
	];

	const [dataNewMember, setDataNewMember] = useState([]);
	const [page, setPage] = useState(1);

	const [visible, setVisible] = useState(false);

	const [query, setQuery] = useState('');
	const keys = ['nama'];
	const search = data => {
		return data.filter(item =>
			keys.some(key => item[key].toLowerCase().includes(query))
		);
	};

	useEffect(() => {
		getListNewMember();
	}, []);

	const getListNewMember = () => {
		listNewMember()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map((item, index) => ({
						key: index,
						id: item.id,
						nama: item.childName,
						email: item.email || '-',
						photo:
							'https://docs.mobiscroll.com/Content/img/docs/customize-the-full-event.png',
						gender: item.gender,
						phoneNumber: item.phoneNumber
					}));
					setDataNewMember(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const confirmClient = clientId => {
		changeClientTobeMember(clientId)
			.then(res => {
				if (res.status === 200) {
					getListNewMember();
					message.success(`Confirm Client Success`);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<React.Fragment>
			<div className="class" id="class">
				<CustomInputHeader
					position="one-right"
					content={
						<React.Fragment>
							{/* <button className="btn" onClick={addClass}>
								New
							</button> */}
							<input
								type="search"
								placeholder="Search"
								value={query}
								onChange={e => setQuery(e.target.value.toLowerCase())}
							/>
						</React.Fragment>
					}
				/>
				<TableComponent
					columns={columns}
					dataSource={search(dataNewMember)}
					pagination={{
						onChange: e => setPage(e),
						showSizeChanger: true
					}}
				/>
			</div>
		</React.Fragment>
	);
};
export default NewRegister;
