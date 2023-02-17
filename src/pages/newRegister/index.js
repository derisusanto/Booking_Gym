import React, { useEffect, useState } from 'react';
import TableComponent from '../../component/table/TableData';
import CustomInputHeader from '../../component/customInputHeader/customInputHeader';

import './newRegister.scss';
import { ICON } from '../../assets/icons/icons';
import { listNewMember } from '../../service/listRegistration';

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
							// showRoom(item.id);
						}}
					/>
					<ICON.DELETE
						width={30}
						onClick={() => {
							// onDelete(item.id);
						}}
					/>
				</div>
			)
		}
	];

	const [dataNewMember, setDataNewMember] = useState([]);
	const [page, setPage] = useState(1);

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
