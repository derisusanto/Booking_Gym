import React, { useState } from 'react';
import TableComponent from '../../component/table/TableData';
import './absensi.scss';
import { FromAddAbsensi } from './formAddAbsensi';
import { FromEditbsensi } from './formEditAbsensi';

function Absensi() {
	const [state, setState] = useState({
		addAbsensi: false,
		editAbsensi: false,
		hidden: false
	});

	const [dataAbsensi, setDataAbsensi] = useState({
		email: 'deri@gmail.com',
		password: '1234Aa'
	});

	const addAbsensi = () => {
		setState(prevState => ({
			prevState,
			addAbsensi: !prevState.addAbsensi,
			hidden: !prevState.hidden
		}));
	};

	const showAbsensi = () => {
		setState(prevState => ({
			prevState,
			editAbsensi: !prevState.editAbsensi,
			hidden: !prevState.hidden
		}));
	};

	const onSubmit = (values, action) => {
		console.log(values);
	};
	const onPut = (values, action) => {
		console.log(values);
	};
	return (
		<React.Fragment>
			<div className={state.hidden ? 'd-none' : 'absensi'} id="absensi">
				<div className="header-component">
					<button onClick={addAbsensi}>+ Absensi</button>
					<button onClick={showAbsensi}>++ Absensi</button>
				</div>
				<TableComponent />
			</div>
			{state.addAbsensi && <FromAddAbsensi onSubmit={onSubmit} />}
			{state.editAbsensi && (
				<FromEditbsensi onSubmit={onPut} data={dataAbsensi} />
			)}
		</React.Fragment>
	);
}
export default Absensi;
