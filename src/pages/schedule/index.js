import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';

import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import addHours from 'date-fns/addHours';
import startOfHour from 'date-fns/startOfHour';

import CustomEvent from './ScheduleComponent/CustomEvent';
import CustomToobar from './ScheduleComponent/CustomToobar';
import CustomHeader from './ScheduleComponent/CustomHeader';
import CustomTimeSlotComponent from './ScheduleComponent/CustomTimeSlotComponent';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import Form from './form/form';
import { ListTime } from './listTime';
import { listCategory } from '../../service/master';
import './schedule.scss';
import { listMember, listTrainer } from '../../service/userData';
import {
	addMemberOnSchedule,
	createSchedule,
	deleteMember,
	detailScheduleById,
	getClassByIdCategory,
	getScheduleById
} from '../../service/schedule';
import { getFormattedDate } from '../../utils/scheduleFormatDate';
import formatOldDate, { FormatDate, FormatTime } from '../../utils/timeFormat';
import { message } from 'antd';

const Schedule = () => {
	const { idLocation } = useParams();

	let formats = {
		timeGutterFormat: 'HH:mm'
	};

	const [state, setState] = useState({ formBooking: false });
	const [dataBooking, setDataBooking] = useState({
		trainerId: '',
		classId: '',
		startTime: '',
		classDate: '',
		untilDate: '',
		locationId: idLocation,
		endTime: '',
		repeat: '',
		isRepeat: false
	});
	const [detailBooking, setDetailBooking] = useState({});

	const [events, setEvents] = useState([]);
	const [dataMember, setDataMember] = useState([]);
	const [dataCategory, setDataCategory] = useState([]);
	const [dataClass, setDataClass] = useState([]);
	const [dataTrainer, setDataTrainer] = useState([]);
	const [members, setMembers] = useState([]);

	const [time, setTime] = useState({ startTime: '', endTime: '' });
	const [idMember, setIdMember] = useState('');

	const [isFormBooking, setIsFormBooking] = useState(true);
	const [isLoadingForm, setIsLoadingForm] = useState(false);

	useEffect(() => {
		getDataSchedule();
		getDataMember();
	}, []);

	const getDataSchedule = () => {
		getScheduleById(idLocation)
			.then(res => {
				if (res.status === 200) {
					console.log(res);
					const dataTemp = res.data?.data.map(schedule => ({
						id: schedule.id,
						title: schedule.class?.nama,
						start: new Date(
							getFormattedDate(schedule.classDate, schedule.startTime)
						),
						end: new Date(
							getFormattedDate(schedule.classDate, schedule.endTime)
						)
					}));
					setEvents(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const getDataMember = () => {
		listMember()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map(item => ({
						label: item.childName,
						value: item.id
					}));
					setDataMember(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const getlistCategory = () => {
		listCategory()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map(item => ({
						label: item.nama,
						value: item.id
					}));
					setDataCategory(dataTemp);
					setIsLoadingForm(false);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const getlistTrainer = () => {
		listTrainer()
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map(item => ({
						label: item.nama,
						value: item.id
					}));
					setDataTrainer(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const getlistClass = categoryId => {
		getClassByIdCategory(categoryId)
			.then(res => {
				if (res.status === 200) {
					const dataTemp = res.data.data.map(item => ({
						label: item.nama,
						value: `${item.id}.${item.durasi}`
					}));

					setDataClass(dataTemp);
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onSelectCategory = idCategory => {
		getlistClass(idCategory);
		setDataClass([]);
		setDataBooking({ ...dataBooking, classId: null });
	};

	const onSelectClass = e => {
		const val = e.split('.');
		const idClass = parseInt(val[0]);
		let endTime = new Date(time.startTime).getTime() + val[1] * 60000;

		setTime({ ...time, endTime: new Date(endTime) });
		setDataBooking({
			...dataBooking,
			classId: idClass,
			endTime: FormatTime(endTime)
		});
	};

	const onSelectSlot = e => {
		console.log(e);
		const { action, start, end } = e;
		if (action === 'click') {
			setTime({ startTime: start, endTime: end });
			setDataBooking({
				...dataBooking,
				startTime: FormatTime(start),
				classDate: formatOldDate(start)
			});
			setIsFormBooking(true);
			setIsLoadingForm(true);
			getlistCategory();
			getlistTrainer();
			setState(prevState => ({
				...prevState,
				formBooking: !prevState.formBooking
			}));
		}
		// console.log(new Date(end).getMinutes() + 30);
	};

	const onCreate = () => {
		createSchedule(dataBooking)
			.then(res => {
				if (res.status === 201) {
					setState({ ...state, formBooking: false });
					message.success('Create Schedule Success');
					getDataSchedule();
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onSelectEvent = e => {
		const { id } = e;
		setIsFormBooking(false);
		setIsLoadingForm(true);
		setState(prevState => ({
			...prevState,
			formBooking: true
		}));

		detailScheduleById(id)
			.then(res => {
				if (res.status === 200) {
					let detail = res.data.data;
					setDetailBooking({
						scheduleId: detail.id,
						class: detail.class?.nama,
						classDate: detail.classDate,
						startTime: detail.startTime,
						endTime: detail.endTime,
						trainer: detail.trainer?.nama
					});
					setMembers(detail.member_schedules);
				}
				console.log(res);
				setIsLoadingForm(false);
			})
			.catch(err => {
				setIsLoadingForm(false);
				message.error(`${err.response.data.message}`);
				setState(prevState => ({
					...prevState,
					formBooking: false
				}));
			});
	};

	const onSetMember = scheduleId => {
		const dataTemp = dataMember.find(
			elemen => elemen.value === parseInt(idMember)
		);

		if (dataTemp) {
			const dataFound = members.find(
				elemen => elemen.member.id === dataTemp.value
			);
			console.log(dataFound);
			if (!dataFound) {
				// setMembers([...members, { id: dataTemp.value, nama: dataTemp.label }]);
				let data = { scheduleId: scheduleId, memberId: dataTemp.value };

				addMemberOnSchedule(data)
					.then(res => {
						console.log(res);
						onSelectEvent({ id: scheduleId });
						message.success('add member success');
					})
					.catch(err => {
						console.log(err);
						message.error('cannot add member ');
					});
			}
			if (dataFound) {
				message.error('member already exist');
			}
		}
	};

	const deleteMemberOnSchedule = (memberId, scheduleId) => {
		console.log(memberId);
		console.log(scheduleId);
		let data = {
			memberId: memberId,
			scheduleId: scheduleId
		};
		deleteMember(data)
			.then(res => {
				console.log(res);
				onSelectEvent({ id: scheduleId });
				message.success('member deleted');
			})
			.catch(err => {
				console.log(err);
				message.error('cannot deleted member ');
			});
	};

	const { components } = useMemo(
		() => ({
			components: {
				event: CustomEvent,
				toolbar: CustomToobar,
				timeSlotWrapper: CustomTimeSlotComponent,
				week: {
					header: CustomHeader,
					event: CustomEvent
				}
			}
		}),
		[]
	);

	const EventPropGetter = useCallback(() => {
		return {
			style: {
				backgroundColor: '#85C1E9',
				color: 'black',
				width: '100%',
				height: 'auto',
				borderLeft: `4px solid #bc770f`,
				borderRadius: '8px',
				textAlign: 'center',
				fontSize: '12px',
				// borderRadius: '0px',
				whiteSpace: 'pre-wrap'
			}
		};
	}, []);

	return (
		<React.Fragment>
			<div className="schedule-background">
				<Calendar
					selectable
					resizable
					step={30}
					timeslots={1}
					events={events}
					views={['week']}
					defaultView="week"
					localizer={localizer}
					components={components}
					formats={formats}
					style={{ height: '100vh' }}
					startAccessor="start"
					endAccessor="end"
					min={new Date(0, 0, 0, 6, 0)} // 8.00 AM
					max={new Date(0, 0, 0, 22, 0)} // Max will be 6.00 PM!
					onSelectEvent={events => onSelectEvent(events)}
					onSelectSlot={onSelectSlot}
					eventPropGetter={EventPropGetter}
				/>
			</div>
			{state.formBooking && (
				<Form
					show={state.formBooking}
					onHide={() => setState({ ...state, formBooking: false })}
					listCategory={dataCategory}
					listClass={dataClass}
					listTrainer={dataTrainer}
					listTime={ListTime}
					startTime={time.startTime}
					endTime={time.endTime}
					isFormBooking={isFormBooking}
					onSelectCategory={onSelectCategory}
					onSelectClass={onSelectClass}
					onSelectTrainer={value =>
						setDataBooking({ ...dataBooking, trainerId: value })
					}
					onSelectRepeat={value =>
						setDataBooking({ ...dataBooking, repeat: value })
					}
					onCheckRepeat={e =>
						setDataBooking({ ...dataBooking, isRepeat: e.target.checked })
					}
					onUntilDate={e =>
						setDataBooking({ ...dataBooking, untilDate: e.target.value })
					}
					onCreate={onCreate}
					//add booking
					listMember={dataMember}
					onCheckMember={e => setIdMember(e)}
					onSetMember={onSetMember}
					detailSchedule={detailBooking}
					members={members}
					deleteMemberOnSchedule={deleteMemberOnSchedule}
				/>
			)}
		</React.Fragment>
	);
};

const locales = {
	'en-US': enUS
};
const endOfHour = date => addHours(startOfHour(date), 1);
const now = new Date();
const start = endOfHour(now);
const end = addHours(start, 2);
// The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales
});

export default Schedule;
