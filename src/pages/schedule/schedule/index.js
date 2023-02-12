import { useState, useMemo, useCallback } from 'react';
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
import './schedule.scss';

const Schedule = () => {
	let formats = {
		timeGutterFormat: 'HH:mm'
	};

	const [events, setEvents] = useState([]);

	const onSelectEvent = e => {
		console.log(e);
	};

	const onSelectSlot = e => {
		const { action, start, end } = e;
		console.log(new Date(end).getMinutes() + 30);
		const data = {
			title: 'Test',
			start,
			end
		};
		setEvents([...events, data]);
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
				backgroundColor: '#F0F6AA',
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
